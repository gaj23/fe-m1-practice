# Day_5
*****

## Statements, Variables, Data Types & Arrays
1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
> A single equals sign (=) acts as an assignment operator when declaring a variables value. For example `var hungry = true;` declares the variable hungry set to the boolean value of true.


2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
> Numbers are positive or negative, whole or decimal integers. Examples: 1, -2.5, 55, -100. When declaring a number as a variable, they are __not__ enclosed in quotation marks.   
> Strings are words or non-calculable numbers (like a zip code or a phone number) contained within quotation marks.
> Booleans are set to the values of either `true` or `false`. They are __not__ contained in quotation marks. Booleans are useful for assessing whether or not a statement meets certain parameters and thus if such statement is true or false.


3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
> 1. Must not start with a number; may start with a letter, dollar sign (&), or an underscore (_).
> 2. Hyphens (-) and periods (.) cannot be used.
> 3. Keywords or reserved words cannot be used (ie: `new` or `var`).
> 4. No two variables should match. This includes minimalistic changes to a variables case. (ie: `bestMovie` and `bestmovie` are not a good solution to naming troubles).
> 5. Name a variable that creates context about what type of information is stored
> 6. No spaces. Use camelCase conventions. (ie myFavoriteFoods)

4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
> An array allows you to store related values into one list that can be accessed through an array's index. Because the index starts with 0, if you want to access the first item listed you'd use: `myArray[0]`. If you want to access the 3rd item in the list you'd used `myArray[2]`, and so on. Using an array's index is a powerful tool that can allow you to edit an arrays contents by adding, subtracting, or replacing different values.


5.  What is the difference between an expression and a statement?
> A statement is an individual statement. An expression, however, __results in__ a single value.


6.  What are three types of operators and how are they used?
> Assignment, arithmetic, and string operators allow programmers to create single values and thus expressions. Assignment operators like the equals sign (=) sets a variable to a value. Arithmetic operators all you to perform mathematical equations through, for example, adding (+), subtracting (-), multiplying (*), or finding the remainder (%). String operators allow concatenation (when two or more strings are added together to create one new string) to occur.
