import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fishes = [
      { id: 1, breed: "Carpa", length: "50 cm",weight: "10 Kg",img: "assets/img/Carpa.png" },
      { id: 2, breed: "Pesce gatto", length: "55 cm",weight: "3 Kg",img: "assets/img/Pesce gatto.png" },
      { id: 3, breed: "Trota", length: "30 cm",weight: "5 Kg",img: "assets/img/Trota.png" }
    ];
    return {fishes};
  }
}
