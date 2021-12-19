---
title: "Creating a Google Chrome extension"

categories: 
- Web Development

tags:
- Chrome Extension
- 
toc: true
toc_sticky: true
---

> ✒ Reference: [Chrome Documentation](https://developer.chrome.com/docs/extensions/)

## What is a Chrome extension?

A Chrome extension is a software program built on HTML, CSS, and JavaScript that allows you to add functionality to Chrome browser. It lets you "extend" the browser by using APIs to modify browser behaviors and access web content.

To create an extension, you assemble the resources that constitute the extension. You can test and debug the program using the extension developer mode of Chrome, then package and distribute it to users.

## The architecture overview

### The manifest file, `manifest.json`

- Gives browser information about the extension
- An extension must include an icon that sits in the browser toolbar.

### A background script, `background.js`

- The extension's event handler, contains listeners for browser events.
- It is loaded when it is needed, and unloaded when it goes idle.

### UI elements

- Extension UI page: `popup.html`
  ![popup](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/8oLwFaq0VFIQtw4mcA91.png?auto=format&w=338)
  - Contains ordinary HTML pages with JavaScript logic.
  - It can use the declerative content API to set rules in `background.js`, so the availability is restricted to certain hosts.
- Content script: `contentscript.js`
  ![contentscript](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/466ftDp0EXB4E1XeaGh0.png?auto=format&w=439)
  - Utilized when you need to read or write to web pages.
  - Contains JavaScript that executes in the contexts of a page that has been loaded into the browser.
  - Reads and modifies the DOM of web pages the browser visits.
  - A content script can communicate with their parent extension by exchanging messages and storing values using the storage API.
