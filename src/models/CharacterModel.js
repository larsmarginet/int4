import { v4 } from "uuid";

class CharacterModel {
  constructor({ id = v4(), pic, title, quote, name, secrets = [] }) {
    this.id = id;
    this.pic = pic;
    this.name = name;
    this.title = title;
    this.quote = quote;
    this.secrets = secrets;
  }
}

export default CharacterModel;
