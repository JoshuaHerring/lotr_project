const apiUrl = "https://lotr-api.onrender.com/characters";

function render(data){
    const container = document.querySelector(".content");


    // data.forEach(item => {
        // Create the elements for the template
        const content = document.createElement("h2");
        const img = document.createElement("img");
        const info = document.createElement("h3");
        const race = document.createElement("h1")

        // Set the content for each element
        content.innerText = data[0].name;
        img.src = "./public/images/frodo.jpg";
        info.innerText = data[0].description;
        race.innerText = data[0].race;

        // Append the elements to the container
        container.appendChild(race);
        container.appendChild(img);
        container.appendChild(content);
        container.appendChild(info);
        
        
    // });

}

// Fetch data from the API and call the render function with it

fetch(apiUrl)
	.then(response => response.json())
	.then(data => render(data))
	.catch(error => console.error(error));