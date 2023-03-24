import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Necromancer;
