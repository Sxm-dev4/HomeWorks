export class GreenZoneNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  setName(newName) {
    this.name = newName;
  }


  countZones() {
    let total = 1; 
    for (const child of this.children) {
      total += child.countZones();
    }
    return total;
  }

  getHeight() {
    if (this.children.length === 0) return 1;
    let maxChildHeight = 0;
    for (const child of this.children) {
      const h = child.getHeight();
      if (h > maxChildHeight) {
        maxChildHeight = h;
      }
    }
    return 1 + maxChildHeight;
  }
}
