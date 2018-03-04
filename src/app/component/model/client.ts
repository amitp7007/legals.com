export class
Client {
  name: string;
  address: string;
  city: string;
  caseType: string;
  contact: number;

  constructor(name, address, city, caseType, contact){
    this.name = name;
    this.address = address;
    this.city = city;
    this.caseType = caseType;
    this.contact = contact;
  }
}
