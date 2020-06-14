import { configure, decorate, observable, action } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  constructor() {
    this.avatar = "";
    this.money = 0;
    this.arts = [];
  }

  seed(arts) {
    this.arts = arts;
  }

  setAvatar(avatar) {
    this.avatar = avatar;
  }

  updateMoney(amount) {
    this.money += amount;
  }

}

decorate(Store, {
  arts: observable,
  avatar: observable,
  money: observable,
  seed: action,
  setAvatar: action,
  updateMoney: action
});

export default Store;
