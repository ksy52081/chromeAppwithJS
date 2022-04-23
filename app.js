// const title = document.getElementById("title");

// console.dir(title);
// // console.log 가 아닌 
// // console.dir()의 경우 element를 더 자세히 보여준다. 

// title.innerText = "Got You! "
// //  js코드로 html 출력이 바뀜

const hellos =document.getElementsByClassName("hello");
console.log(hellos);
// 결과값 HTMLCollection(3) [h1.hello, h1.hello, h1.hello]0: h1.hello1: h1.hello2: h1.hellolength: 3[[Prototype]]: HTMLCollection
// hellos는 수많은 h1을 가지고 있는 array, list이다.
// 따라서, hellos.~~~ 같이 무언가를 가져올 수 없다.

const hellos =document.getElementsByTagName("h1");

const title2 = document.querySelector(".hello h1")
// css selector 인 . 을 넣고
// hello라는 classname을 특정지은 다음
// 그 중에서도 그 안에 있는 h1을 요청한다.
// className의 selector .
// id의 selector #
const title2 = document.querySelector(".hello h1")
const title2 = document.querySelector(".hello h1:first-child")