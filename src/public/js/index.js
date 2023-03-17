

// Testing the API

const url = "https://lotr-api.onrender.com/characters";
let place = document.querySelector("ul");
let body = document.querySelector("body");

async function updatePlace(url) {
    const res = await fetch(url);

    let data = await res.json();
    console.log(data);
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        let race = data[i].race;
        

        let elements = document.createElement('li');
        let element = document.createElement('li');

        elements.innerHTML = name;
        element.innerHTML = race;

        place.appendChild(elements);
        place.appendChild(element);


    }
    return place;
}

updatePlace(url).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});



