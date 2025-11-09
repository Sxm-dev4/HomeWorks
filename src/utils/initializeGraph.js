import { FriendsGraph } from '../classes/FriendsGraph';
import { Person } from '../classes/Person';
import { City } from '../classes/City';

export const initializeGraph = () => {
  const g = new FriendsGraph();

  const cali = new City('Cali');
  const bogota = new City('Bogotá');
  const medellin = new City('Medellín');
  const cartagena = new City('Cartagena');

  g.addNode(cali);
  g.addNode(bogota);
  g.addNode(medellin);
  g.addNode(cartagena);

  const juan = new Person('Juan', 25, cali.id);
  const maria = new Person('María', 28, cali.id);
  const carlos = new Person('Carlos', 30, bogota.id);
  const ana = new Person('Ana', 22, bogota.id);
  const luis = new Person('Luis', 27, medellin.id);
  const sofia = new Person('Sofía', 24, medellin.id);
  const pedro = new Person('Pedro', 29, cartagena.id);
  const laura = new Person('Laura', 26, cali.id);

  g.addNode(juan);
  g.addNode(maria);
  g.addNode(carlos);
  g.addNode(ana);
  g.addNode(luis);
  g.addNode(sofia);
  g.addNode(pedro);
  g.addNode(laura);

  g.addEdge(juan.id, cali.id, 'lives in');
  g.addEdge(maria.id, cali.id, 'lives in');
  g.addEdge(laura.id, cali.id, 'lives in');
  g.addEdge(carlos.id, bogota.id, 'lives in');
  g.addEdge(ana.id, bogota.id, 'lives in');
  g.addEdge(luis.id, medellin.id, 'lives in');
  g.addEdge(sofia.id, medellin.id, 'lives in');
  g.addEdge(pedro.id, cartagena.id, 'lives in');

  g.addEdge(juan.id, maria.id, 'friend');
  g.addEdge(juan.id, carlos.id, 'friend');
  g.addEdge(maria.id, laura.id, 'friend');
  g.addEdge(carlos.id, ana.id, 'friend');
  g.addEdge(luis.id, sofia.id, 'friend');
  g.addEdge(ana.id, luis.id, 'friend');
  g.addEdge(pedro.id, juan.id, 'friend');

  return g;
};