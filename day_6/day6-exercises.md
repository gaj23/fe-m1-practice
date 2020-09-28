# Day 6
****


##Functions & Scope
1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
> `sayHello()` calls the function and results in "Hello!" being printed to the console. `sayHello` is not a function and will result in an error code because it is not defined. 


2.  What is the difference between function parameters and arguments?
> Function parameters act as general placeholders that allow arguments (the specifics) to be passed into a function. Argument are what the user interacts and changes.


3.  What is the keyword `return` used for?
> `return` passes a value from the function into the code, allowing it to accessed globally.


4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
> Too many global variables can result in crowded script that contain conflicts and restraints. Local variables contained inside of a function result in cleaner code that can be easier to debug. Additionally, without the amount of memory global variables need, local variables can help a web page load faster. However, global variables still have their place. For example, certain constant variables that are used over and over again inside of various functions are best stored at the global level.
