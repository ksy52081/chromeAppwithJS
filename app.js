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
