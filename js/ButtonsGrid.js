let size = 4;
let selected = 0;

let buttonContainer = document.getElementById('btns');
loadButtons(size);

// Create buttons
function loadButtons(n){
    for (let b = 0; b < n ** 2; b++) {
        var newButton = document.createElement('button');
        newButton.id = `btn${b}`;
        newButton.setAttribute('index', b);
        newButton.innerHTML = b;
        newButton.classList.add('btn');
        newButton.addEventListener('click', function () {
            swap(this.getAttribute('index'));
        });
        buttonContainer.append(newButton);
    }
}

// Swap tiles 
function swap(index){
    console.log(index);
    if (index == selected + 1){

    }else if(index == selected - 1){

    }else if(index - n == selected % size){

    }else if (index + n == selected % size ){

    }
}