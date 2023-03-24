import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energy: EnergyType;
  static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Mage;
