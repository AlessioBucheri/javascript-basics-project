let count = 0;

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
    if (count === 5){
        alert("Corretto, passiamo al livello successivo!")
        document.getElementById('lvl-1-A').src = './assets/images/lvl-2-A.png';
        document.getElementById('lvl-1-B').src = './assets/images/lvl-2-B.png';
    }
    else if (count === 7){
        alert("Corretto, passiamo all'ultimo livello!")
        document.getElementById('lvl-1-A').src = './assets/images/lvl-3-A.png';
        document.getElementById('lvl-1-B').src = './assets/images/lvl-3-B.png';
    }
    else {
        alert("Non è giusto, ritenta!");
    }
}