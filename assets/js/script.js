//Grid
const grid = document.createElement('div');
grid.setAttribute( 'id', 'grid' );
grid.setAttribute( 'class', 'grid' );

//Decrease Button
const decreaseButton = document.createElement('button');
decreaseButton.textContent = '-';
decreaseButton.setAttribute( 'id', 'decreaseBtn' );
decreaseButton.setAttribute( 'class', 'button' );

//Increase Button
const increaseBtn = document.createElement('button');
increaseBtn.textContent = '+';
increaseBtn.setAttribute( 'id', 'increaseBtn' );
increaseBtn.setAttribute( 'class', 'button' );

//Output
const countLabel = document.createElement('label');
countLabel.textContent = 0;
countLabel.setAttribute( 'id', 'countLabel' );
countLabel.setAttribute( 'class', 'output span-two' );

//Reset Button
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.setAttribute( 'id', 'resetBtn' );
resetBtn.setAttribute('class', 'button span-two');

//Confirm Button
const confirmBtn = document.createElement('button');
confirmBtn.textContent = 'Conferma';
confirmBtn.setAttribute( 'id', 'confirm' );
confirmBtn.setAttribute('class', 'button span-two');

//DOM modifier
document.getElementById('counter').append(grid);
document.getElementById('grid').append(decreaseButton);
document.getElementById('grid').append(countLabel);
document.getElementById('grid').append(increaseBtn);
document.getElementById('grid').append(resetBtn);
document.getElementById('grid').append(confirmBtn);



let count = 0;
let livello1 = 1;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("confirm").onclick = function(){
    if (count === 5 && livello1 == 1){
        alert("Corretto, passiamo al livello successivo!")
        document.getElementById("lvl-1-A").src = './assets/images/lvl-2-A.png';
        document.getElementById("lvl-1-B").src = './assets/images/lvl-2-B.png';
        ++livello1;
        document.getElementById("countLabel").innerHTML = 0;
        count = 0;
    }
    else if (count === 7 && livello1 == 2){
        alert("Corretto, passiamo all'ultimo livello!")
        document.getElementById('lvl-1-A').src = './assets/images/lvl-3-A.png';
        document.getElementById('lvl-1-B').src = './assets/images/lvl-3-B.png';
        ++livello1;
        document.getElementById("countLabel").innerHTML = 0;
        count = 0;
    }
    else if (count === 10 && livello1 == 3){
        alert("Hai vinto, congratulazioni!");
        document.getElementById("countLabel").innerHTML = 0;
        count = 0;
    }
    else {
        alert("Non è giusto, ritenta!");
        document.getElementById("countLabel").innerHTML = 0;
        count = 0;
    }
}

