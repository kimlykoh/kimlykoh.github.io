

var dish="";
var description="";
var price=""
var imageLink="";
var imageLink2="";

var pricey=0;
var costs= "cost: ";
var prices= "price: ";
var convertedCosts= "convertedCost: ";

var number=3;
var number2=1;
var sum=0;

function transform() {
document.getElementById("title").textContent="Kimchi";
document.getElementById("title2").textContent="Pizza";
document.getElementById("title3").textContent="Sushi";
document.getElementById("title4").textContent="Steak";
document.getElementById("title5").textContent="Egg";
document.getElementById("desc").textContent="Spicy Pickled Cabbage";
document.getElementById("desc2").textContent="Vegetarian Pizza";
document.getElementById("desc3").textContent="Green Sushi";
document.getElementById("desc4").textContent="Filet Mignon";
document.getElementById("desc5").textContent="Cheesy Egg";
}

function changeImg(imgId, imgSrc) {
    document.getElementById(imgId).setAttribute("src", imgSrc);
}


function submit() {
    
    dish=document.getElementById("dish").value;
    description=document.getElementById("description").value;
    price=document.getElementById("price").value;
    imageLink=document.getElementById("imageLink").value;
    imageLink2=document.getElementById("imageLink2").value;
    document.getElementById("title6").textContent=dish;
    document.getElementById("desc6").textContent=description;
    document.getElementById("price6").textContent=price;
    document.getElementById("img6").setAttribute("src", imageLink);
    document.getElementById("button6").setAttribute("onclick", "changeImg('img6', '"+ imageLink2 +"')");
   
    // document.getElementById('button6').addEventListener ('click', function(){
    //     changeImg('img6',   imageLink2  ) 
    // })
   
    
}



function addToCart(idNumber) {
    var cost=0;
    var convertedCost=0;
    cost=document.getElementById("price" + idNumber).textContent;
    convertedCost=Number(cost);
    pricey=pricey+convertedCost;
    console.log(costs + cost);
    console.log(prices + pricey);
    console.log(convertedCosts + convertedCost);
    document.getElementById("total").textContent="Cart: $" + pricey;
   }

function changeBannerText() {
    document.getElementById("firstText").textContent="Welcome to Wendy's";
    document.getElementById("secondText").textContent="im starving";
    document.getElementById("thirdText").textContent="give me food";
}


console.log(10);
console.log(number);
number = 17;
console.log(number);
sum = number + number2;
console.log(sum);
sum = number + 3;
console.log(sum);

console.log("hi")

document.getElementById("firstText").textContent=""