// const API_KEY = "여기에 api-key를 가져와야함 ~ 별개의 파일에서 불러오고 gitignore하고싶다.";
const API_KEY = "49dd7c21cae4d81fedb0d93745ce3b7b"

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat}, ${lon}`)
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoFail(){
    alert("can't find you no weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
