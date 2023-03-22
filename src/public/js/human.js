const apiUrl = "https://lotr-api.onrender.com/characters";

function render(data){
    const container = document.querySelector(".content");
    console.log(data[1].name);

    // data.forEach(item => {
        // Create the elements for the template
        const content = document.createElement("h1");

        // Set the content for each element
        content.innerText = data[1].name;
        // Append the elements to the container
        container.appendChild(content);
        
    // });

}

// Fetch data from the API and call the render function with it

fetch(apiUrl)
	.then(response => response.json())
	.then(data => render(data))
	.catch(error => console.error(error));