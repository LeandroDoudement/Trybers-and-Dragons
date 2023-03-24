import Race from './Race';

class Dwarf extends Race {
  protected readonly _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Dwarf;
