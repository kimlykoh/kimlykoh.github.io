function addAnimation(){
    document.getElementById("squareTwo").setAttribute("class","square");
    }

function addAnimation2(){
    document.getElementById("squareOne").setAttribute("class","yellow-square");
    addAnimation();
}


function addAnimation3(){
    document.getElementById("circle").setAttribute("class","circle")
}

function addAnimation4(){
    document.getElementById("purpleSquare").setAttribute("class","purple-box")
}

function addAnimation5(){
    document.getElementById("goldSquare").setAttribute("class","gold-box")
}

function animationBlueBox(){
    document.getElementById("blueSquare").setAttribute("class","blue-box")
}

function addAnimation7(){
    document.getElementById("orangeSquare").setAttribute("class","orange-box square-box")
}

function addAnimation8(){
    document.getElementById("blackSquare").setAttribute("class","black-box")
}
function addAllAnimation(){
    addAnimation();
    addAnimation2();
    addAnimation3();
    addAnimation4();
    addAnimation5();
    animationBlueBox();
    addAnimation7();
    addAnimation8();
}
