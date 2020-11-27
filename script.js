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
   console.log("Read" + option + "Recipe");
  
}

document.getElementById("temp").textContent="Kimly's Creation";

function greetings(){
   document.getElementById("temp").textContent="Authentic Malaysian Appetizer";
}

