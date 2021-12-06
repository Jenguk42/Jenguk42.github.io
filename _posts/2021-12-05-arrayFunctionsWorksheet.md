---
title: "Array function worksheet"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

> ✒ Reference: [Array Worksheet by James Q Quick](bit.ly/jqq-array-practice)


## Data to work with!

```jsx
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
```

## `.map()` function
Iterates through each item in the array and transforms each item in some way. Returns another array with the transformed item from the original item in the array.

```jsx
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
```


## `.reduce()` function
Iterates through each item in the array and gets some sort of ending result by accumulation. We start with an accumulator: some sort of value we will start to accumulate on.
The first parameter is the callback function that gives the accumulator and current value, and the second parameter is the initial accumulator.

```jsx
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
```


## `.filter()` function
Takes an array of items and returns another array of items that match the filter.

```jsx
//1. Get characters with mass greater than 100
const bigGuys = characters.filter( 
    character => character.mass > 100 )

//2. Get characters with height less than 200
const shortGuys = characters.filter( (character) => {
    return character.height < 200;
})

//3. Get all male characters
const maleCharacters = characters.filter( 
    character => character.gender === 'male')

//4. Get all female characters
const femaleCharacters = characters.filter( 
    character => character.gender === 'female')
```


## `.sort()` function
Iterates through each item in the array and sorts them using the given function. Returns a new sorted array.
With the syntax of `function(a, b){return a - b}`, `a - b` is a compare function. If the result of the compare function is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done to sort the two values.

```jsx
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
```


## `.every()` function
Takes an array of items and checks if "every" item meets the given condition. Returns a boolean.

```jsx
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(character => character.eye_color === 'blue');

//2. Does every character have mass more than 40?
const allMassAbove40 = characters.every(character => character.mass > 40);

//3. Is every character shorter than 200?
const allHeightBelow200 = characters.every(character => character.height < 200);

//4. Is every character male?
const allMales = characters.every(character => character.gender === 'male');
```


## `.some()` function
Takes an array of items and checks if "some" (at least one) items meet the given condition. Returns a boolean.

```jsx
//1. Is there at least one male character?
const oneMale = characters.some(character => character.gender === 'male');

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(character => character.eye_color === 'blue');

//3. Is there at least one character taller than 210?
const oneTaller210 = characters.some(character => character.height > 210);

//4. Is there at least one character that has mass less than 50?
const oneLighter50 = characters.some(character => character.mass < 50);
```