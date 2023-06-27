document.addEventListener('DOMContentLoaded', function() {
    //initializing Materialbox
    var materialbox0ptions = {
        inDuration: 3000
    };
    var materialbox = document.querySelectorAll('.materialboxed');
    var materialboxinitialize = M.Materialbox.init(materialbox, materialbox0ptions);

    //initializing accordions
    var collapsibles = document.querySelectorAll('.collapsible');
    var collapsibleinitiate = M.Collapsible.init(collapsibles, options);

    //Initializing modals
    var modal0ptions = {
        opacity: 0.8,
        preventScrolling: false
    };
    var modals = document.querySelectorAll('.modal');
    var modalsinitiate = M.Modal.init(modals, modalOptions);
  });

//Integer
let variableNumber = 2;

//String
let color = "red";

//Change anything to red background
function changeColor(elementId) {
    document.getElementById(elementId).style.backgroundColor = color;
}

//Create a new button button
function createButton() {
    let newButton = document.createElement('a');
    newButton.className = "btn";
    newButton.innerHTML = "<b>New Button!</b>";
    newButton.id = "button"+variableNumber;
    variableNumber++;
    newButton.onclick = function() {
        changeColor(newButton.id);
    }
    document.getElementById("hero").appendChild(newButton);
}

//Dark Mode
function toggleDark() {
    document.body.classList.toggle('dark');
}

