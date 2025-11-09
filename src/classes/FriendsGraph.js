export class FriendsGraph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(node) {
    if (!this.nodes.find(n => n.id === node.id)) {
      this.nodes.push(node);
    }
  }

  addEdge(source, target, label = '') {
    this.edges.push({ source, target, label });
  }

  getNodeById(id) {
    return this.nodes.find(n => n.id === id);
  }

  getPeopleByCity(cityName) {
    const cityId = `city-${cityName}`;
    return this.nodes.filter(
      node => node.type === 'person' && node.city === cityId
    );
  }

  printPeopleByCity(cityName) {
    const people = this.getPeopleByCity(cityName);
    return people.map(p => `${p.name} (${p.age} años)`).join(', ');
  }
}