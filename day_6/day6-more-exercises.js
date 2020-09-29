// Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
//how to get out of military time? for loop if 0-11 it's am if it's 12-23 it's pm?
console.log(`Today is ${date} and it's ${time}.`);