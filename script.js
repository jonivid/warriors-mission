const btn = document.getElementById("btn");
const cards = document.getElementById("cards");

let power = [];
let level = [];
let type = [];
let damage = [];
let image = [];
let warriors = [];

let index = 0;



const typeList = ["archer", "axeman", "sword man"];

const imageList = ["https://pbs.twimg.com/media/C5ghtTUWYAEpME5.jpg" , "https://i.pinimg.com/originals/3b/81/1f/3b811f12a4e2b79ac49f7666fb0c15d6.jpg" , "https://i.pinimg.com/originals/2a/84/2f/2a842fb21258b4d8495535d8d0817be6.jpg", "https://www.pixel4k.com/wp-content/uploads/2019/11/lunar-empress-lux-lol-splash-art-league-of-legends-lol_1574102786.jpg", "https://cdna.artstation.com/p/assets/images/images/011/147/196/large/chengwei-pan-1.jpg?1528096351", "https://www.wallpapers13.com/wp-content/uploads/2019/11/Project-Vayne-Splash-art-League-of-Legends-4k-ultra-HD-wallpapers-scaled.jpg", "https://wallpapercart.com/wp-content/uploads/2019/09/league-of-legends-splash-art-wallpapers-1080p.jpg" ]


btn.addEventListener("click" , creatingWarriors => {
    event.preventDefault();
    generateSingleWarrior();
    warriors[index] = `power: ${power} level: ${level} type: ${type} damage: ${damage} image: ${image}`
    console.log(warriors[index]);
    
    
    let card = document.createElement("div");
    let cardDetails = document.createElement("h2");
    let img = document.createElement("img");
    
    
    cardDetails.innerText = `power: ${power} 
    level: ${level} 
    type: ${type} 
    damage: ${damage}`;


    img.src = image;


    card.classList.add ("cardsStyle");

    cards.appendChild(card);
    card.appendChild(cardDetails);
    card.appendChild(img);
    
    index ++ ;
  
  
   });




function generateSingleWarrior(){
    power = _generatePower();
    level = _generateLevel();
    type = _generateType();
    image  = _generateImage();
    damage = 100 * power

}

function _generatePower(){
    
    return   Math.ceil(Math.random()*999);
}

function _generateLevel(){
    return Math.ceil(Math.random()*10);
}

function _generateType(){
    return typeList[Math.floor(Math.random()*typeList.length)];
}

function _generateImage(){
    return imageList[Math.floor(Math.random()*imageList.length)];
    
}

