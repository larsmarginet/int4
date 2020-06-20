import { v4 } from "uuid";
import { decorate, observable, action } from "mobx";

class ArtModel {
  constructor({ id = v4(), pic, price, name, artist, levels = [], characters = [], unlocked = false }) {
    this.id = id;
    this.pic = pic;
    this.name = name;
    this.artist = artist;
    this.levels = levels;
    this.price = price;
    this.characters = characters;
    this.unlocked = unlocked;
  }

  unlock() {
    this.unlocked = true;
  }

  resolveLevel = id => this.levels.find(level => level.id === id);
  resolveCharacter = id => this.characters.find(character => character.id === id);
}

decorate(ArtModel, {
    levels: observable,
    unlocked: observable, 
    unlock: action
});

export default ArtModel;
