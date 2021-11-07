// 1a 
const jPDinos = [
    'Velociraptors',
    'Tyrannosaurus Rex',
    'Dilophosaurus'
];

// 1b 
function seeDinos(a, ...b){
    //console.log(`Velociraptors`);
    //console.log(`Tyrannosaurus Rex`);
    //console.log(`Dilophosaurus`);

    //console.log(`Velociraptors`);
    console.log(a);
    console.log(b);
}
// seeDinos(`Tyrannosaurus Rex`, `Dilophosaurus`);
seeDinos(...jPDinos);
console.log("=========")

// 2a 
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcom: "Jeff Goldblum"
};

// 2b 
seeCharacters = ({ellieSattler}) => console.log(ellieSattler);
    // console.log(ellieSattle);
// }
seeCharacters(jPCharacters);