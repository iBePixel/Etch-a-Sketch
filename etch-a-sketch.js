
const container = document.querySelector("#grid-window");
const redraw = document.querySelector("#newPad");
const colourful = document.querySelector('#randomiseColours');
const shading = document.querySelector('#darkening')

function createDiv(){
    let content = document.createElement("div");
    content.classList.add("cube");

    container.appendChild(content);
}

function addShading(tile){
    if (tile.style.opacity == ''){
        tile.style.opacity = 0.1
    }
    else if (tile.style.opacity < 1){
        tile.style.opacity = parseFloat(tile.style.opacity) + 0.1
    }
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

        let size = 1000 / count;
        size = size - count / count;

        div[i].style.flexBasis =  `${size}px`
        div[i].addEventListener("mouseover", (e) => {
            if (colourful.checked == true && shading.checked == true ){
                addShading(div[i]);
                div[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
            else if (colourful.checked == true){
                div[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                div[i].style.opacity = '';
            }
            else if (shading.checked == true) {
                div[i].style.backgroundColor = "black";
                addShading(div[i]);
            }
            else { 
                div[i].style.backgroundColor = "black";
                div[i].style.opacity = '';
            }
        });
    }
    
    
}

redraw.addEventListener('click', () => {
    let newCount = prompt('Enter a number between 1 and 100', '16')
    newCount = Number(newCount);
    if (isNaN(newCount) ){
        newCount = 100;
    }
    else if (newCount > 100){
        newCount = 100;
    }

    createGrid(newCount)
})


createGrid(16);
