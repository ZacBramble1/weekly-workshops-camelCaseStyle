
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')

function change_colour(id, color) {
    let first = document.getElementById(id);
    first.style = 'background-color: ' + color;
}

button1.onclick = function() {
    change_colour('button2', 'red');
    change_colour('button4', 'red');
}
button2.onclick = function() {
    change_colour('button1', 'yellow');
    change_colour('button4', 'yellow');
}
button3.onclick = function() {
    change_colour('button2', 'yellow');
    change_colour('button3', 'yellow');
}
button4.onclick = function() {
    change_colour('button1', 'red');
    change_colour('button3', 'red');
}
