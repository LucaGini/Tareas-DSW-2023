'use strict'

const protoChain = (obj) => {
  let testObject = obj;
  while (Object.getPrototypeOf(testObject) !== null){
    console.log(testObject);
    testObject = Object.getPrototypeOf(testObject);

  }
  console.log('null');
}

class Person{
  nombre = 'Luca';
  apellido = 'Gini';
  edad = 21;
  //etc...
}

let persona = new Person();

protoChain(persona);
