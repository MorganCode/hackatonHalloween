class GiverModel {

  constructor(info) {
 

      this.id = info.id;
      this.firstName = info.firstName;
      this.lastName = info.lastName;
      this.password = info.password;
      this.email = info.email;
      this.avatar = info.avatar;

      this.adress = {
        streetNumber: info.adress.streetNumber,
        streetType: info.adress.streetType,
        streetName: info.adress.streetName,
        postalCode: info.adress.postalCode,
        cityName: info.adress.cityName,
        aptmtNumber: info.adress.aptmtNumber,
      };

      this.candy = {
        coca: info.candy.coca,
        carambar:info.candy.carambar,
        croco: info.candy.croco,
        coca:info.candy.coca,
        schtroumpfs:info.candy.schtroumpfs,
        sucette:info.candy.sucette,
        dragibus: info.candy.dragibus,
      };

      this.hasCandy = info.hasCandy;
      this.finalNotation = info.finalNotation;
      this.notation = [];
      this.available = info.available;
  
  }
}


export default GiverModel;