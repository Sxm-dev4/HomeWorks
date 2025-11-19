import { City } from "./City";

export class CityNetwork {
  constructor() {
    this.cities = [];
  
    this.adjacency = {};
  }

  getCity(name) {
    return this.cities.find((c) => c.name === name) || null;
  }

  addCity(name) {
    if (this.getCity(name)) {
      console.warn("La ciudad ya existe:", name);
      return;
    }
    const newCity = new City(name);
    this.cities.push(newCity);
    this.adjacency[name] = [];
  }

  deleteCity(name) {
    this.cities = this.cities.filter((c) => c.name !== name);
    delete this.adjacency[name];

    for (const cityName in this.adjacency) {
      this.adjacency[cityName] = this.adjacency[cityName].filter(
        (n) => n !== name
      );
    }
  }

  connectCities(cityA, cityB) {
    if (!this.getCity(cityA) || !this.getCity(cityB)) {
      console.warn("Alguna de las ciudades no existe:", cityA, cityB);
      return;
    }

    if (!this.adjacency[cityA]) this.adjacency[cityA] = [];
    if (!this.adjacency[cityB]) this.adjacency[cityB] = [];

    if (!this.adjacency[cityA].includes(cityB)) {
      this.adjacency[cityA].push(cityB);
    }
    if (!this.adjacency[cityB].includes(cityA)) {
      this.adjacency[cityB].push(cityA);
    }
  }
}
