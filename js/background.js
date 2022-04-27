const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]

chosenImage = images[Math.floor(Math.random()*images.length)];

// console.log(chosenImage)

// get~~~로 html의 element를 가져오는게 아니라, 생성하는 것.
const bgImage = document.createElement("img");


// <img>만 있는 빈껍데기에 src="img/0.jpg" 를 집어넣는다.
bgImage.src = `img/${chosenImage}`;

// 생성한 img 탭을 body 내부에 추가하기
document.body.appendChild(bgImage);
