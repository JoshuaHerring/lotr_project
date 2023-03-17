async function loadTemplate(path){
    let locate = await fetch (path); // return fetch path
    let template = await locate.text();
    return template;
}

function renderWithTemplate(template, parentElement){
    parentElement.insertAdjacentHTML("afterbegin", template);
    }

async function loadHeaderFooter(){
    const header = await loadTemplate("../public/partials/header.html");
    const footer = await loadTemplate("../public/partials/footer.html");
    const headElement = document.querySelector("#parentHeader");
    const footElement = document.querySelector("#parentFooter");
    let head = renderWithTemplate(header, headElement);
    let foot = renderWithTemplate(footer, footElement);

    
}

loadHeaderFooter();