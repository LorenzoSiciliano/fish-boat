import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.css']
})
export class FishDetailComponent implements OnInit {
   @Input() fish: Fish;
  constructor() { }
//sono un commentooo
  ngOnInit() {
  }

}
