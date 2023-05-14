// const cityOne = {
//     name: "London",
//     population: "9M",
//     continent: "Europe"
// }

// const values = Object.values(cityOne);

// console.log(values);

// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }



// const keys = Object.keys(cityOne);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }











// const boxOne = {
//     width: 2,
//     height: 8,
//     length: 10
// }

// const boxTwo = {
//     width: 5,
//     height: 10,
//     length: 7
// }

// function getBoxVolume(boxObj) {
//     const volume = boxObj.width * boxObj.height * boxObj.length;
//     return volume;
// }

// const newValue = getBoxVolume(boxOne);
// console.log(newValue);






// console.log(getBoxVolume(boxTwo));


// function calculateVolume(boxObject) {
//     return boxObject.width * boxObject.height * boxObject.length;
// }



// console.log(calculateVolume(boxOne));
// console.log(calculateVolume(boxTwo));











const cityOne = {
    name: "London",
    population: "9M",
    continent: "Europe"
}

const cityTwo = {
    name: "Bangkok",
    population: "8M",
    continent: "Asia"
}


function displayCityInfo(cityObj){
    if(cityObj.continent == "Asia" && cityObj.population == "8M"){
        return "It's too far";
    }else if(cityObj.continent == "Europe"){
        return "It's near";
    }else if(cityObj.continent == "Astralia"){
        return "It's down under";
    }
}

console.log(displayCityInfo(cityOne));
console.log(displayCityInfo(cityTwo));