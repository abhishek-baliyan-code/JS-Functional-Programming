const suspectNames = ["Miss Scarlet", "Col. Mustard", "Mrs. White"];
suspectNames.metaData = { provenInnocent: [] };


function createSuspect(name) {
    const color = name.split(" ")[1];
    const speak = () => {
        console.log(`my name is ${name}`);
    };

    return { name, color, speak };
}

const suspectListMap = suspectNames.map((suspectName) => {
    return createSuspect(suspectName);
});

console.log(suspectListMap);


// Another way - function should be separate

// const suspectNames = ["Miss Scarlet", "Col. Mustard", "Mrs. White"];
// suspectNames.metaData = { provenInnocent: [] };
// const speak = (name) => {
//     console.log(`my name is ${name}`);
// };


// function createSuspect(name) {
//     const color = name.split(" ")[1];

//     return { name, color, speak };
// }

// const suspectListMap = suspectNames.map((suspectName) => {
//     return createSuspect(suspectName);
// });

// console.log(suspectListMap);
// console.log(suspectListMap[0].speak[suspectListMap[0].name]);
