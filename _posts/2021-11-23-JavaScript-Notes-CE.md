---
title: "JavaScript - 생활 코딩"

categories:
- JS

---

###### ✒ 본 노트는 [생활 코딩 블로그의 JavaScript 강의](https://opentutorials.org/course/3085) 를 토대로 작성되었습니다. 



## Basics

- JS는 HTML을 제어하는 언어이다.
- 브라우저는 한 번 출력되면 자신을 바꿀 수 있는 능력이 없다.  → JS 코드를 이용해 브라우저와 상호 작용할 수 있다.
- i.e. night to day button
```html
<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    ">
```
- onclick 속성이 위치한 버튼을 클릭했을 때 실행 시킬 자바스크립트 코드
- body tag의 style이 달라짐 (CSS 코드가 바뀜)



## script tag

- JS를 사용하는 법: html에게 "지금부터 js를 시작합니다!" 하고 알려줘야 함
- `<script>`와 `</script>` 안에 있는 코드를 웹 브라우저가 js로 인식

``` html
<h1>JScode</h1>
<script> 
    document.write(1+1); <!-- javascript를 이용해 html을 바꿈 --> 
</script>
```
> JS: 동적 (1+1을 2로 바꿈) 

``` html
<h1>html</h1>
1+1 <!-- html 자체를 바꿨음 -->
```
> html: 정적 (1+1을 그대로 출력함)



## event

- 사용자의 반응에 따라 웹 브라우저에서 일어나는 사건 (`on`으로 시작)
- event를 이용하여 **사용자와 상호작용하는 웹 페이지**를 만들 수 있음
- 웹브라우저가 event의 속성값 (반드시 JS가 와야 함)을 기억하고 있다가, event가 일어날 경우 기억해둔 JS 코드를 JS의 문법에 따라 해석하여 실행

``` html
<input type="button" value="create alert" onclick="alert('hi')">
```
>  `onclick`: 클릭했을 경우 event를 실행

``` html
<input type="text" onchange="alert('changed')">
```
> `onchange`: 입력값이 달라졌을 경우 event를 실행

``` html
<input type="text" onkeydown="alert('key down!')">
```
> `onkeydown`: key를 눌렀을 경우 event를 실행



## console

- Inspect → Console (Inspect → Elements에서 esc)
- html 파일을 새로 만드는 대신 chrome 페이지에서 JS 코드를 즉석으로 실행시킬 수 있음
- 콘솔에서 실행시키는 JS는 해당 웹 페이지를 대상으로 실행됨 (페이지 안에 삽입된 JS처럼 동작)
- 편리하고 유용함 (나의 필요에 따라 이미 만들어진 웹사이트와 관련된 데이터를 처리할 수 있음)



## CSS 기초

- style 속성을 이용해서 CSS를 사용해 디자인을 바꿀 수 있음
  - JS와 완전히 다른 언어
  - (검색해서 문제 해결: i.e. CSS background color property)

```html
<h2 style="background-color:coral;
           color:powderblue">
    JavaScript
</h2>
```

- style 태그를 이용해 CSS를 사용할 수 있음
  - `<div> </div>`: 의미와 기능은 없지만 CSS 또는 JS를 통해서 어떤 정보를 제어하고 싶을 때 사용 (줄바꿈)
  - `<span> </span>`: 같은 작용, 줄바꿈 없음
- `head` 태그 속에 `style`이라는 html 코드를 넣음
  - `<script></script>` 태그처럼 태그 속 내용이 CSS라는 것을 웹 브라우저에게 알려주는 구분자

```html
<html>
  <head>
    <style>
      #first{
        color:green;
      } /*웹페이지 내에서 **id** 값이 first인 모든 태그의 색을 green으로 바꿈*/
      .js{
      	color:red;
      } /*웹페이지 내에서 **class** 값이 js인 모든 태그의 색을 red로 바꿈*/
      span{
        color:blue;
      } /*웹페이지 내의 모든 span 태그의 색을 blue로 바꿈
    </style> 
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <h2>JavaScript</h2>
      <p>
      <span id="first" class="js">JavaScript</span> (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside <span>HTML</span> and <span>CSS</span>, <span class="js"></span>JavaScript</span> is one of the three core technologies of World Wide Web content production.
      </p> <!-- 첫번째 JavaScript: green, 나머지 JavaScript: red, HTML과 CSS: blue-->
  </body>
</html>
```

- 선택자 `span` vs `class` vs `id`
  - 우선 순위: `id` → `class` → `span`
  - `class`: 무언가를 grouping하고 싶을 떄 같은 이름의 class로 지정 (더 포괄적)
  - `id`: 어떤 한가지 대상을 식별함, 해당 페이지 내에서 같은 id를 두 번 이상 쓸 수 없음 (예외 처리)


- 제어할 태그 선택하기
```html
<html>
<body>
	<h1><a href="index.html">WEB</a></h1>
    <input type="button" value="night" onclick="
                                                document.querySelector('body').style.backgroundColor = 'black';
                                                document.querySelector('body').style.color = 'white';
                                                "> <!-- 바디 태그를 선택해 JS를 이용하여 DOM에 속한 요소들의 색을 바꿈 -->
    <input type="button" value="day" onclick="
                                              document.querySelector('body').style.backgroundColor = 'white';
                                              document.querySelector('body').style.color = 'black';
                                              ">
	<p> ... </p>
</body>
</html>
```