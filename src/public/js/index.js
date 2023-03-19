

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


// Zoom for the Map
window.addEventListener("load", function() {
    let container = document.getElementById("zoom-img");

    // Get image src from the container element
    var imageCss = window.getComputedStyle(container, false),
        imageUrl = imageCss.backgroundImage
                            .slice(4, -1).replace(/['"]/g, '');
        
    // Get the original source image
    var imageSrc = new Image();
    imageSrc.onload = function() {
        var imageWidth = imageSrc.naturalWidth,
            imageHeight = imageSrc.naturalHeight,
            ratio = imageHeight / imageWidth;
            console.log(imageWidth)

        // Adjust the box to fit the image and to adapt responsively
        var percentage = ratio * 100 + '%';
        container.style.paddingBottom = percentage;

        // Zoom and scan on mousemove
        container.onmousemove = function(e) {
        // Get the width of the thumbnail
        var boxWidth = container.clientWidth,
            // Get the cursor position, minus element offset
            x = e.pageX - this.offsetLeft,
            y = e.pageY - this.offsetTop,
            // Convert coordinates to % of elem. width & height
            xPercent = x / (boxWidth / 100) + '%',
            yPercent = y / (boxWidth * ratio / 100) + '%';
        // Update styles w/actual size
        Object.assign(container.style, {
            backgroundPosition: xPercent + ' ' + yPercent,
            backgroundSize: imageWidth + 900 + 'px'
        });
        };
        // Reset when mouse leaves
        container.onmouseleave = function(e) {
        Object.assign(container.style, {
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        });
        };
    }
    imageSrc.src = imageUrl;
})
// end of zoom for the map

