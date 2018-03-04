import { Component } from '@angular/core';
import { Lawyer } from '../model/lawyer';

@Component ({
  selector: 'app-lawyers',
  templateUrl: '../html/lawyers.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LawyersComponent {

  lawyersList: Lawyer[];
  constructor() {
    this.lawyersList = [new Lawyer('Amit', 'Criminal Lawyers', 'Civil',  9876543, 4, 200, 'assets/images/download.jpeg'),
    new Lawyer('Pandey', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
    'assets/images/hrithik-roshan-voted-second-sexiest-man-in-asia-201512-645079.jpg'),
    new Lawyer('Sunil', 'Civil Lawyers', 'Civil',  987645543, 3, 201, 'assets/images/download.jpeg'),
    new Lawyer('Gaurav', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
     'assets/images/hrithik-roshan-voted-second-sexiest-man-in-asia-201512-645079.jpg'),
    new Lawyer('Anuj', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
    'assets/images/download.jpeg'),
    new Lawyer('Pushpa', 'Civil Lawyers', 'Civil',  987645543, 3, 201, 'assets/images/download.jpeg'),
    new Lawyer('Amit', 'Criminal Lawyers', 'Civil',  9876543, 4, 200, 'assets/images/download.jpeg'),
    new Lawyer('Pandey', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
    'assets/images/hrithik-roshan-voted-second-sexiest-man-in-asia-201512-645079.jpg'),
    new Lawyer('Sunil', 'Civil Lawyers', 'Civil',  987645543, 3, 201, 'assets/images/download.jpeg'),
    new Lawyer('Gaurav', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
     'assets/images/hrithik-roshan-voted-second-sexiest-man-in-asia-201512-645079.jpg'),
    new Lawyer('Anuj', 'Civil Lawyers', 'Civil',  987645543, 3, 201,
    'assets/images/download.jpeg'),
    new Lawyer('Pushpa', 'Civil Lawyers', 'Civil',  987645543, 3, 201, 'assets/images/download.jpeg')];
  }
}
