const suspectNames = [
    "Miss Scarlet",
    "Col. Mustard",
    "Mrs. White",
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
];

function createSuspect(name) {
    return {
        name: name,
        color: name.split(" ")[1],
        speak: function () {
            console.log(`my name is ${name}`);
        },
    };
}

// More Better way
function createSuspect(name) {
    const color = name.split(" ")[1];
    const speak = () => {
        console.log(`my name is ${name}`);
    };
    return { name, color, speak };
}
