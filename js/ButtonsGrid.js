let size = 4;
let numberOfTiles = size ** 2;
let highlighted = numberOfTiles;
let shuffled = false;

let buttonContainer = document.getElementById('btns');

newGame();

function newGame() {
    loadButtons(size);
    setTimeout(() => {
        shuffle();
    }, 500);
}

// Create buttons
function loadButtons(n) {
    for (let b = 1; b <= numberOfTiles; b++) {
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
    selectedButtonId = 'btn' + highlighted;
    selectedButton = document.getElementById(selectedButtonId);
    selectedButton.classList.add("selected");
}

function shuffle() {
    let minShuffles = 100;
    let totalShuffles = minShuffles + Math.floor(Math.random() * (200 - 100) + 100);

    for (let i = minShuffles; i <= totalShuffles; i++) {
        setTimeout(function timer() {
            let x = Math.floor(Math.random() * 4);
            let direction = 0;
            if (x == 0) {
                direction = highlighted + 1;
            } else if (x == 1) {
                direction = highlighted - 1;
            } else if (x == 2) {
                direction = highlighted + size;
            } else if (x == 3) {
                direction = highlighted - size;
            }
            swap(direction);
            if (i >= totalShuffles - 1) {
                shuffled = true;
            }
        }, i * 10);
    }
}

// Swap tiles 
function swap(clicked) {

    if (clicked < 1 || clicked > (numberOfTiles)) {
        return;
    }

    // Check if we are trying to swap right
    if (clicked == highlighted + 1) {
        if (clicked % size != 1) {
            setSelected(clicked);
        }
        // Check if we are trying to swap left
    } else if (clicked == highlighted - 1) {
        if (clicked % size != 0) {
            setSelected(clicked);
        }
        // Check if we are trying to swap up
    } else if (clicked == highlighted + size) {
        setSelected(clicked);
        // Check if we are trying to swap down 
    } else if (clicked == highlighted - size) {
        setSelected(clicked);
    }

    if (shuffled) {
        if (checkHasWon()) {
            alert("Winner!")
        }
    }
}

function checkHasWon() {

    for (let b = 1; b <= numberOfTiles; b++) {
        currentTile = document.getElementById(`btn${b}`);
        currentTileIndex = currentTile.getAttribute('index');
        currentTileValue = currentTile.innerHTML;
        if (parseInt(currentTileIndex) != parseInt(currentTileValue)) {
            return false;
        }
    }
    return true;
}

// Applies stylings to the selected tile
function setSelected(index) {
    currentButton = document.getElementById(`btn${highlighted}`);
    currentButtonText = currentButton.innerHTML;
    currentButton.classList.remove('selected');
    newButton = document.getElementById(`btn${index}`);
    currentButton.innerHTML = newButton.innerHTML;
    newButton.innerHTML = currentButtonText;
    newButton.classList.add("selected");
    currentButton
    highlighted = index;
}