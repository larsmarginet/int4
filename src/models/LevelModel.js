import { v4 } from "uuid";
import { decorate, observable, action } from "mobx";

class LevelModel {
  constructor({ id = v4(), name, code, unlocked = false, done = false }) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.unlocked = unlocked;
    this.done = done;
  }

  unlock() {
    this.unlocked = true;
  }
}

decorate(LevelModel, {
    unlocked: observable, 
    unlock: action
});

export default LevelModel;
