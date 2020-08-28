const suspectNames = ["Miss Scarlet", "Col. Mustard", "Mrs. White"];
suspectNames.metaData = { provenInnocent: [] };
const suspectListLoop = [];

function createSuspect(name) {
    const color = name.split(" ")[1];
    const speak = () => {
        console.log(`my name is ${name}`);
    };

    return { name, color, speak };
}

// Another way - But it will include other properties as well.
// Like metaData defined up

for (const i in suspectNames) {
    suspectListLoop.push(createSuspect(suspectNames[i]));
}

console.log(suspectListLoop);
