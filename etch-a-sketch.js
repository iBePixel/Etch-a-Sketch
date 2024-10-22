
const container = document.querySelector("#grid-window");


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

        div[i].style.width = `${size}px`
        div[i].style.height = `${size}px`
        div[i].addEventListener("mouseover", (e) => {
            console.log(e);
            div[i].style.backgroundColor = "black";
        });
    }
    
    
}



createGrid(16);
