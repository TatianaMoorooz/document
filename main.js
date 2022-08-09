let str1 = 'Kyiv';
let str2 = "Ukraine";
let bigIntNumber = 41167336;
let variable = true;

console.log(str1);
console.log(str2);
console.log(bigIntNumber);
console.log(variable);

let number1 = 40;
let number2 = 70;
let result = number1 * number2;

console.log(result)

let time = 2;
let speedfFirst = 95;
let speedfSecond = 114;
let result1 = speedfSecond + speedfFirst;
 result2 = result1 * time;

console.log(result2)

const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 20){
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}


switch(randomNumber) {
     case '< 20':
       console.log("randomNumber меньше 20");
       break;
     case '> 50':
        console.log("randomNumber больше 50");
        break;
    case 'default':
        console.log("randomNumber больше 20, и меньше 50");
} 
