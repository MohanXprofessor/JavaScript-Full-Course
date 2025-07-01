// var let const

// var is javascript es5 version

a=12; // not preferred to used this way, but it works

var b=13; // var is function scoped, can be redeclared and updated

let c=14; // let is block scoped, introduced in ES6

// const is block scoped and immutable, also introduced in ES6

const d=3.14; // const is immutable

var username="John"; 

var a; // declared
var a=10; // initialized
var a=20; // redeclared and updated

let username2="Doe"; // let can be updated but not redeclared in the same scope

// let username2="Smith"; // this will throw an error because let cannot be redeclared

let username3="Jane"; // let can be updated but not redeclared in the same scope

// let username3="Doe"; // this will throw an error because let cannot be redeclared

const pi=3.14; // const cannot be updated or redeclared

// pi=3.14159; // this will throw an error because const cannot be updated


// var and let different 

var a=12; // window mein add hota hai
// var is function scoped, can be redeclared and updated
// var a=13; // redeclared and updated, window mein add hota hai

let b=13; // window mein add nahi hota hai