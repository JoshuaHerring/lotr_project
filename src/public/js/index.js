
// hamburger menu //

function openHammy(){
    const close = document.getElementById("gone");
    close.addEventListener("click", checkForHammy(close))
}

function checkForHammy(close){    
    let nav = document.querySelector("nav");
    if(nav.classList.contains("hammy")){
        nav.classList.remove("hammy");
        close.innerHTML = "&#x2630;";
    }else{
        nav.classList.add("hammy");
        close.innerHTML = "&#10005;";
    }

}





// Zoom for the Map //
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









// Map Information Dropdown

let locationURL = "https://lotr-api.onrender.com/locations";
const dropDownContent = document.getElementById("dropdown-content");
const locationInformation  = document.getElementById("location-info");



async function getLocations(url){
    let response  = await fetch(url);
    let mapSpots = await response.json();
    console.log(mapSpots);
    return mapSpots;
}

async function displayLocations(){
    try{
        let data =  await getLocations(locationURL);
        console.log(data);

        // initally display some location info
        displayLocationInfo(data[0], data[0].name); 
        data.forEach(location => {
            let stringName = JSON.stringify(location.name).replace(/"/g,'');
            let nameNoSpace = stringName.replace(/\s/g, '' );
            let namePlace = document.createElement("a");            

            namePlace.innerHTML = stringName;
            namePlace.classList = nameNoSpace;

            dropDownContent.appendChild(namePlace);


            namePlace.addEventListener("click", function (){
                displayLocationInfo(location, location.name)
            });
        });
        

    } catch(error){
        alert(error);
    }
}


async function displayLocationInfo(data, id){
    if(data.name == id){
        locationInformation.innerHTML = 
        `<h2>${data.name}</h2> \n
        <p>${data.description}</p>`;
        locationInformation.style.display = "block";
    }
}

displayLocations()






//JS for Carousel
