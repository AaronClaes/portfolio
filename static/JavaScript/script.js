//SCORE
var totalScore = 0; //instellen start score
var totalLifes = 3; //instellen aantal levens
//SPEED
//variablelen om sneller te laten gaan via functie
var virusSpeed = 1.5; //snelheid virussen
var soapSpeed = 2; //snelheid zeepfles
var toiletPaperSpeed = 1; //snelheid toiletpapier
//GAMEOVER
var gameOver = document.querySelector(".gameOver"); //variabele maken van gameOver img
var leftGameOver = -501; //start positie van img voor animatie wordt uitgevoerd
//POINTS
var fivePoints = document.querySelector(".plus5Points"); //variabele maken van img
var onePoint = document.querySelector(".plus1Point"); //variabele maken van img
//EMOJI
var emoji = document.querySelector(".emoji"); //variabele maken van div
var emojiImg = document.querySelector(".emojiImg"); //variabele maken van img om te kunnen aanpassen wanneer je leven verliest
var leftEmoji = 200; //start positie emoji
var topEmoji = 420; //start positie emoji
//VIRUS1
var virus = document.querySelector(".virus1"); //variabele maken van img
var topVirus = -75; //start positie virus, anders voor alle icons om te vermijden dat ze tegelijk naar beneden komen
var leftVirus = Math.random() * 425; //random start positie virus
virus.style.left = leftVirus + "px"; //random start positie instellen
var virusHitBugFix = 0; //hit counter voor bug van hit counter tegen te gaan, wanneer de var 1 is werkt collision() niet meer om score correct te houden
var virusTimer; //variabele van timer aanmaken voor te gebruiken in start functie
//VIRUS2
var virus2 = document.querySelector(".virus2"); //variabele maken van img
var topVirus2 = -300; //start positie virus, anders voor alle icons om te vermijden dat ze tegelijk naar beneden komen
var leftVirus2 = Math.random() * 425; //random start positie virus
virus2.style.left = leftVirus2 + "px"; //random start positie instellen
var virus2HitBugFix = 0; //hit counter voor bug van hit counter tegen te gaan, wanneer de var 1 is werkt collision() niet meer om score correct te houden
var virus2Timer; //variabele van timer aanmaken voor te gebruiken in start functie
//SOAP
var soap = document.querySelector(".soap"); //variabele maken van img
var topSoap = -500; //start positie zeepfles, anders voor alle icons om te vermijden dat ze tegelijk naar beneden komen
var leftSoap = Math.random() * 425; //random start positie zeepfles
soap.style.left = leftSoap + "px"; //random start positie instellen
var soapHitBugFix = 0; //hit counter voor bug van hit counter tegen te gaan, wanneer de var 1 is werkt collision() niet meer om score correct te houden
var soapTimer; //variabele van timer aanmaken voor te gebruiken in start functie
//TOILETPAPER
var toiletPaper = document.querySelector(".toiletPaper");
var topToiletPaper = -75; //random start positie zeepfles
var leftToiletPaper = Math.random() * 425; //random start positie zeepfles
toiletPaper.style.left = toiletPaper + "px"; //random start positie instellen
var toiletPaperHitBugFix = 1; //hit counter voor bug van hit counter tegen te gaan, start op 1 om collision bug dat niet werkt tegen te gaan
var toiletPaperTimer; //variabele van timer aanmaken voor te gebruiken in start functie
toiletPaper.style.visibility = "hidden"; //start onzichtbaar om collision bug dat niet werkt tegen te gaan
//KEYEVENTS
window.addEventListener("keydown", moveEmoji, false); //key events aanmaken voor linker pijltje en rechter pijltje
var keycode = {
  LEFT: 37,
  RIGHT: 39,
};
var highscore = localStorage.getItem("highscore");
if (!highscore) {
  highscore = 0;
}
document.querySelector(".highScore").innerHTML = highscore;

//DIFFICULTY
function updateDifficulty() {
  virusSpeed = 1.5 + totalScore / 300;
  soapSpeed = 2 + totalScore / 300;
  toiletPaperSpeed = 1 + totalScore / 300;
}
//UPDATE SCORE
function updateScore() {
  //functie om scoren up te daten, functie wordt gebruikt nadat de zeepfles of toiletpapier geraakt wordt
  document.querySelector(".totalScore").innerHTML = totalScore;
}
updateScore(); //zorgt ervoor dat er 0 staat inplaats van niets wanneer het spel start
//UPDATE LIFES
var heart1 = document.querySelector(".heart1"); //variabele maken van img
var heart2 = document.querySelector(".heart2"); //variabele maken van img
var heart3 = document.querySelector(".heart3"); //variabele maken van img
function updateLifes() {
  //zorgt er voor dat het correct aantal hartjes getoond wordt in verhouding met het aantal levens dat over zijn | scale gebruikt in combinatie met transition (zie css)
  if (totalLifes == 0) {
    heart1.style.transform = "scale(0)";
    heart2.style.transform = "scale(0)";
    heart3.style.transform = "scale(0)";
    emojiImg.src = "images/emoji4.png"; //veranderd de emoji wanneer hij dood is
  } else if (totalLifes == 1) {
    heart2.style.transform = "scale(0)";
    heart3.style.transform = "scale(0)";
    emojiImg.src = "images/emoji3.png"; //veranderd de emoji wanneer er nog maar 1 leven is
  } else if (totalLifes == 2) {
    heart3.style.transform = "scale(0)";
    emojiImg.src = "images/emoji2.png"; //veranderd de emoji wanneer er nog maar 2 levens zijn
  } else if (totalLifes == 3) {
    heart1.style.transform = "scale(1)";
    heart2.style.transform = "scale(1)";
    heart3.style.transform = "scale(1)";
  }
}
//SHOW +5
function show5Points() {
  //laat de +5 image op het scherm verschijnen om de plaats waar de hit geregistreerd is
  fivePoints.style.left = leftSoap + "px";
  fivePoints.style.top = topSoap - 50 + "px";
  fivePoints.style.transform = "scale(1)"; //scale gebruikt in combinatie met transition (zie css)
}
//SHOW +1
function show1Point() {
  //laat de +1 image op het scherm verschijnen om de plaats waar de hit geregistreerd is
  onePoint.style.left = leftToiletPaper + "px";
  onePoint.style.top = topToiletPaper - 50 + "px";
  onePoint.style.transform = "scale(1)"; //scale gebruikt in combinatie met transition (zie css)
}
//PLAY AGAIN
var playAgainButton = document.querySelector(".playAgain"); //var maken van play again
function playAgain() {
  //functie om play again button te laten werken
  playAgainButton.style.display = "none"; //button verdwijnt wanneer spel opnieuw start
  document.querySelector(".gameOverScore").style.display = "none"; //score verdwijnt wanneer spel opnieuw start
  document.querySelector(".gameOverText").style.display = "none"; //score verdwijnt wanneer spel opnieuw start
  gameOver.style.top = -501 + "px"; //gameover img keert terug naar boven
  document.querySelector(".start").style.display = "block"; //start scherm wordt zichtbaar voor vlotte reset
  setTimeout(reloadGame, 2000); //spel wordt herladen
}
playAgainButton.addEventListener("click", playAgain); // functie om click te registeren wanneer spel opnieuw gespeeld moet worden
//START PLAYING
var playing = 0; //variabele aangemaakt om te kunnen gebruiken in key event functie, zodat emoji niet bewogen kan worden wanneer spel niet bezig is
var startButton = document.querySelector(".startButton"); //var maken van start button
startButton.addEventListener("click", function (e) {
  //functie om game te laten starten wanneer er op de knop geklikt wordt
  document.querySelector(".score").style.visibility = "visible"; //score wordt weer zichbaar
  document.querySelector(".highscore").style.visibility = "visible"; //score wordt weer zichbaar
  playing = 1; //playing wordt aangezet zodat emoji bewogen kan worden met keys
  startButton.style.display = "none"; //knop verdwijnt vanaf hierop geklikt is
  document.querySelector(".start").style.display = "none"; //start scherm verdwijnt

  setTimeout(startPlaying, 2000); //timeout functie zodat emojis pas naar beneden komen na 2 seconden, zo heeft de speler wat meer tijd om zich voor te bereiden
});
function startPlaying() {
  //functie om de intervals te laten starten
  virusTimer = setInterval(movingVirus, 5);
  virus2Timer = setInterval(movingVirus2, 5);
  soapTimer = setInterval(movingSoap, 5);
  toiletPaperTimer = setInterval(movingToiletPaper, 5);
}

function reloadGame() {
  //functie om het spel te laten herstarten
  location.reload();
}

//MOVE FUNCTIONS
//VIRUS1
function movingVirus() {
  //functie om virus 1 te laten bewegen en om de collision met de emoji te registreren
  topVirus = topVirus + virusSpeed; //virus naar beneden laten bewegen via ingestelde snelheid
  if (virusHitBugFix == 0)
    if (
      collision(leftVirus, topVirus, 60, 60, leftEmoji, topEmoji, 75, 75) ==
      true
    ) {
      //if statement om collision hit bug te vermijden zodat hits niet dubbel geteld worden
      //!!!de grote van het hitvak is kleiner dan de image size omdat de emoji rond is en dit voor een oneerlijk situatie zorde!!!
      virusHitBugFix++; //var wordt op 1 gezet zodat collision niet meer werkt en geen dubbele score kan rekenen
      virus.style.visibility = "hidden"; //virus verdwijnt wanneer het geraakt wordt
      totalLifes = totalLifes - 1; //leven kwijt wanneer emoji geraakt wordt
      updateLifes(); //aantal hartjes zichtbaar updaten
      stop(); //kijken of game moet stoppen (functie staat vanonder)
    }

  virus.style.top = topVirus + "px";
  if (topVirus > 600) {
    //als het virus het einde bereikt heeft start het weer vanboven
    virusHitBugFix = 0; //var wordt weer op 0 gezet zodat hit weer geteld kan worden
    virus.style.visibility = "visible"; //virus is weer zichtbaar als het geraakt zou zijn en onzichtbaar was
    topVirus = -75; //wordt terug vanboven gezet
    virus.style.top = topVirus + "px"; //top wordt uitgevoerd
    leftVirus = Math.random() * 425; //nieuwe random locatie berekent
    virus.style.left = leftVirus + "px"; //random getal wordt toegewezen
  }
}

//VIRUS2
function movingVirus2() {
  //functie om virus 2 te laten bewegen en om de collision met de emoji te registreren
  topVirus2 = topVirus2 + virusSpeed; //virus naar beneden laten bewegen via ingestelde snelheid
  if (virus2HitBugFix == 0)
    if (
      collision(leftVirus2, topVirus2, 60, 60, leftEmoji, topEmoji, 75, 75) ==
      true
    ) {
      //if statement om collision hit bug te vermijden zodat hits niet dubbel geteld worden
      //!!!de grote van het hitvak is kleiner dan de image size omdat de emoji rond is en dit voor een oneerlijk situatie zorde!!!
      virus2HitBugFix++; //var wordt op 1 gezet zodat collision niet meer werkt en geen dubbele score kan rekenen
      virus2.style.visibility = "hidden"; //virus verdwijnt wanneer het geraakt wordt
      totalLifes = totalLifes - 1; //leven kwijt wanneer emoji geraakt wordt
      updateLifes(); //aantal hartjes zichtbaar updaten
      stop(); //kijken of game moet stoppen (functie staat vanonder)
    }

  virus2.style.top = topVirus2 + "px";
  if (topVirus2 > 600) {
    //als het virus het einde bereikt heeft start het weer vanboven
    virus2HitBugFix = 0; //var wordt weer op 0 gezet zodat hit weer geteld kan worden
    virus2.style.visibility = "visible"; //virus is weer zichtbaar als het geraakt zou zijn en onzichtbaar was
    topVirus2 = -300; //wordt terug vanboven gezet
    virus2.style.top = topVirus2 + "px"; //top wordt uitgevoerd
    leftVirus2 = Math.random() * 425; //nieuwe random locatie berekent
    virus2.style.left = leftVirus2 + "px"; //random getal wordt toegewezen
  }
}
//TOILETPAPER
function movingToiletPaper() {
  //functie om toiletpapier te laten bewegen en om de collision met de emoji te registreren
  topToiletPaper = topToiletPaper + toiletPaperSpeed; //toiletpapier naar beneden laten bewegen via ingestelde snelheid
  if (toiletPaperHitBugFix == 0)
    if (
      collision(
        leftToiletPaper,
        topToiletPaper,
        50,
        60,
        leftEmoji,
        topEmoji,
        75,
        75
      ) == true
    ) {
      //if statement om collision hit bug te vermijden zodat hits niet dubbel geteld worden
      //!!!de grote van het hitvak is kleiner dan de image size omdat de emoji rond is en dit voor een oneerlijk situatie zorde!!!
      toiletPaperHitBugFix++; //var wordt op 1 gezet zodat collision niet meer werkt en geen dubbele score kan rekenen
      toiletPaper.style.visibility = "hidden"; //toiletpapier verdwijnt wanneer het geraakt wordt
      totalScore = totalScore + 1; //1 punt erbij wanneer emoji geraakt wordt
      updateScore(); //aantal punten zichtbaar updaten
      updateDifficulty(); //kijken of difficulty verhoogt moet worden of niet
      show1Point(); //img van +1 punt tonen
    }

  toiletPaper.style.top = topToiletPaper + "px";
  if (topToiletPaper > 600) {
    //als het toiletpapier het einde bereikt heeft start het weer vanboven
    toiletPaperHitBugFix = 0; //var wordt weer op 0 gezet zodat hit weer geteld kan worden
    toiletPaper.style.visibility = "visible"; //toiletpapier is weer zichtbaar als het geraakt zou zijn en onzichtbaar was
    topToiletPaper = -200; //wordt terug vanboven gezet
    toiletPaper.style.top = topToiletPaper + "px"; //top wordt uitgevoerd
    leftToiletPaper = Math.random() * 425; //nieuwe random locatie berekent
    toiletPaper.style.left = leftToiletPaper + "px"; //random getal wordt toegewezen
    onePoint.style.transform = "scale(0)"; // +1 points image gaat weer weg
  }
}
//SOAP
function movingSoap() {
  //functie om zeepfles te laten bewegen en om de collision met de emoji te registreren
  topSoap = topSoap + soapSpeed; //zeepfles naar beneden laten bewegen via ingestelde snelheid
  if (soapHitBugFix == 0)
    if (
      collision(leftSoap, topSoap, 50, 55, leftEmoji, topEmoji, 75, 75) == true
    ) {
      //if statement om collision hit bug te vermijden zodat hits niet dubbel geteld worden
      //!!!de grote van het hitvak is kleiner dan de image size omdat de emoji rond is en dit voor een oneerlijk situatie zorde!!!
      soapHitBugFix++; //var wordt op 1 gezet zodat collision niet meer werkt en geen dubbele score kan rekenen
      soap.style.visibility = "hidden"; //zeepfles verdwijnt wanneer het geraakt wordt
      totalScore = totalScore + 5; //5 punten erbij wanneer emoji geraakt wordt
      updateScore(); //aantal punten zichtbaar updaten
      updateDifficulty(); //kijken of difficulty verhoogt moet worden of niet
      show5Points(); //img van +5 punten tonen
    }

  soap.style.top = topSoap + "px";
  if (topSoap > 600) {
    //als de zeepfles het einde bereikt heeft start het weer vanboven
    soapHitBugFix = 0; //var wordt weer op 0 gezet zodat hit weer geteld kan worden
    soap.style.visibility = "visible"; //zeepfles is weer zichtbaar als het geraakt zou zijn en onzichtbaar was
    topSoap = -500; //wordt terug vanboven gezet
    soap.style.top = topSoap + "px"; //top wordt uitgevoerd
    leftSoap = Math.random() * 425; //nieuwe random locatie berekent
    soap.style.left = leftSoap + "px"; //random getal wordt toegewezen
    fivePoints.style.transform = "scale(0)"; // +5 points image gaat weer weg
  }
}

function moveEmoji(event) {
  //keyevent om emoji te laten bewegen
  switch (event.keyCode) {
    case keycode.LEFT:
      if (leftEmoji >= 30 && totalLifes > 0 && playing == 1) {
        //voor de emoji kan bewegen moet het zich binnen de randen bevinden, het aantal levens mag niet 0 zijn en er moet gespeeld worden
        leftEmoji = leftEmoji - 37; //verspring steeds met 37 pixels
        emoji.style.left = leftEmoji + "px"; //pixels worden toegevoegd aan de emoji
      } else {
      }
      break;
    case keycode.RIGHT:
      if (leftEmoji <= 400 && totalLifes > 0 && playing == 1) {
        //voor de emoji kan bewegen moet het zich binnen de randen bevinden, het aantal levens mag niet 0 zijn en er moet gespeeld worden
        leftEmoji = leftEmoji + 37; //verspring steeds met 37 pixels
        emoji.style.left = leftEmoji + "px"; //pixels worden toegevoegd aan de emoji
      } else {
      }
      break;
  }
}

function collision(x1, y1, w1, h1, x2, y2, w2, h2) {
  //collision functie dat gebruikt moet worden
  if (
    x1 + w1 - 1 < x2 ||
    x2 + w2 - 1 < x1 ||
    y1 + h1 - 1 < y2 ||
    y2 + h2 - 1 < y1
  ) {
    return false;
  } else {
    return true;
  }
}

function stop() {
  localStorage.setItem("highscore", totalScore);
  //functie om game te stoppen
  if (totalLifes <= 0) {
    //als het aantal levels 0 is wordt de game stopt
    gameOver.style.top = 0 + "px"; //game over img komt naar beneden
    document.querySelector(".playAgain").style.display = "block"; //play again button wordt zichtbaar
    document.querySelector(".gameOverScore").style.display = "block"; //totale score wordt zichtbaar
    document.querySelector(".gameOverText").style.display = "block"; //score text wordt zichtbaar
    if (totalScore > highscore) {
      document.querySelector(".gameOverText").innerHTML = "HIGHSCORE!"; //score text wordt zichtbaar
    }
    document.querySelector(".gameOverScore").innerHTML = totalScore; //totale score wordt aangepast
    clearInterval(virusTimer); //stopt virus 1
    clearInterval(virus2Timer); //stopt virus 2
    clearInterval(soapTimer); //stopt zeepfles
    clearInterval(toiletPaperTimer); //stopt toiletpapier
    document.querySelector(".score").style.visibility = "hidden"; //score (linksboven) verdwijnt
    document.querySelector(".highscore").style.visibility = "hidden"; //score (linksboven) verdwijnt
  } else {
  }
}
