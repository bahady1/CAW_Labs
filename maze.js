const s = document.querySelector('#start');
const e = document.querySelector('#end');
const txt = document.querySelector('#status');
var cheating = 0;
var maze = document.querySelector('#maze');
var body = document.body;



var onGame = 0;

const blocks = document.querySelectorAll(".boundary");


s.addEventListener('click',function() {
    console.log('Div was clicked!');
    maze.style.backgroundColor = "";
    txt.textContent = 'Move your mouse over the "S" to begin.';
    txt.style.color = "black";
    onGame = 1;

    console.log(onGame);
    
    const elements = document.querySelectorAll(".boundary");

    elements.forEach(function(element) {
        element.style.backgroundColor = "#eeeeee";
    });

});

    blocks.forEach(function (block) {
    block.addEventListener('mouseover',function() {
        console.log(onGame);

        if (onGame ==1) {
            console.log('mouse over!');

            txt.textContent = "You Lose Try Again";
            txt.style.color = "red";

            onGame = 0;
            
            const elements = document.querySelectorAll(".boundary");

// Change the color to red
            elements.forEach(function(element) {
                element.style.backgroundColor = "red";
            });

        }
    
    });
});

e.addEventListener('mouseover',function() {

    if (onGame == 1 && cheating == 0) {
        txt.textContent = "You Win The Game";
        txt.style.color = "green";
    onGame = 0;
    }
});

maze.addEventListener("mouseleave", function() {
    if (onGame ==1) {

        txt.textContent = "You Are cheating";
        txt.style.color = "red";

        maze.style.backgroundColor = "red";
        cheating = 1;

    }

});
maze.addEventListener("mouseover", function() {
    s.addEventListener("mouseover", function() {
        if (onGame ==1) {
            cheating = 0;
        maze.style.backgroundColor = "";
        txt.textContent = 'Never Cheat Again.';
        txt.style.color = "black";
        }
    
    });


});
