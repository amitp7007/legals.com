

import { Component } from '@angular/core';
import { Court } from '../model/court';
@Component({
  selector: 'app-court-list',
  templateUrl: '../html/courtlist.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CourtListComponent {
  courts: Court[];
  constructor() {
    this.courts = [new Court('Bangalore Court', 'Civil Court', 'City Center', 'Bangalore', 12345, 'assets/images/blr_high_court.jpg'),
    new Court('Dehi Court', 'Civil Court', 'Patiala House', 'Delhi', 12345, 'assets/images/dl_suprim_court.jpg'),
    new Court('Lucknow High Court', 'Criminal Court', 'HazratGanj', 'Lucknow', 226010, 'assets/images/lko_high_court.jpeg')];
  }
}
