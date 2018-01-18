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
    if (!breed || !weight || !length) { return; }
    let img = "assets/img/"+breed+".png";
    this.fishService.addFish({ breed, weight, length, img } as Fish)
    .subscribe(() => this.goBack());
  };
}
