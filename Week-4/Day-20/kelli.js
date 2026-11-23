function checkCreature(creatureType) {
    if (creatureType === "reptile") {
    console.log("you're a lizard, Larry");
        return "Confirmed: Scaly friend";
        } else if (creatureType === "mammal") {
        console.log("You're a furry friend.");
        return "Confirmed: Mammal";
        }else if (creatureType === "bird") {
        console.log("You're a wizard, owl");
        }else if (creatureType === "amphibian") {
        console.log("Frog or toad");  
        } else {
        console.log("Not sure what you are!");
        return "Unknown creature";
    }
}

function checkCreature(creatureType, hasMagic) {
    if (creatureType === "reptile" && hasMagic) {
        console.log("you're a lizard, Larry");
        return "Magical Reptile";
    } else if (creatureType === "reptile" || creatureType === "amphibian") {
        console.log("Just a regular cold-blooded creature.");
        return "Non-Magical Cold-Blooded";
    } else {
        console.log("Not a reptile");
        return "other";
    }
}

function checkHabitat(creatureName, temperature) {
    if (creatureName === "Larry" && temperature >= 85) {
        console.log("danger");
        return "Dangerous temperatures";
     } else if (creatureName === "Larry" && temperature >= 60 && temperature <= 84) {
        console.log("ideal");
    return "Ideal conditions";
    } else if (creatureName === "Larry" && temperature < 60) {
        console.log("too cold");
    return "Too Cold";
    } else {
        return "Unknown status";
    }
}

// Run the function and store the returned value
let result = checkCreature("reptile");
console.log(result); 

console.log(checkCreature("reptile", true));
console.log(checkCreature("reptile", false));

let magicalResult = checkCreature("reptile", true);
let nonMagicalResult = checkCreature ("reptile", false);

let habitatResult = checkHabitat("Larry", 55);
console.log(habitatResult);

