import { createContext } from "react";
import Store from "../store";
import ArtModel from "../models/ArtModel";
import LevelModel from "../models/LevelModel";
import CharacterModel from "../models/CharacterModel";


// De Kruisoprichting
const level1 = new LevelModel({
    id: "8aa4a176-fe94-487b-a424-bf4c21286b0c",
    name: "chapterOne",
    code: "AAAAA11111",
})

const level2 = new LevelModel({
    id: "98892345-99f1-4c39-87d9-c48aaf0aacda",
    name: "chapterTwo",
    code: "BBBBB22222",
})

const level3 = new LevelModel({
    id: "e970aba2-10c6-4d7d-b67e-c2fbc7789e6d",
    name: "chapterThree",
    code: "CCCCC33333",
})

const level4 = new LevelModel({
    id: "8f47d43c-ac8b-44e4-9c8f-c9ddb2df22c3",
    name: "chapterFour",
    code: "DDDDD44444",
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

const napoleon = new CharacterModel({
    id: "c980b04b-afae-483d-ab79-08785557d74d", 
    pic: "napoleonDetail",
    name: "Napoleon Bonaparte",
    title: "Keizer der fransen",
    quote: '"Na Columbus ben ik de meest invloedrijke persoon uit de wereldgeschiedenis"', 
    secrets: ["Draagt nooit  onderbroeken", "Verkiest dieren boven mensen", "Eet tijdens zijn veldslagen door graag witte chocolade", "Is allergisch aan witloof"]
})

const herbert = new CharacterModel({
    id: "0eb5bc90-efd5-4c20-9e5f-42f496378101", 
    pic: "herbertDetail",
    name: "Herbert Cockuyt",
    title: "De smid van Pittem",
    quote: '"Mijn hamer en aanbeeld zijn mijn beste vrienden"', 
    secrets: ["Houdt ervan in zijn vrije tijd zakdoeken te  borduren", "Mediteert in zijn middagpauze", "Eet het liefst spaghetti", "Heeft een voorliefde voor vlaamse schlagermuziek"]
})

const non = new CharacterModel({
    id: "d1bcdc7d-a89a-4483-a391-f7715fb59f3d", 
    pic: "nonDetail",
    name: "Zuster Agatha",
    title: "De non van Kortrijk",
    quote: '"Een zwart uniform schijnt in de mode te zijn"', 
    secrets: ["Kent alle verzen van de bijbel uit haar hoofd", "Heeft een kruisje hangen in iedere kamer van haar woning", "Heeft een hekel aan Spinnen", "Is stiekem smoorverliefd op Herbert, de smid van Pittem"]
})

const vanDyck = new CharacterModel({
    id: "6e50820b-3abe-4598-ba69-33c8656ae922", 
    pic: "vanDyckDetail",
    name: "Antoon Van Dyck",
    title: "Schilder van Antwerpen",
    quote: '"Ik maak de beste schilderwerken als ik wafels gegeten heb"', 
    secrets: ["Gaat elke week  naar de kapper", "Is vegetariër", "Wordt misselijk van het kleur groen", "Is allergisch aan lelijke kunstwerken"]
})

const willem = new CharacterModel({
    id: "d7b1c243-e370-4749-8e55-593f117cd7c6", 
    pic: "willemDetail",
    name: "Willem I",
    title: "Koning der Nederlanden",
    quote: '"Willem is mijn bijnaam, origineel noem ik Bert"', 
    secrets: ["Heeft nooit leren lezen", "Eet elke ochtend rijstpap", "Heeft sinds zijn jonge jaren last van een verstopte neus", "Is een grote fan van Tango muziek"]
})

const flik = new CharacterModel({
    id: "18003f97-ec86-47a0-9127-1d70307eb514", 
    pic: "flikDetail",
    name: "Inspecteur Zwaantjens",
    title: "Politie van Kortrijk",
    quote: '"Een blauw uniform schijnt in de mode te zijn"', 
    secrets: ["Haar handboeien hebben een roze kleur", "Heeft altijd een reserve politiepet bij de hand", "Haar sterrenbeeld is Stier", "Is verslaafd aan rode drop"]
})

const directeur = new CharacterModel({
    id: "9e413862-d5cf-4842-82f3-7a88731f02f5", 
    pic: "directeurDetail",
    name: "Bert Bosschaert",
    title: "Directeur van het MSK",
    quote: '"Het duurste kunstwerk in onze galerij is 1.000.000 franken waard"', 
    secrets: ["Heeft graag orde en netheid", "Heeft een voorliefde voor  rode wijn", "Gaat graag gaan vissen in zijn vrije tijd", "Zat in zijn jonge jaren bij de jeugdbeweging"]
})

const pastoor = new CharacterModel({
    id: "fd4206a1-3847-40bf-9f3e-fa295291e71d", 
    pic: "pastoorDetail",
    name: "Roger De Bakker",
    title: "Pastoor van Kortrijk",
    quote: '"Toen ik twaalf jaar oud was wist ik dat ik pastoor wilde worden"', 
    secrets: ["Heeft vier jaar dienst gedaan bij het plaatselijke brandweer korps", "Is stiekem getrouwd met zuster Agatha", "Kent alle verzen van de bijbel uit haar hoofd", "Tuiniert graag in zijn vrije tijd"]
})

const verfmans = new CharacterModel({
    id: "60503cdd-28dc-4cfc-be89-c15cac21d6c7", 
    pic: "verfmansDetail",
    name: "Bertrang Verfmans",
    title: "Gepassioneerd antiquair",
    quote: '"Ik heb een neus voor het doen van zaken!"', 
    secrets: ["Heeft zijn vader nooit gekend", "Is oorspronkelijk van Knokke afkomstig", "Moet door de amputatie aan zijn rechter been met een stok door het leven gaan", "Is allergisch aan gras"]
})

const carlier = new CharacterModel({
    id: "83757648-874d-4ec6-95f2-43b686d7a974", 
    pic: "carlierDetail",
    name: "Albert Carlier",
    title: "Transporteur bij B.V.B.A De Melkmakers",
    quote: '"Ik heb eeen voorliefde voor alles wat veel geld waard is"', 
    secrets: ["Is kaal en draagt daarom een pruik", "Heeft alleen maar blauwe kleren in zijn kast hangen", "Draagt alleen maar merkkledij", "Gaat gaan tennisen in zijn vrije tijd"]
})

const thierry = new CharacterModel({
    id: "dcdb45ac-4581-43ca-bc19-461d0b4278fe", 
    pic: "thierryDetail",
    name: "Thierry",
    title: "De booschapper",
    quote: '"Roekoe roekoe roekoe"', 
    secrets: ["Roekoe, roekoe, roekoe", "Roekoe, roekoe, roekoe, roekoe, roekoe", "Roekoe, roekoe", "Roekoe, roekoe, roekoe, roekoe, roekoe, roekoe, roekoe, roekoe"]
})

const art1 = new ArtModel({
    id: "e5dd7975-56d2-4bea-9e3f-005bbec8a104",
    name: "De Kruisoprichting",
    levels: [level1, level2, level3, level4, level5, level6, level7, level8], 
    characters: [napoleon, herbert, non, vanDyck, willem, flik, directeur, pastoor, verfmans, carlier, thierry],
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



let store = new Store();

if(localStorage.getItem("store") === null ) {
    store.seed([art1, art2, art3]);
    store.updateMoney(1000);
    store.setAvatar('avatar');
    localStorage.setItem("store", JSON.stringify(store))
} else {
    let JSONstore = JSON.parse(localStorage.getItem("store"));
    store.setAvatar(JSONstore.avatar);
    store.updateMoney(JSONstore.money);
    let arts = [];
    JSONstore.arts.forEach(art => {
        const chapters = [];
        art.levels.forEach(level => {
            const chapter = new LevelModel({
                id: level.id,
                name: level.name,
                code: level.code,
                unlocked: level.unlocked,
                done: level.done, 
                timestamp: level.timestamp
            })
            chapters.push(chapter)
        });
        const people = [];
        art.characters.forEach(character => {
            const person = new CharacterModel({
              id: character.id,
              pic: character.pic,
              name: character.name,
              title: character.title,
              quote: character.quote,
              secrets: character.secrets,
            })
            people.push(person)
        })
        const item = new ArtModel({
            id: art.id,
            pic: art.pic,
            name: art.name,
            artist: art.artist,
            levels: chapters, 
            characters: people,
            price: art.price, 
            unlocked: art.unlocked
        })
        arts.push(item)
    });
    store.seed(arts);
    localStorage.setItem("store", JSON.stringify(store))
}

export const storeContext = createContext(store);
