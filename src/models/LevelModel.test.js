import LevelModel from './LevelModel';

test('Create a level', () => {
  const level = new LevelModel({name: 'deel1'});
  expect(level.name).toBe('deel1');
  expect(level.unlocked).toBe(false);
});

test('Unlock a level', () => {
    const level = new LevelModel({name: 'deel1'});
    expect(level.unlocked).toBe(false);
    level.unlock();
    expect(level.unlocked).toBe(true);
});