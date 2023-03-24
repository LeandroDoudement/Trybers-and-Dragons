abstract class Race {
  private static _instances = 0;

  constructor(
    private readonly _name: string,
    private readonly _dexterity: number
  ) {
    Race._instances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
