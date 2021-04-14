var dish="";
var description="";
var price="";
var priceId="price";
var imgSrcIdCount=6  ;
var imgSrcIdCountWord="card";
var imageLink="";
var imageLink2="";

var pricey=0;
var costs= "cost: ";
var prices= "price: ";
var convertedCosts= "convertedCost: ";


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
   
    var menuItemTemplate=`
    <article class="column column1 fadeInLeft">
        <div>
            <img src="imgSrcPlaceholder"
                alt="" width="100%" id="imgSrcId" class="images">
                <h2 id="menuTitleId">menuItemTitle</h2>
                <p id="menuDescId">menuDescText</p>
                <p>$<span id="menuPriceId">menuPriceText</span></p>
                <button onclick="changeImg('imgSrcId','imgSrcPlaceholder2')" class="nextButton">next</button>
                <button onclick="addToCart(imgSrcIdCount)" class="ATCbutton">add to cart</button>
            </div>
        </div>
    </article>`;
    menuItemTemplate=menuItemTemplate.replaceAll("imgSrcIdCount"  , imgSrcIdCount);
    menuItemTemplate=menuItemTemplate.replaceAll("imgSrcId"  ,imgSrcIdCountWord + imgSrcIdCount);
    menuItemTemplate=menuItemTemplate.replace("imgSrcPlaceholder",imageLink);
    menuItemTemplate=menuItemTemplate.replace("imgSrcPlaceholder2",imageLink2);
    menuItemTemplate=menuItemTemplate.replace("menuItemTitle",dish);
    menuItemTemplate=menuItemTemplate.replace("menuDescText",description);
    menuItemTemplate=menuItemTemplate.replace("menuPriceText",price);
    menuItemTemplate=menuItemTemplate.replace("menuPriceId" ,priceId + imgSrcIdCount++);

    document.getElementById("drinksSection").innerHTML+=menuItemTemplate
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


for(count=1;count<=3;count++){
   console.log("dishArticle:" + count);
   console.log("animation-delay:" + count + "s");
   document.getElementById("dishArticle" + count).classList.add("class","fadeInLeft");
    //document.getElementById("dishArticle" + count).setAttribute("class","fadeInLeft");
   document.getElementById("dishArticle" + count).setAttribute("style","animation-delay:"+count*.5+"s;" );
//    console.log("animation-delay");
    
}



// goal:we want cards to start showing when we reach dessert section
// notes:be specify, when we scroll to dessert we want dessert title to start fading in and cards fading in from the left.
// things we need to know:we need to know the exact position where dessert is but first we to know where we are 

function showSecondSection(){
    var position=0;
    var dessertPosition=325;
    var drinksPosition=925;
    // top of the page is always y=0
    position=window.pageYOffset;
    var width=window.innerWidth;
    if(width<500){
        dessertPosition=1400;
        drinksPosition=3000;
    }
    else if(width>500 && width<935){
        dessertPosition=900;
        drinksPosition=1980;
    }
    else if(width>935){
        dessertPosition=325;
        drinksPosition=925;
    }
    console.log("dessertPosition: " + dessertPosition + " drinksPosition: " + drinksPosition);

    console.log(position);//smallest width 500 or anything less, medium width 500-935, large width 935+
    // window.pageYoffset is how far i am from the starting point and when i scroll number for position would increase
    if (position>dessertPosition){
        document.getElementById("dessertTitle").classList.add("class","fadeIn");
        for(count=4;count<=6;count++){
            document.getElementById("dishArticle" + count).classList.add("class","fadeInLeft");
            document.getElementById("dishArticle" + count).setAttribute("style","animation-delay:"+(count-3)*.5+"s;" );             
        }
    }
    if (position>drinksPosition){
        document.getElementById("drinksTitle").classList.add("class","fadeIn");
        for(count=7;count<=9;count++){
            fadeInLeft(count);     
        }
    }
}

// smallest width<500
// dessert=1400
// drinks=3000
// medium=500<width<935 
// dessert=900
// drinks=1980
// largest width>935
// dessert=325
// drinks=925

function fadeInLeft(dishArticleIdNumber){
    var numberOfCardsPerSection=3;
    var sectionAnimationDelay=dishArticleIdNumber % (numberOfCardsPerSection + 1);
    console.log(sectionAnimationDelay)
    document.getElementById("dishArticle" + dishArticleIdNumber).classList.add("class","fadeInLeft");
    document.getElementById("dishArticle" + dishArticleIdNumber).setAttribute("style","animation-delay:"+(sectionAnimationDelay)*.5+"s;" );             
}