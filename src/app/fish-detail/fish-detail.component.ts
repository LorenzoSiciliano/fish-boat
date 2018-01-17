import { Component, OnInit, Input } from '@angular/core';
import { Fish } from '../fish';
import { ActivatedRoute } from '@angular/router';
import { FishService }  from '../fish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.css']
})
export class FishDetailComponent implements OnInit {
  @Input() fish: Fish;
  constructor(
    private route: ActivatedRoute,
    private fishService: FishService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFish();
  }

  getFish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fishService.getFish(id)
      .subscribe(fish => this.fish = fish);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.fish.img = "assets/img/"+this.fish.breed+".png";
    this.fishService.updateFish(this.fish)
     .subscribe(() => this.goBack());
 }
}
