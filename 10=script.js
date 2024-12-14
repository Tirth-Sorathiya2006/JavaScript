//Dates and Time in JavaScript

let todayDate = new Date();
console.log(typeof todayDate); //object is answer.


console.log(todayDate.toString());
console.log(todayDate.toDateString());
console.log(todayDate.toTimeString());

console.log(todayDate.toLocaleString());
console.log(todayDate.toLocaleDateString());
console.log(todayDate.toLocaleTimeString());

console.log(todayDate.toUTCString());
console.log(todayDate.toISOString());
console.log(todayDate.toJSON());

let myCreatedDate = new Date(2006, 7, 3); //NOTE : We need to pass the (yyyy, mm , dd) form and the month in JavaScript is starts from the 0.
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleDateString());

let myDateWithTime = new Date(2006, 7, 3, 5, 3, 30, 300, 600); //It is only consider 5hr: 3min: 30sec , after that it is ignore the 300 and 600.
console.log(myDateWithTime.toLocaleString());

//You also pass the string for date
let strDate = new Date("8-3-2006"); //here I am try to pass the date in formate of mm- dd -yyyy
console.log(strDate.toLocaleString());

let myTimeStemp = Date.now(); //It is provide the value of time according to today`s date. It is provide the value in mili-seconds.

console.log(myTimeStemp);
console.log(myTimeStemp/1000); //We get the value in seconds.
console.log(Math.floor(myTimeStemp/1000)); //It provide the value in seconds without decimal points.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay()); //Monday = 1
console.log(newDate.getFullYear());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getHours());

newDate.toLocaleString("default", {
    weekday: "long"
});