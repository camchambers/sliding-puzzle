let size = 4;
let highlighted = 8;

let buttonContainer = document.getElementById('btns');
loadButtons(size);

// Create buttons
function loadButtons(n) {
    for (let b = 0; b < n ** 2; b++) {
        var newButton = document.createElement('button');
        newButton.id = `btn${b}`;
        newButton.setAttribute('index', b);
        newButton.innerHTML = b;
        newButton.classList.add('btn');
        newButton.addEventListener('click', function () {
            swap(parseInt(this.getAttribute('index')));
        });
        buttonContainer.append(newButton);
    }
    selectedButton = document.getElementById(`btn8`);
    selectedButton.classList.add("selected");
}

// Swap tiles 
function swap(clicked) {
    // Check if we are trying to swap right
    if (clicked == highlighted + 1) {
        if (clicked % size != 0) {
            setSelected(clicked);
        }
    // Check if we are trying to swap left
    } else if (clicked == highlighted - 1){
        if (clicked % size != 3){
            setSelected(clicked);
        }
    } else if (clicked == highlighted + size){
        setSelected(clicked);
    } else if (clicked == highlighted - size){
        setSelected(clicked);
    }
}

// Applies stylings to the selected tile
function setSelected(index) {
    currentButton = document.getElementById(`btn${highlighted}`);
    currentButton.classList.remove('selected');
    newButton = document.getElementById(`btn${index}`);
    newButton.classList.add("selected");
    highlighted = index;
}