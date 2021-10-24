let size = 4;
let selected = 0;

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
function swap(index) {
    if (index == selected + 1) {
        console.log(selected + 1);
        if ((selected + 1) % size != 0) {
            setSelected(selected + 1);
        }
    } else if (index == selected - 1) {

    } else if (index - size == selected % size) {

    } else if (index + size == selected % size) {

    }
}

// Applies stylings to the selected tile
function setSelected(index) {
    currentButton = document.getElementById(`btn${selected}`);
    currentButton.classList.remove('selected');
    newButton = document.getElementById(`btn${index}`);
    newButton.classList.add("selected");
    selected = index;
}