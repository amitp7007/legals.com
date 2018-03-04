import { Component } from '@angular/core';
import { Court } from '../model/court';

@Component({
  selector: 'app-court-component',
  templateUrl: '../html/court.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class CourtComponent {
  court: Court;
  constructor(court: Court) {
    this.court = court;
  }
}
