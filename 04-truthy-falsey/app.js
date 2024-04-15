/**
 * 
 * Truthy and Falsey values
 * 
 * In JavaScript, a truthy value is a value that is considered true when encountered in a 
 * Boolean context. All values are truthy unless they are defined as falsy 
 * (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
 * 
 * Falsy values are values that are considered false when encountered in a Boolean context.
 * 
 */

// Falsey values

const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];

falsey.forEach((value) => {
    console.log(`Value: ${value}, Type: ${typeof value}, Boolean: ${Boolean(value)}`);
});

// Truthy values

const truthy = [true, 1, -1, 1n, "Hello", [], {}, Symbol(), function() {}, new Date()];

truthy.forEach((value) => {
    try {
        console.log(`Value: ${value}, Type: ${typeof value}, Boolean: ${Boolean(value)}`);
    } catch (error) {
        console.error(error);
    }
});

if (truthy[7]) {
    console.log("Symbol is truthy"); 
}
