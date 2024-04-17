/**
 * Lexical scoping:
 * 
 * Lexical scoping (sometimes known as static scoping ) is a convention used with 
 * many programming languages that sets the scope (range of functionality) of a variable 
 * so that it may only be called (referenced) from within the block of code in which 
 * it is defined.
 */

function OuterFunction() {
  let outerVariable = 'I am outside!';

  function InnerFunction() {
    let innerVariable = 'I am inside!';
    console.log(outerVariable); // I am outside!
  }

  console.log(innerVariable); // ReferenceError: innerVariable is not defined

  InnerFunction();
}

OuterFunction();