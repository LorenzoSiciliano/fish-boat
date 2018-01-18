import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fishes = [
      { id: 1, breed: "Carpa", length: "50", weight: "10", img: "assets/img/Carpa.png" },
      { id: 2, breed: "Pesce gatto", length: "55", weight: "3" ,img: "assets/img/Pesce gatto.png" },
      { id: 3, breed: "Trota", length: "30" ,weight: "5" ,img: "assets/img/Trota.png" }
    ];
    return {fishes};
  }
}
