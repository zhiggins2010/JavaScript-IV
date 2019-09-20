/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// Old version of the code for reference
/* function GameObject(gameObjectAttrs){
    this.createdAt = gameObjectAttrs.createdAt,
    this.name = gameObjectAttrs.name,
    this.dimensions = gameObjectAttrs.dimensions
  };
  
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`;
  } */

  class GameObject{
      constructor(gameObjectAttrs){
        this.createdAt = gameObjectAttrs.createdAt,
        this.name = gameObjectAttrs.name,
        this.dimensions = gameObjectAttrs.dimensions   
      }
      destroy(){
        return `${this.name} was removed from the game.`;
      }
  }//GameObjects
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

 // Old version of the code for reference
  /* function CharacterStats(characterStatsAttrs){
    this.healthPoints = characterStatsAttrs.healthPoints,
    GameObject.call(this, characterStatsAttrs)
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  } */

  class CharacterStats extends GameObject{
      constructor(characterStatsAttrs){
          super(characterStatsAttrs);
          this.healthPoints = characterStatsAttrs.healthPoints
      }
      takeDamage(){
        return `${this.name} took damage.`;
      }
  }
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

  // Old version of the code for reference
  /* function Humanoid(humanoidAttrs){
    this.team = humanoidAttrs.team,
    this.weapons = humanoidAttrs.weapons,
    this.language = humanoidAttrs.language,
    CharacterStats.call(this, humanoidAttrs)
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`;
  } */

  class Humanoid extends CharacterStats{
      constructor(humanoidAttrs){
          super(humanoidAttrs);
          this.team = humanoidAttrs.team,
          this.weapons = humanoidAttrs.weapons,
          this.language = humanoidAttrs.language
      }
      greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
      }
  }
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
