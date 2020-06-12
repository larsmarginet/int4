import { createContext } from "react";
import Store from "../store";
import ArtModel from "../models/ArtModel";
import LevelModel from "../models/LevelModel";


// De Kruisoprichting
const level1 = new LevelModel({
    name: "chapterOne",
    code: "AAAAA11111",
    done: true,
    unlocked: true
})

const level2 = new LevelModel({
    name: "chapterTwo",
    code: "BBBBBB22222",
    done: true,
    unlocked: true
})

const level3 = new LevelModel({
    name: "chapterThree",
    code: "CCCCC33333"
})

const level4 = new LevelModel({
    name: "chapterFour",
    code: "DDDDD44444"
})

const level5 = new LevelModel({
    name: "chapterFive",
    code: "EEEEE55555",
    done: true,
    unlocked: true
})

const level6 = new LevelModel({
    name: "chapterSix",
    code: "FFFFF66666",
    done: true,
    unlocked: true
})

const level7 = new LevelModel({
    name: "chapterSeven",
    code: "GGGGG77777",
})

const level8 = new LevelModel({
    name: "chapterEight",
    code: "HHHHH88888",
})

const art1 = new ArtModel({
    name: "De Kruisoprichting",
    levels: [level1, level2, level3, level4, level5, level6, level7, level8], 
    price: 1000
})


// Madonna met Kind
const art2 = new ArtModel({
    name: "Madonna met Kind",
    levels: [],
    price: 1400
})


// De dulle griet
const art3 = new ArtModel({
    name: "De dulle griet",
    levels: [],
    price: 2000
})



const store = new Store();

store.seed([art1, art2, art3]);
store.updateMoney(1000);
store.setAvatar('avatar');

export const storeContext = createContext(store);
