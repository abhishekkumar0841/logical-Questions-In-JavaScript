let cities = ["muMBaI", "PaTNa", "goA", "dElhI"];

function capitalizeWords(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const res = cities.map(city => capitalizeWords(city))

console.log("Capitalized words are --> ", res)
