import CharacterModel from './CharacterModel';

test('Create a character', () => {
    const character = new CharacterModel({ 
        pic: "image",
        name: "Jane Doe",
        title: "Anonymous",
        quote: '"hello world!"', 
        secrets: ["secret1", "secret2", "secret3", "secret4"]
    });
    expect(character.pic).toBe('image');
    expect(character.name).toBe('Jane Doe');
    expect(character.title).toBe('Anonymous');
    expect(character.quote).toBe('"hello world!"');
    expect(character.secrets.length).toBe(4);
    expect(character.secrets[1]).toBe('secret2');
});

