const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// map
//1. Get array of all names
const names = characters.map(character => {
    return character.name;
})

// Using implicit return
const names2 = characters.map(character => character.name);

//2. Get array of all heights
const heights = characters.map(character => character.height);

//3. Get array of objects with just name and height properties
const nameHeights = characters.map(character => ({
    name: character.name, height: character.height
})); 

//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0])


// reduce
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)

//3. Get total number of characters by eye color
const charsByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {})

//4. Get total number of characters in all the character names
const totalNameChars = characters.reduce((acc, cur) => acc + cur.name.length, 0);


// some
//1. Is there at least one male character?
const oneMale = characters.some(character => character.gender === 'male');

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(character => character.eye_color === 'blue');

//3. Is there at least one character taller than 210?
const oneTaller210 = characters.some(character => character.height > 210);

//4. Is there at least one character that has mass less than 50?
const oneLighter50 = characters.some(character => character.mass < 50);


// sort
//1. Sort by mass (ascending order)
// For descending order, we put b.mass - a.mass
const byMass = characters.sort((a, b) => a.mass - b.mass);

//2. Sort by height (ascending order)
const byHeight = characters.sort((a, b) => a.height - b.height);

//3. Sort by name
const byName = characters.sort((a, b) => {
    // If a has lower alphabetical order, return it first.
    if (a.name < b.name) return -1;
    return 1;
});

//4. Sort by gender
const byGender = characters.sort(a => {
    // If gender of a is female, return it first.
    if (a.gender === "female") return -1;
    return 1; 
});


// every
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(character => character.eye_color === 'blue');

//2. Does every character have mass more than 40?
const allMassAbove40 = characters.every(character => character.mass > 40);

//3. Is every character shorter than 200?
const allHeightBelow200 = characters.every(character => character.height < 200);

//4. Is every character male?
const allMales = characters.every(character => character.gender === 'male');