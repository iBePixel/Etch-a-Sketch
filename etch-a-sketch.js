
const container = document.querySelector("#container");
const cubes = document.querySelector('.cube');

function createDiv(){
    let content = document.createElement("div");
    content.classList.add("cube");

    container.appendChild(content);
}

function createGrid(count){
    let div = document.getElementsByClassName("cube");
    let squares = count * count;
    let divCount = div.length;

    if (divCount != 0){
        for (let g = 0; g < divCount; g++){
            container.removeChild(div[0]);
        }
    }

    for (let i = 0; i < squares; i++){
        createDiv()
        div = document.getElementsByClassName("cube");
        div[i].style.width = `calc(95% / ${count}`
    }
    
    
}

createGrid(16);
