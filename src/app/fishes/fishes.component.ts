import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { FISHES } from '../mock-fishes';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})
export class FishesComponent implements OnInit {
  //fishes : Fish[];
  fishes = FISHES;
//  constructor(private fishService: FishService) { }
  selectedFish: Fish;

  onSelect(fish: Fish): void {
    this.selectedFish = fish;
  }
  /*getFishes(): void {
    this.fishService.getFishes().subscribe(fishes => this.fishes = fishes);
  }*/

  ngOnInit() {
    //this.getFishes();
  }

}
