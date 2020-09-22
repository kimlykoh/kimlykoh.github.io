var counter;
counter=1;
console.log(counter);
counter=counter+2;
console.log(counter);

counter+=7;
console.log(counter);


function animatePrettyBox(){
    var boxId="prettySquare";
    console.log(boxId);
    document.getElementById(boxId).setAttribute("class","pretty-box");
}

function animateUglyBox(){
    document.getElementById("uglySquare").setAttribute("class","ugly-box")
}

function animateAnnoyingBox(){
    document.getElementById("annoyingSquare").setAttribute("class","annoying-box")
}

function animateAsianBox(){
    document.getElementById("asianSquare").setAttribute("class","asian-box")
}

function animateShortBox(){
    document.getElementById("shortSquare").setAttribute("class","short-box")
}

function animateDumbBox(){
    document.getElementById("dumbSquare").setAttribute("class","dumb-box")
}


    animatePrettyBox();
    animateUglyBox();
    animateAnnoyingBox();
