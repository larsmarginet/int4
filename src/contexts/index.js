import { createContext } from "react";
import Store from "../store";
import ArtModel from "../models/ArtModel";
import LevelModel from "../models/LevelModel";


// De Kruisoprichting
const level1 = new LevelModel({
    name: "Deel 1",
})

const level2 = new LevelModel({
    name: "Deel 2",
})

const level3 = new LevelModel({
    name: "Deel 3",
})

const level4 = new LevelModel({
    name: "Deel 4",
})

const art1 = new ArtModel({
    name: "De Kruisoprichting",
    levels: [level1, level2, level3, level4]
})


// Madonna met Kind
const art2 = new ArtModel({
    name: "Madonna met Kind",
    levels: [],
})


// Madonna bij de fontein
const art3 = new ArtModel({
    name: "Madonna bij de fontein",
    levels: [],
})



const store = new Store();

store.seed([art1, art2, art3]);
store.updateMoney(1000);
store.setAvatar('avatar');

export const storeContext = createContext(store);
