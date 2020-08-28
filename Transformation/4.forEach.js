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

suspectNames.forEach((suspectName) => {
    suspectListLoop.push(createSuspect(suspectName));
});

console.log(suspectListLoop);