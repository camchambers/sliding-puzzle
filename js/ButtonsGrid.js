let size = 4;
let highlighted = 0;

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
            swap(this.getAttribute('index'));
        });
        buttonContainer.append(newButton);
    }
    selectedButton = document.getElementById(`btn0`);
    selectedButton.classList.add("selected");
}

// Swap tiles 
function swap(clicked) {
    if (clicked == highlighted + 1) {
        if ((highlighted + 1) % size != 0) {
            setSelected(highlighted + 1);
        }
    } else if (clicked == highlighted - 1) {
        if ((highlighted) % size != 0) {
            setSelected(highlighted - 1);
        }
    } else if (clicked - size == highlighted % size) {

    } else if (clicked + size == highlighted % size) {

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