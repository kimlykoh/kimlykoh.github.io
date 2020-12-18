var firstName="";
var email="";
var comment="";
var option=""; 


function saveMessage(){
   firstName=document.getElementById("firstName").value;
   email=document.getElementById("email").value;
   comment=document.getElementById("comment").value;
   console.log(firstName);
   console.log(email);
   console.log(comment);
    }


function curryPuffOptions(){
   option=document.getElementById("curry-puff-recipe").value;
   document.getElementById("curry-puff-recipe-button").textContent="Read " + option + " Recipe";
   document.getElementById("curry-puff-recipe-button").setAttribute("href", option + "-curry-puff.html" )
}


function satayOptions(){
   option=document.getElementById("satay-recipe").value;
   document.getElementById("satay-recipe-button").textContent="Read " + option + " Recipe";
   document.getElementById("satay-recipe-button").setAttribute("href", option + "-satay.html" )
   document.getElementById("satay-desc").textContent=option + " Skewer";
}

document.getElementById("temp").textContent="Kimly's Creation";
document.getElementById("firstName").setAttribute("placeholder","First Name")
function greetings(){
   document.getElementById("temp").textContent="Authentic Malaysian Appetizer";
}

