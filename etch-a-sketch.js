
const container = document.querySelector("#grid-window");
const redraw = document.querySelector("#newPad");
const colourful = document.querySelector('#randomiseColours');

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

        let size = 1000 / count;
        size = size - count / count;

        div[i].style.flexBasis =  `${size}px`
        div[i].addEventListener("mouseover", (e) => {
            if (colourful.checked == true ){
                div[i].style.backgroundColor = "green";
            }
            else { 
                div[i].style.backgroundColor = "black";
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
