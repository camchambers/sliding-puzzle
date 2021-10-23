let buttonContainer = document.getElementById('btns');

// Create buttons
for (let b = 1; b < 17; b++) {
    var newButton = document.createElement('button');
    newButton.id = `btn${b}`;
    newButton.innerHTML = b;
    newButton.classList.add('btn');
    newButton.addEventListener('click', function () {
        alert(this.id);
    });
    buttonContainer.append(newButton);
}

