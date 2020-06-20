import { configure, decorate, observable, action } from "mobx";

configure({ enforceActions: "observed" });


class Store {
  constructor() {
    this.avatar = "";
    this.money = 0;
    this.arts = [];
  }

  seed(arts) {
    console.log(arts)
    this.arts = arts;
    
  }

  setAvatar(avatar) {
    this.avatar = avatar;
    this.update();
  }

  updateMoney(amount) {
    this.money += amount;
    this.update();
  }

  update() {
    localStorage.setItem("store", JSON.stringify(this))
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
