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
  items: Array<any> = []
  constructor(
    private fishService: FishService,
    private location: Location
  ) { this.items = [
      { name: 'assets/img/Anguilla.png',breed: "Anguilla" },
      { name: 'assets/img/Carpa.png', breed: "Carpa" },
      { name: 'assets/img/Luccio.png', breed: "Luccio" },
      { name: 'assets/img/Persico.png', breed: "Persico" },
      { name: 'assets/img/Pesce gatto.png', breed: "Pesce gatto" },
      { name: 'assets/img/Piranha.png', breed: "Piranha" },
      { name: 'assets/img/Spigola.png', breed: "Spigola" },
      { name: 'assets/img/Storione.png', breed: "Storione" },
      { name: 'assets/img/Trota.png', breed: "Trota" }
    ]}

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
