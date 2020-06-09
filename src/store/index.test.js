import Store from './index.js'
import ArtModel from '../models/ArtModel';
import LevelModel from '../models/LevelModel';

test('seed store', () => {
    const store = new Store();
    store.seed(seed());
    expect(store.arts.length).toBe(2);
    expect(store.arts[0].name).toBe('art1');
});

test('set an avatar ', () => {
    const store = new Store();
    store.setAvatar('avatar');
    expect(store.avatar).toBe('avatar');
});

test('update money ', () => {
    const store = new Store();
    store.updateMoney(1000);
    expect(store.money).toBe(1000);
});


const seed = () => {
    const level1 = new LevelModel({name: 'deel1'});
    const level2 = new LevelModel({name: 'deel2'});
    const level3 = new LevelModel({name: 'deel3'});
    const art1 = new ArtModel({pic: 'picture', name: 'art1', artist: 'artist1', levels: [level1, level2, level3], price: 1000});
    const art2 = new ArtModel({pic: 'picture', name: 'art2', artist: 'artist2', price: 1000});
    return [art1, art2]
}