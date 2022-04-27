const clock = document.querySelector("h2#clock");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

//"새로고침 한 직후에 일단 한번 출력"한 후, 1000ms마다 소환하자.
getclock();
 setInterval(getclock, 1000);
// setTimeout(sayHello, 5000);
  