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

for (let i = 0; i < suspectNames.length; i++) {
    suspectListLoop.push(createSuspect(suspectNames[i]));
}

console.log(suspectListLoop);
