'use strict'

function prototypesChain(obj){
  let testObject = obj;
  while (Object.getPrototypeOf(testObject) !== null){
    console.log(testObject);
    testObject = Object.getPrototypeOf(testObject);

  }
}

class Person{
  nombre = 'Luca';
  apellido = 'Gini';
  edad = 21;
  //etc...
}

let persona = new Person();

prototypesChain(persona);