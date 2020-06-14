import { createContext } from "react";
import Store from "../store";
import ArtModel from "../models/ArtModel";
import LevelModel from "../models/LevelModel";


// De Kruisoprichting
const level1 = new LevelModel({
    id: "8aa4a176-fe94-487b-a424-bf4c21286b0c",
    name: "chapterOne",
    code: "AAAAA11111",
    done: true,
    unlocked: true
})

const level2 = new LevelModel({
    id: "98892345-99f1-4c39-87d9-c48aaf0aacda",
    name: "chapterTwo",
    code: "BBBBB22222",
})

const level3 = new LevelModel({
    id: "e970aba2-10c6-4d7d-b67e-c2fbc7789e6d",
    name: "chapterThree",
    code: "CCCCC33333"
})

const level4 = new LevelModel({
    id: "8f47d43c-ac8b-44e4-9c8f-c9ddb2df22c3",
    name: "chapterFour",
    code: "DDDDD44444"
})

const level5 = new LevelModel({
    id: "6a80d6da-b6ba-4767-b0a3-6517e6ec256b",
    name: "chapterFive",
    code: "EEEEE55555",
})

const level6 = new LevelModel({
    id: "c06424b6-461e-4ab1-b914-9e7371e5324a",
    name: "chapterSix",
    code: "FFFFF66666",
   
})

const level7 = new LevelModel({
    id: "bfd8a2df-93bf-4411-967e-2dc6a1d0a083",
    name: "chapterSeven",
    code: "GGGGG77777",
})

const level8 = new LevelModel({
    id: "15589c65-b0df-4aac-be42-09978f938376",
    name: "chapterEight",
    code: "HHHHH88888",
})

const art1 = new ArtModel({
    id: "e5dd7975-56d2-4bea-9e3f-005bbec8a104",
    name: "De Kruisoprichting",
    levels: [level1, level2, level3, level4, level5, level6, level7, level8], 
    price: 1000
})


// Madonna met Kind
const art2 = new ArtModel({
    id: "6b9bf519-f523-450b-aee0-669e2201de1c",
    name: "Madonna met Kind",
    levels: [],
    price: 1400
})


// De dulle griet
const art3 = new ArtModel({
    id: "8c038092-03a7-4d10-9814-4eb583300f90",
    name: "De dulle griet",
    levels: [],
    price: 2000
})



const store = new Store();

store.seed([art1, art2, art3]);
store.updateMoney(1000);
store.setAvatar('avatar');

export const storeContext = createContext(store);
