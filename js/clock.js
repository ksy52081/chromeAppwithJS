const clock = document.querySelector("h2#clock");

function getclock(){
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

//"새로고침 한 직후에 일단 한번 출력"한 후, 1000ms마다 소환하자.
getclock();
 setInterval(getclock, 1000);
// setTimeout(sayHello, 5000);
