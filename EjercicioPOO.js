'use strict'

class Owner{
  constructor(id, firstName, lastName, email){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  };

}

class PriceSpecs{
  pricePerSquareMeters = 30;
  roomPriceMultiplier = 40;
  parkingSpaceTraditional = 50;
  commission = 10;
}

class Property{
  constructor(idProp, address, m2, Owner){
    this.idProp = idProp;
    this.address = address;
    this.m2 = m2;
    this.Owner = Owner;
  };

  getPrice(){
      this.m2 * PriceSpecs.pricePerSquareMeters;
  };

  getCommission(){
    this.getPrice() * PriceSpecs.commission;
  }
}

/*p = new Property(1, "mendoza 456", 100, );
p.getPrice();*/

class House extends Property{
  constructor(idProp, address, m2, roomQtty){
      super(idProp, address, m2);
      this.roomQtty = roomQtty;
  }

  getPrice(){
    let p = this.getPrice() * this.roomQtty * PriceSpecs.roomPriceMultiplier;
    return p;
  }
}

class Garage extends Property{
  constructor(idProp, address, m2, parkingSpaces){
      super(idProp, address, m2);
      this.parkingSpaces= parkingSpaces;
  }

  getPrice(){
    let p = super.getPrice() + (this.parkingSpaces * PriceSpecs.parkingSpaceTraditional);
    return p;
  }
}

/*class Office extends Property{
  constructor(idProp, address, m2, arrayServices[]){
      super(idProp, address, m2);
      //this.arrayServices[] = arrayServices;
      }
  }

  getPrice(){
    if(arrayServices.lenght() != 0){
    let sum = arrayServices.forEach(s => {
      sum = sum + s.price;
    });
    let p = super.getPrice() * sum;}
  }


class Services{
  constructor(idService, price, description, Office){
    this.idService = idService;
    this.price = price;
    this.description = description;
    this.Office = Office;
  }
}

let arrServices = [serv1, serv2, ...]
*/
---
index.ts
import{ Game}from " ./Game.js"
  /*const = atila {
  id:1
  name: " atila" 
  }*/
 const = morgan {
  id:2
  name: "morgan le fey" 
  }



console.log(atila)
console.log(morgan)

const round1 = new Game(atila, morgan)
console.log(´next: ${round1.nextStageCharacter(-1)?.name}´);
---
//game.ts
export class Game { 
  privante startingCharacter: number;
  contructor(public character1: any, public character2:any ){         //asume que es una prop, pero no puede advinar que es /,para que no tire error ANY ENEMIGO
   this.startingCharacter = randomInt(2)
      }
  }            
}

characterForStage(stage: number):{
if (stage < 0) return {id:0, name:"No name"};
//if(stage+this.startingCharacter%2 == 0){
  return this.character1}
else{return this.character2}
}
---
  export class Character{
  constructor (private id: number, private name: string){
    
  }
