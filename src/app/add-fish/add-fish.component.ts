import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { FishService } from '../fish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.css']
})
export class AddFishComponent implements OnInit {

  constructor(
    private fishService: FishService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(breed: string,weight: string,length: string): void {
    if (!name || !weight || !length) { return; }
    this.fishService.addFish({ breed, weight, length } as Fish)
    .subscribe(() => this.goBack());
  };
}
