export class Court {
 courtTile: string;
 courtType: string;
 address: string;
 city: string;
 pin: number;
 imageUrl: string;

 constructor(courtTitle, courtType, address, city, pin, imageUrl) {
   this.courtTile = courtTitle;
   this.courtType = courtType;
   this.address = address;
   this.city = city;
   this.pin = pin;
   this.imageUrl = imageUrl;
 }
}
