// const title = document.getElementById("title");

// console.dir(title);
// // console.log 가 아닌 
// // console.dir()의 경우 element를 더 자세히 보여준다. 

// title.innerText = "Got You! "
// //  js코드로 html 출력이 바뀜



// const hellos =document.getElementsByClassName("hello");
// console.log(hellos);
// // 결과값 HTMLCollection(3) [h1.hello, h1.hello, h1.hello]0: h1.hello1: h1.hello2: h1.hellolength: 3[[Prototype]]: HTMLCollection
// // hellos는 수많은 h1을 가지고 있는 array, list이다.
// // 따라서, hellos.~~~ 같이 무언가를 가져올 수 없다.

// const hello2 =document.getElementsByTagName("h1");
// const title1 = document.querySelector(".hello h1")
// // css selector 인 . 을 넣고
// // hello라는 classname을 특정지은 다음
// // 그 중에서도 그 안에 있는 h1을 요청한다.
// // className의 selector .
// // id의 selector #
// const h1_second = document.querySelector(".hello h1:first-child")
// const title3 = document.querySelector("div.hello:first-child h1:first-child")
// // class hello를 가진 div 내부의 h1을 가져와라


// // #3.0 #3.1 #3.2 JS Finding Elements & #3.3 #3.4 #3.5 Events
// const h1_1 = document.querySelector("div.hello:first-child h1:first-child");
// h1_1.style.color = "blue";


// const h1_2 = document.querySelector("div.hello:first-child h1:nth-child(2)");
// const h1_second = document.querySelector("div.hello:nth-child(2) h1")
// function handleTitleClick(){
//     console.log("h1_2 was clicked!");
// };
// h1_2.addEventListener("click", handleTitleClick);
// function handleMouseEnter(){
//     h1_second
//     console.log("mouse is on h1_2!");
// }
// h1_2.addEventListener("mouseenter", handleMouseEnter);
// function handleMouseLeave(){
//     console.log("mouse leaves from h1_2!");
// }
// function handleTitleMouseEnter(){
//     h1_second.innerText = "Mouse is Here";
// }
// function handleTitleMouseLeave(){
//     h1_second.innerText = "Mouse leaves";
// }
// h1_2.addEventListener("mouseenter", handleTitleMouseEnter);
// h1_2.addEventListener("mouseleave", handleTitleMouseLeave);

// // 내가 직접 실행 버튼을 누르지 않고, h1_2라는 element에게 click이라는 event가 발생했을 때 handleTitleClick이라는 함수가 실행되었으면 좋겠다.


// // 이미 정의내려져 있는 window 에도 다양한 event들이 있다.
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato"
// }
// window.addEventListener("resize", handleWindowResize);

// // 복사하기 기능을 사용하는 이벤트도 감지할 수 있다/
// function handleWindowCopy(){
//     alert("copier!")
// }
// window.addEventListener("copy", handleWindowCopy);

// // wifi가 연결되어있는지, 끊겨있는지도 할 수 있다!
// function handleWindowOffline(){
//     alert("SOS! no WIFI!")
// }
// window.addEventListener("offline", handleWindowOffline);

// function handleWindowOnline(){
//     alert("WIFI is Connected")
// }
// window.addEventListener("online", handleWindowOnline);


const h1 = document.querySelector("div.hello:first-child h1:first-child");
function handleTitleClick(){
    // console.log(h1.style.color);
    // h1.style.color="blue";
    // console.log(h1.style.color);
    const currentcolor = h1.style.color;
    let newColor; //아무것도 안들어있고, 업데이트 가능한 변수생성
    if(currentcolor==="blue"){
        newColor= "tomato"
    }else{
        newColor="blue"
    }
    h1.style.color = newColor; // element의 style을 js에서 변경하는걸 선호하지 않는다(다른 언어를 섞으면 귀찮아질 수도 있다 ~ css 파일에서 하자.)
}
h1.addEventListener("click", handleTitleClick);