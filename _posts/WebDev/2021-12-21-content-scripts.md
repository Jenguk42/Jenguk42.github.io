---
title: "Content scripts"

categories: 
- Web Development

tags:
- Chrome Extension

toc: true
toc_sticky: true
---

> ✒ Reference: [Chrome Documentation](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

## Content script capabilities

Content scripts are files run in the context of web pages. Using the standard DOM, they enable (1) reading the details of the web pages the browser visits, (2) make changes to them, and (3) pass information to their parent extension.

Content scripts can access Chrome APIs used by their parent extension by exchanging messages, and access the URL of a file in the extension via `chrome.runtime.getURL()`. This URL can be used like any other URLs.

```jsx
// Code for displaying <extensionDir>/images/myimage.png:
var imgURL = chrome.runtime.getURL("images/myimage.png");
document.getElementById("someImage").src = imgURL;
```

## Work in isolated worlds

Content scripts live in an isolated world (a private execution environment that is not accessible to the page or other extensions), therefore it can make changes to its JavaScript environment without conflicting with the page's content scripts.

Any running extensions, content scripts, and the web page have their own isolated world, which means that they cannot access the context and variables of the others.

## Inject scripts with static declarations

For scripts that are automatically run on a well known set of pages, you can register static content script declarations in the manifest under the `content_scripts` field.

```json
{
 "name": "My extension",
 "content_scripts": [
   {
     "matches": ["https://*.nytimes.com/*"],
     "css": ["my-styles.css"],
     "js": ["content-script.js"]
   }
 ]
}
```

| Name | Type | Description |
| --- | --- | --- |
| `matches` | array of strings | *Required.* Specifies which pages this content script will be injected to. |
| `css` | array of strings | *At least one `css` or `js` is mandatory.* The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array, before any DOM is constructed or displayed for the page. |
| `js` | array of strings | *At least one `css` or `js` is mandatory.* The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this array. |
| `match_about_blank` | boolean | *Optional.* Whether the script should inject into an about:blank frame where the parent or opener frame matches one of the patterns declared in matches. Defaults to false. |

More information on how to manipulate the `content_scripts` field can be found [here](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality)!

## Communication with the embedding page

Execution environments of content scripts and pages that host them are isolated from each other, but they share acecss to the page's DOM. If the page wishes to communicate with the content script, or with the extension via the content script, it must do so through the shared DOM.

```jsx
var port = chrome.runtime.connect();

window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source != window) {
    return;
  }

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);
```

```jsx
document.getElementById("theButton").addEventListener("click", () => {
  window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
}, false);
```

The non-extension page posts messages to itself. This message is intercepted and inspected by the content script, then posted to the extension process. The page can communicate with the extension process in this way.
