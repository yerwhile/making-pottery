const buyClay = () => {
    const clay = {};
    return clay;
}

const makePottery = (clayObj) => {
    clayObj.shape = "Bowl";
    return clayObj;
}

const bisqueFire = (potObj) => {
    potObj.readyForGlazing = true;
    return potObj;
}

const glazePottery = (firedObj) => {
    if(firedObj.readyForGlazing === false) {
        console.log("Make sure you bisque fire the pottery before you glaze it.");
    } else {
        firedObj.glazing = "Midnight Blue";
    }
    return firedObj;
} 

const finalFiring = (glazedObj, kilnTemp) => {
    if(kilnTemp > 1200) {
        glazedObj.cracked = true;
    }
    else if(kilnTemp <= 1200) {
        glazedObj.cracked = false;
    }
    return glazedObj;
}

const boughtClay = buyClay();
const madePottery = makePottery(boughtClay);
const firedPottery = bisqueFire(madePottery);
const glazedPottery = glazePottery(firedPottery);

const firedPottery1400 = finalFiring(glazedPottery, 1400);
console.log(firedPottery1400);

const firedPottery1200 = finalFiring(glazedPottery, 1200);
console.log(firedPottery1200);