var scoreEntryBox = document.querySelector("#highscore-entries");
// get local storage data in a variable
var allScores = JSON.parse(localStorage.getItem("highscore"))||[];

// for loop creates li elements for each highscore entry to render on highscores.html
for (let i = 0; i < allScores.length; i++) {
   console.log(allScores[i]);
   var liEl = document.createElement('li');
   liEl.textContent= allScores[i].name + "-" + allScores[i].score;
   scoreEntryBox.appendChild(liEl); 
}