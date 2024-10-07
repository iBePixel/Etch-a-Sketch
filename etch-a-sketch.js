
const container = document.querySelector("#container");


function createDiv(){
    let content = document.createElement("div");
    content.classList.add("cube");

    container.appendChild(content);
}

function createGrid(count){
    let squares = count * count;
    console.log(squares);
    
    for (let i = 0; i < squares; i++){
        createDiv()
    }
}