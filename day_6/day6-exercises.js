// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numOfChildren, partner, location, job) {
  console.log(`You will be a ${job} in ${location}, married to ${partner} with ${numOfChildren} children!`);
}

tellFortune(5, "Fred", "Denver", "stay at home mom");
tellFortune(3, "Mary", "Asheville", "lumberjack");
tellFortune("no", "Carlos", "Austin", "biologist");

// The Age Calculator
// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear) {
  var today = new Date();
  var year = today.getFullYear();
  var ageOne = year - birthYear;
  var ageTwo = ageOne - 1;
  console.log(`You are either ${ageOne} or ${ageTwo} years old.`);

}

calculateAge(1989);
calculateAge(1960);
calculateAge(1986);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amtPerDay) {
  var maxAge = 100;
  amtPerDay = Math.round(amtPerDay);
  var lifetime = (maxAge - age) * amtPerDay;
  console.log(`You will need ${lifetime} to last you until the ripe old age of ${maxAge}.`);

}

calculateSupply(14, 3.3);
calculateSupply(50, 8);
calculateSupply(80, 10.8);