interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  getAll(): void;
  getById(): void;
  create(): void;
  update(): void;
  delete(): void;
}

class LocalDbModel implements IModel {
  getAll(): void { }
  getById(): void { }
  create(): void { }
  update(): void { }
  delete(): void { }
}

class MockedDbModel implements IModel {
  getAll(): void { }
  getById(): void { }
  create(): void { }
  update(): void { }
  delete(): void { }
}

class CharacterService {
  constructor(private model: IModel) { }

  logModel() { console.log(this.model) };
}

const localDb = new LocalDbModel();
const mockedDb = new MockedDbModel();
const characterService1 = new CharacterService(localDb);
const characterService2 = new CharacterService(mockedDb);

characterService1.logModel();
characterService2.logModel();