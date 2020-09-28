// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var numOfChildren = 8;
var partnersName = 'Gale';
var location = 'Georgia';
var jobTitle = 'VP';

console.log("Good news! You will be a " + jobTitle + " in " + location + " and married to " + partnersName + " with " + numOfChildren + " children!");




// The Age Calculator
// Forgot how old you are? Calculate it!
// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.
var currentYear = 2020;
var birthYear = 1993;

var earlyBaby = currentYear - birthYear;
var laterBaby = earlyBaby - 1;

console.log("You are either " + earlyBaby + " or " + laterBaby + " years old, depending on what month you were born!");



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 27;
var maxAge = 100;
var perDay = 8;
var restOfMyLife = (maxAge - myAge) * 8;

console.log("I will get to eat " + restOfMyLife + " bars of dark chocolate until I am " + maxAge + " years old.");