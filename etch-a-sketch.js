
const container = document.querySelector("#container");


function createDiv(){
    let content = document.createElement("div");
    content.classList.add("cube");

    container.appendChild(content);
}

function createGrid(count){
    let div = document.getElementsByClassName("cube");
    let squares = count * count;
    console.log(squares);
    console.log(div.length);

    if (div.length != 0){
        for (let g = 0; g < div.length; g++){
            container.removeChild(div[0]);
            console.log(g);
        }
    }

    for (let i = 0; i < squares; i++){
        createDiv()
    }
}