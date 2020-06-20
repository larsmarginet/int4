import ArtModel from './ArtModel';
import LevelModel from './LevelModel';

test('Create a piece of art', () => {
  const art = new ArtModel({ name: 'art1', artist: 'artist1', price: 1000});
  expect(art.name).toBe('art1');
  expect(art.artist).toBe('artist1');
  expect(art.price).toBe(1000);
  expect(art.unlocked).toBe(false);
});

test('Create levels', () => {
    const level1 = new LevelModel({name: 'deel1'});
    const level2 = new LevelModel({name: 'deel2'});
    const level3 = new LevelModel({name: 'deel3'});
    const art = new ArtModel({ name: 'art1', artist: 'artist1', levels: [level1, level2, level3], price: 1000});
    expect(art.levels.length).toBe(3);
    expect(art.levels[0].name).toBe('deel1');
});

test('Unlock a piece of art', () => {
    const art = new ArtModel({ name: 'art1', artist: 'artist1', price: 1000});
    expect(art.unlocked).toBe(false);
    art.unlock();
    expect(art.unlocked).toBe(true);
});
