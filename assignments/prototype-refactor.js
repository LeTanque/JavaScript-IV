/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.     */

class GameObject {
    constructor(attributes) { 
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() { 
        let destroyed = `Object was removed from the game`;
        return destroyed;
    }
}

class Counter extends GameObject {
    constructor(childAttributes) {
        super(childAttributes);
        this.constructor.counter = (this.constructor.counter || 0) + 1; // counter = counter value or 0 + 1
        this.id = this.constructor.counter;
    }
    id() {
      return this.id;
    }
}

class CharacterStats extends Counter {
    constructor(childAttributes) {
        super(childAttributes);
        this.name = childAttributes.name;
        this.team = childAttributes.team;
        this.healthPoints = childAttributes.healthPoints;
        this.language = childAttributes.language;
        this.attackLevel = childAttributes.attackLevel;
        this.armorLevel = childAttributes.armorLevel;
        // let damageLevel = 0;  // Not how you build a counter
    }
    damage() { // this doesn't work right
        let tookDamage = `${this.name} took ${this.armorLevel - this.attackLevel} damage `;
        return tookDamage;
    }
    attack() { // this doesn't work right
        let attack = `${this.name} attacks with ${this.weapons[1]} for ${this.attackLevel}`;
        return attack;
    }
}

// Removed Humanoid. Linked Zerg and Terran to CharacterStats which, in turn, is linked to GameObject

class Zerg extends CharacterStats {
    constructor(grandchildAttributes) {
        super(grandchildAttributes);
        this.weapons = grandchildAttributes.weapons;
        this.phrase = grandchildAttributes.phrase;
    } 
    talk() {
        let talking = `${this.phrase}`;
        return talking;
    }
}

class Terran extends CharacterStats {
    constructor(grandchildAttributes) {
        super(grandchildAttributes);
        this.weapons = grandchildAttributes.weapons;
        this.attackLevel = grandchildAttributes.attackLevel;
        this.phrase = grandchildAttributes.phrase;
    }
    talk() {
        let talking = `${this.phrase}`;
        return talking;
    }
}

const hunterKiller = new Zerg({
    name: 'Hunter Killer',
    team: 'Zerg',
    healthPoints: 50,
    language: 'Zergish',
    dimensions: { length: 2, width: 1, height: 2 },
    weapons: ['Spikes','Acid Spit'],
    attackLevel: 20,
    armorLevel: 2,
    phrase: `GWRAAARRR - Slittthhh`,
    createdAt: new Date(),
});
const zergling = new Zerg({
    name: 'Zergling',
    team: 'Zerg',
    healthPoints: 5,
    language: 'Zergish',
    dimensions: { length: 1, width: 1, height: 1 },
    weapons: ['Claws','Acid Spit'],
    attackLevel: 1,
    armorLevel: 0,
    phrase: `Click click click RWARRR`,
    createdAt: new Date(),
});
const marine = new Terran({
    name: 'Marine',
    team: 'Terran',
    healthPoints: 10,
    language: 'English',
    dimensions: { length: 1, width: 1, height: 3 },
    weapons: ['Rifle','Melee'],
    attackLevel: 3,
    armorLevel: 4,
    phrase: `10-4, SIR!`,
    createdAt: new Date(),
});

console.log(zergling.createdAt);
console.log(marine.name); 
console.log(hunterKiller.language);
console.log(marine.team);
console.log(zergling.team);

console.log(marine.talk());
console.log(zergling.talk());
console.log(hunterKiller.talk());

console.log(hunterKiller.damage());
console.log(hunterKiller.attack());
console.log(marine.damage());

console.log(zergling.attackLevel);
console.log(zergling.id());  // I don't know why this doesn't work


// Conceptually, I think this would become significantly more effective if we separate the combat 'engine' from stats.
// So, combat should be a constructor that inherits information from everything above.

// class Combat extends CharacterStats {
//     constructor(greatGrandChildAttributes) {
//         super(greatGrandChildAttributes);
//         let damageLevel = 0;
//         }
//     damage() {
//             let tookDamage = `${this.name} took ${this.armorLevel - this.attackLevel} damage `;
//             return tookDamage;
//     }
// }
// Or not...

// class A {
//     constructor() {
//       this.constructor.counter = (this.constructor.counter || 0) + 1;
//       this._id = this.constructor.counter;
//       console.log(this.id);
//     }
//     get id() {
//       return this._id;
//     }
// }
  
// class B extends A {}
// class C extends A {}

// a = new B(); // <- 1
// b = new C(); // <- 1
// c = new B(); // <- 2
// d = new A(); // <- 1
// // The difference with this code is that inherited classes have their own independent counter.

// // If you don't want to add properties to the constructor, you can replace

// this.constructor.counter
// // with

// Object.getPrototypeOf(this).counter