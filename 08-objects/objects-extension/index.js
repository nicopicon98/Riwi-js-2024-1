// const mySymbolKey = Symbol("mySymbolKey");

// const medidasCama = {
//     [mySymbolKey]: mySymbolKey,
//     alto: 2,
//     largo: 2,
// };

// const newarr = Object.entries(medidasCama); // jus the key value pairs as an array
// const newarr = Object.keys(medidasCama); // just the keys as an array
// const newarr = Object.values(medidasCama); // just the values as an array
// const newarr = Object.getOwnPropertyDescriptors(medidasCama); // all the properties descriptors of an object
// const newarr = Object.getOwnPropertyNames(medidasCama); // all the properties names of an object
// const newarr = Object.getOwnPropertySymbols(medidasCama); // all the properties symbols of an object
// const newarr = Object.isExtensible(medidasCama); // check if the object is extensible, own property writable is false
// const newarr = Object.isFrozen(medidasCama); // check if the object is frozen, own property writable is false
// const newarr = Object.isSealed(medidasCama); // check if the object is sealed, own property configurable is false
// console.log(newarr);

Object.defineProperty(medidasCama, "ancho", {
    value: 1.5, // default value
    configurable: false, // can be deleted
    enumerable: true, // can be iterated
    writable: true, // can't be changed
});

// console.log(medidasCama);
// //delete medidasCama.ancho; // since configurable is true, this will delete the property
// medidasCama.ancho = 2.5; // since writable is false, this will not change the value
// console.log(medidasCama);

const a = Object.freeze({
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
    },
});

a.name = "Doe"; // this will not change the value
a.address.city = "LA"; // this will change the value, why?
// because the freeze method only works on the first level of the object

console.log(a);