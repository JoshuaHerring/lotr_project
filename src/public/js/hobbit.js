function getRace(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const race = urlParams.get(param);
    return race;
}

const raceTitle = document.getElementById('title-race');
let race = getRace("race");
raceTitle.innerHTML = race;




async function getStuff(url){
    let response  = await fetch(url);
    let characters = await response.json();
    
    return characters;
}

async function showRaceSecrets(race){
    const secretURL = "https://lotr-api.onrender.com/secrets";
    const secretList = await getStuff(secretURL);
    console.log(secretList)

    secretList.forEach(secrets => {
        // let stringedSecrets = JSON.stringify(secrets).replace(/"/g,'');
        
        if (secrets.race == race){
            console.log(secrets.title)

            const secretPlacement = document.getElementById('secrets');
            const shh = document.createElement('div');

            shh.innerHTML = `<h2>${secrets.title}</h2>
            <p>${secrets.description}</p>
            `;

            secretPlacement.appendChild(shh);
        }
        
    })

};

showRaceSecrets(race);


async function showCharactersByRace(race) {
    let characterURL = "https://lotr-api.onrender.com/characters";
    const characterList = await getStuff(characterURL);
    console.log(characterList)

    characterList.forEach(character => {
        let stringRace = JSON.stringify(character.race).replace(/"/g,'');
        let cutRace = stringRace.split(' ')[0];

        if(cutRace == race){
            console.log(character.name)
            const names = document.getElementById('names');

            const info = document.createElement('p');

            info.textContent = character.name;
            names.appendChild(info);
            // add.innerHTML = character.name;
        }
    });
}

showCharactersByRace(race);


