import { v4 } from "uuid";
import { decorate, observable, action } from "mobx";

class LevelModel {
  constructor({ id = v4(), name, code, timestamp = false, unlocked = false, done = false }) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.unlocked = unlocked;
    this.done = done;
    this.timestamp = timestamp;
  }

  unlock() {
    this.unlocked = true;
  }

  setDone() {
    this.done = true;
    this.setTimestamp();
  }

  setTimestamp() {
    const date = new Date();
    this.timestamp = date.getTime();
  }
}

decorate(LevelModel, {
    unlocked: observable, 
    done: observable, 
    timestamp: observable,
    unlock: action, 
    setDone: action,
    setTimestamp: action
});

export default LevelModel;
