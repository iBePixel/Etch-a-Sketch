
const container = document.querySelector("#container");


function createDiv(){
    let content = document.createElement("div");
    content.classList.add("cube");

    container.appendChild(content);
}

function createGrid(count){
    let squares = count * count;
    console.log(squares);
    if (document.querySelector('cube')){
        console.log('attempting to delete')
        container.removeChild("cube");
    }

    for (let i = 0; i < squares; i++){
        createDiv()
    }
}