import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { FishService } from '../fish.service';
import {trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css'],
  animations: [
   trigger('flyInOut', [
     state('in', style({transform: 'translateX(0)'})),/*
     transition('void => *', [
       style({transform: 'translateX(-100%)'}),
       animate(1000)
     ]),*/
     transition('* => void', [
       animate(1000, style({transform: 'translateX(100%)'}))
     ])
   ])
 ]
})
export class FishesComponent implements OnInit {
  fishes : Fish[];
  constructor(private fishService: FishService) { }

  getFishes(): void {
    this.fishService.getFishes().subscribe(fishes => this.fishes = fishes);
  }

  ngOnInit() {
    this.getFishes();
  }

  delete(fish: Fish): void {
    this.fishes = this.fishes.filter(f => f !== fish);
    this.fishService.deleteFish(fish).subscribe();
  }
}
