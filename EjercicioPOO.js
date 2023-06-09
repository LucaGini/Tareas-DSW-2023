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
  constructor(idProp, address, m2){
    this.idProp = idProp;
    this.address = address;
    this.m2 = m2;
  };

  getPrice(){
      this.m2 * PriceSpecs.pricePerSquareMeters;
  };

  getCommission(){
    this.getPrice() * PriceSpecs.commission;
  }
}

class House extends Property{
  constructor(idProp, address, m2, roomQtty){
      super(idProp, address, m2);
      this.roomQtty = roomQtty;
  }

  getPrice(){
    this.getPrice() * this.roomQtty * PriceSpecs.roomPriceMultiplier;
  }
}

class Garage extends Property{
  constructor(idProp, address, m2, parkingSpaces){
      super(idProp, address, m2);
      this.parkingSpaces= parkingSpaces;
  }

  getPrice(){
    this.getPrice() + (this.parkingSpaces * PriceSpecs.parkingSpaceTraditional);
  }
}

/*class Office extends Property{
  constructor(idProp, address, m2, services[]){
      super(idProp, address, m2);
      this.services = {
        idS
      }
  }

  getPrice(){
    this.getPrice() * this.roomQtty * PriceSpecs.roomPriceMultiplier;
  }
}*/



