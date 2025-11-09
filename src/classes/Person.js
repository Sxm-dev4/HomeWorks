export class Person {
  constructor(name, age, city) {
    this.id = `person-${name}`;
    this.name = name;
    this.age = age;
    this.city = city;
    this.type = 'person';
  }
}