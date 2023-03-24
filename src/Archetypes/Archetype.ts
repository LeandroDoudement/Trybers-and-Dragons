import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _name: string;

  constructor(
    name: string,
    private readonly _special = 0,
    private readonly _cost = 0,
  ) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
