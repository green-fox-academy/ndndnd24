'use strict';

let daily: number = 6;
let semester: number = 17;
let workdays: number = 5;
let avWorkHours: number = 52;

console.log(daily * workdays * semester);
console.log(daily * workdays / avWorkHours * 100 + '%');

console.log();
console.log('Let\'s pimp this!');
console.log();

console.log('An average Green Fox attendee codes 6 hours daily.');
console.log('The semester is 17 weeks long.');
console.log('An attendee codes ' + (daily * workdays * semester) + ' hours in a semester.');
console.log('This is ' + Math.round(daily * workdays / avWorkHours * 100) + '% of the average weekly working hours!');
