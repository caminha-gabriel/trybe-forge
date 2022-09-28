abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Melee is talking');
  }

  specialMove(): void {
    console.log('Melee\'s special move!');
  }
}

class RangedCharacter extends Character {
  talk(): void {
    console.log('Ranged is talking');
  }

  specialMove(): void {
    console.log('Ranged\'s special move!');
  }
}

function presentCharacter(character: Character): void {
  character.talk();
  character.specialMove();
}

const melee = new MeleeCharacter();
const ranged = new RangedCharacter();

presentCharacter(melee);
presentCharacter(ranged);
