import { GreenZoneNode } from "./GreenZoneNode";

export class City {
  constructor(name) {
    this.name = name;
    this.rootZone = null; 
  }


  _findZoneRecursive(node, zoneName) {
    if (!node) return null;
    if (node.name === zoneName) return node;

    for (const child of node.children) {
      const found = this._findZoneRecursive(child, zoneName);
      if (found) return found;
    }
    return null;
  }

  findZoneByName(zoneName) {
    if (!this.rootZone) return null;
    return this._findZoneRecursive(this.rootZone, zoneName);
  }

  addZone(zoneName, parentName = null) {
    const newZone = new GreenZoneNode(zoneName);

 
    if (!this.rootZone) {
      if (parentName !== null) {
        console.warn(
          "No hay zonas aún. La primera zona debe ser raíz (sin padre)."
        );
        return;
      }
      this.rootZone = newZone;
      return;
    }

  
    if (parentName === null) {
      console.warn(
        "Ya existe una zona raíz. Debes indicar un padre para nuevas subzonas."
      );
      return;
    }

    const parentNode = this.findZoneByName(parentName);
    if (!parentNode) {
      console.warn("Zona padre no encontrada:", parentName);
      return;
    }

    parentNode.addChild(newZone);
  }

  editZoneName(oldName, newName) {
    const zone = this.findZoneByName(oldName);
    if (!zone) {
      console.warn("Zona no encontrada:", oldName);
      return;
    }
    zone.setName(newName);
  }


  getZonesStats() {
    if (!this.rootZone) {
      return {
        totalZones: 0,
        maxHeight: 0,
      };
    }

    return {
      totalZones: this.rootZone.countZones(),
      maxHeight: this.rootZone.getHeight(),
    };
  }
}
