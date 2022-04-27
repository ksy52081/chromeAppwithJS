alert("hi");
const a = 5;
const b = 2;
let myName = "snagyoon"

console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log("my name is "+ myName);

myName = "Sangyoon Kim"
console.log("my new name is "+ myName);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thr = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const daysOfWeek = mon+tue+wed+thr+fri+sat+sun;
const arrayDaysOfWeek = [mon,tue,wed,thr,fri,sat];
console.log(arrayDaysOfWeek[4])
arrayDaysOfWeek.push("sun")
console.log(arrayDaysOfWeek[4])

const nonsence = [1,"hello", false, null, true, undefined, "SY"];


const playerName = "nico";
const playPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
    name : "nico",
    points: 10,
    fat:true
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
// object는 업데이트가 가능하다.
player.fat = false;
//  존재하지 않는 property를 새로 추가할 수 있다.
player.height = 175;

player.points = player.points + 15;

function sayHello(){
     console.log("Hello! my name is ")
}

function introduce(nameofPerson, age){
    console.log("Hello my name is" + nameofPerson + "and I'm " + age + "old.")
};

introduce("nico", 27);
introduce("Kim", 31);
introduce("dany", 19); 

function plus(fstnum, sndnum){
    console.log(fstnum + sndnum);
}

function divide(a,b){
    console.log(a/b);
}
console.log(fstnum);


const player = {
    name : "kim",
    sayHello: function(otherPersonsName){
        console.log("hello!" + otherPersonsName + "nice to meet you")
    }
// 밖에 있을 때 함수 선언하는 거랑 조금 다르지

}

player.sayHello("Lynn");



const showcalculator = {
    add : function(a,b){
        console.log(a+b);
    },
    minus : function(a,b){
        alert(a-b);
    },
    multiple : function(a,b){
        console.log(a*b);
    },
    divide : function(a,b){
        alert(a/b);
        return "hello!"
    },
    powerby : function(a,b){
        return (a**b);
    },
};


const calculator = {
    add : function(a,b){
        return (a+b);
    },
    minus : function(a,b){
        return (a-b);
    },
    times : function(a,b){
        return (a*b);
    },
    divide : function(a,b){
        return (a/b);
    },
    power : function(a,b){
        return (a**b);
    },
};

// return으로 값을 받을 수 있으면 아래와 같은 일을 할 수 있게 된다.
const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);


// #if 문 사용하기

const age = parseInt(prompt("How old are you?"));
// prompt는 메세지를 던지고, 입력값을 받아온다.
// 가장 원초적인 방식이다. 값을 입력을 하기 전까지는 이후의 코드를 읽기를 멈춘다.
// 디자인을 바꿀수 없고, 코드가 멈추는 무식한 특성때문에 요즘은 잘 쓰지 않는다.
console.log(age);
console.log(typeof(age));
console.log(parseInt(age));

console.log(isNaN(age));

if (isNaN(age) || age < 0){
    console.log("Plz write a positive number");
}else if(age < 19){
    console.log("U R too young");
}else if(age >=18 && age <=50){
    console.log("U can Drink")
}else if(age>50 && age <=80){
    console.log("U should exercise to be healthy")
}else if (age === 100){
    console.log("U R Wise")
}else if (age >80){
    console.log("U can do whatever you want")
}else if (age !== 100){
    console.log("이 조건문에 올리가 없겠지")
}