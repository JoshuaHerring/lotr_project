function getRace(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const race = urlParams.get(param);
    return race;
}

let race = getRace("race");
console.log(typeof(race))



async function getLocations(url){
    let response  = await fetch(url);
    let characters = await response.json();
    console.log(characters);
    return characters;
}


async function showCharactersByRace(race) {
    let characterURL = "https://lotr-api.onrender.com/characters";
    const characterList = await getLocations(characterURL);
    console.log(characterList)

    characterList.forEach(character => {
        // let races = JSON.stringify(character)
        // console.log(character.race)
        console.log(race)
        if(JSON.stringify(character.race) === race){
            console.log("hi")
            // console.log(character);
        }
    });
}

showCharactersByRace(race);


