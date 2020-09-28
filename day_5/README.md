# Day 5: JavaScript

## Open your local copy of fe-m1-practice in Atom

In the day_5 directory, create another file called `day5-exercises.md`. This is where you'll put your answers to the following questions.

## Read Chapter 2 (Statements, Variables, Data Types, & Arrays) from [JavaScript & jQuery: Interactive Front-End Web Development](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_5?ie=UTF8&qid=1541447422&sr=8-5&keywords=duckett) __done__

Answer these questions about the reading in your `day5-exercises.md` file:

1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
5.  What is the difference between an expression and a statement?
6.  What are three types of operators and how are they used?

Open up the Chrome Developer Tools, and open the Console tab. This is where we can write some JavaScript! If you don't remember how to get to the console, watch [this video](https://www.youtube.com/watch?v=JzZFccCEgGA) to review.

Pro tip: If you want to write more than one line of code in the console before running the code, then use `shift + enter`.

For each task listed below, enter it in the console:

*   `25` *ok*  
*   `"this is my string"` (notice the output's color difference between a number and a string) *ok*  
*   `var myNewString = "Hello Turing!";` *ok*  
*   `myNewString` Before you hit Enter, what do you expect to see in the console? *ok, should print Hello Turing, it does.*
*   `var myNum = 9;` *ok*  
*   `myNum` Before you hit Enter, what do you expect to see in the console? *should print 9, it does. ok*  
*   `var anotherString = "How are You?"` *ok*  
*   `"Connect" + " " + "these" + " " + "strings."` What happened? This is called string concatenation. Notice the strings with spaces. *If spaces are no included inside of the quotation marks where appropriate, then they do not manifest. ok*  
*   `myNewString + anotherString` This is also string concatenation using variables. *ok*  
*   `5 > 3` returns a boolean value of true. How could you change this expression to return false? *set 5 less than 3 (5 < 3) to return a boolean value of false*  
*   `"2" === 2` and `"2" == 2` Why does one of those expressions return true and one return false? *When using two equal signs (==), it evaluates if the value is the same. Using three equal sings (===) checks if the value and the data type are the same. The value of 2 does equal two but the data type of "2" (string) and 2 (number/integer) are not the name.*  
*   `if (8 < 9) {console.log("Hey!")}` Before you enter this code in the console, what do you think will happen? Will it log Hey to the console? *Because the boolean expression of 8 < 9 will evaluate as true, "Hey!" will be printed to the console.*  
*   Write an if/else statement where the code in the `else` block is executed. For example: `if (3 < 1){console.log("if block")} else {console.log("else block")}`
> `if ("3" === 3) {console.log("I'm shocked!")} else {console.log("I knew it was too good to be true!")}`  

*   Use the console to solve [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/variables.html). *see problemSolving.js*  

## Save your day 5 file in git and push to GitHub __done__

Using the commit message: `Add day 5`, add, commit, and push your changes to GitHub!
