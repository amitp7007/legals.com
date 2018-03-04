export class Lawyer {
  name: string;
  ltype: string;
  court: string;
  contact: number;
  rating: number;
  likes: number;
  imageSrc: string;

  constructor(name, ltype, court, contact, rating, likes, imageSrc) {
    this.name = name;
    this.ltype = ltype;
    this.court = court;
    this.contact = contact;
    this.rating = rating;
    this.likes = likes;
    this.imageSrc = imageSrc;

  }
}
