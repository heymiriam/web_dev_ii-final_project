/*var package = require("./package.json");
var myNewApi = require("./lib/my_new_api.js");
console.log("loaded " + package.name + ", version " + package.version);
exports.handler = function (event, context) {
myNewApi.handleRequest(event, context.done);
}*/

/*console.log('api is comming');
fetch('db.json').then(response => {
    console.log(response);
    return response.json();
}).then(json => {
    console.log(response);
    document.getElementById('api').src=URL.createObjectURL();
}).catch(error => {
    console.error('No more facts and stories for today');
    console.error(error);
});*/

/*fetch('db.json').then(response => {
    console.log(response);
    return response.json();
})(function(obj){
    console.log(obj);
}).catch(error => {
    console.error('No more facts and stories for today');
    console.error(error);
})*/
/*fetch('db.json').then(response => response.json()).then(data => {
    console.log(data.stories);
    document.querySelector("#api").innerText=data.stories;
});*/
let buttn =document.querySelector('.display-btn');
function GetStory(){
let myArray = [
    
        
        "I was waiting for the train when two security staff came into the train. Inside, there were two rats on a seat. Each one pick a rat and one of the rats went inside his uniform. He couldn't get rid of the rat."
    ,
       "I was working at Starbucks when a customer asked me if I've seen a teeth. He lost it!"
     ,
       "I was a scout for two years."
      ,
        "I am left-handed.",
      
        "I've been acting in a hip hop music video and a tv promo acting as a couple with an old man."
          ,
        "I was in a tent sleeping with some friends while camping, when a mistery criature came around the tent, smelling everything around. The noise woke me up and I thought my friends were sleeping so, I didn't make any noise and wait until the criature left. The next day, we were discusing what kind of criature could be and we conclude that it was a bear!"
      ,
        "Starbucks: I was attending two customers and they started to fight trying to pay first. I just could look how they were shouting and pushing each other so hard than move the plexiglass."
        ,
        
          "I was in my college when the firefighters came. Apparently, someone burnt the popcorns in the microwave."
        
    /*{
        "_id": 0,
        "story": "I was waiting for the train when two security staff came into the train. Inside, there were two rats on a seat. Each one pick a rat and one of the rats went inside his uniform. He couldn't get rid of the rat."
      },
      {
        "_id": 1,
        "story": "I was working at Starbucks when a customer asked me if I've seen a teeth. He lost it!"
      },
      {
        "_id": 2,
        "story": "I was a scout for two years."
      },
      {
        "_id": 3,
        "story": "I am left-handed."
      },
      {
        "_id": 4,
        "story": "I've been acting in a hip hop music video and a tv promo acting as a couple with an old man."
      },
      {
        "_id": 5,
        "story": "Id consequat consectetur sunt tempor excepteur consectetur Lorem labore aliquip reprehenderit ea."
      },
      {
        "_id": 6,
        "story": "I was in a tent sleeping with some friends while camping, when a mistery criature came around the tent, smelling everything around. The noise woke me up and I thought my friends were sleeping so, I didn't make any noise and wait until the criature left. The next day, we were discusing what kind of criature could be and we conclude that it was a bear!"
      },
      {
          "_id": 7,
          "story": "Starbucks: I was attending two customers and they started to fight trying to pay first. I just could look how they were shouting and pushing each other so hard than move the plexiglass."
        },
        {
          "_id": 8,
          "story": "Starbucks: I was alone working when a thief try to steal some merchadise. I went fast to the merchandise and I grabbed a thermo and I hit him while he was stealing. I could save some stuff at least."
        },
        {
          "_id": 9,
          "story": "I was in my college when the firefighters came. Apparently, someone burnt the popcorns in the microwave."
        }*/

];
let rand=1;
myArray.splice(rand, 1);

let random = myArray[Math.floor(Math.random()* myArray.length)];
document.getElementById("api").innerHTML+= `<br> <li style="width:80%;font-size:20px;color=white;list-style-type:none;margin:auto">${random}</li>`;
myArray.splice(random-1, 1);
}
buttn.addEventListener("click", GetStory);

/*function apiStories(posts){
    let ul = document.querySelector("#api")
    for(let i = 0; i < posts.length; i++){
        let story = `<li style="font-size:20px;color=white;list-style-type:none;margin:auto">${posts[i].story}</li>`
    ul.innerHTML+=story;
    }
}
apiStories(myArray)

document.querySelector(".display-btn").addEventListener("click", ()=>{

})*/




//Mouseover
document.querySelector(".portfolio1").addEventListener("mouserover",()=>{
    document.querySelector(".portfolio1").style.backgroundColor='black';
});