var songs = ["Fanfare","Here Comes Carolina","Tar Heels On Hand","Tag","Carolina Victory", "Vamp", "Cheer One", "Cheer Three", "Number Twelve", "Sweet Caroline", "Carolina In My Mind", "Hark The Sound", "Star Spangled Banner", "Blue And White", "Paint It Black", "Cadence", "Everybodys Everything", "North Carolina", "Carolina Fight Song", "Raise Up", "Bring It", "Phantom", "Carmina Burana", "O Fortuna", "Iron Man", "Starships", "Imperial March"];
var triesLeft;
var guessed = [];
var word = "";
var blanks = "";
var blanksArr = [];
var wordArr = [];
var lost = false;
function update(){
	blanks="";
	for(var i=0; i<blanksArr.length; i++){
		blanks=blanks + blanksArr[i];
	}
	document.getElementById("blanks").innerHTML=blanks;
	document.getElementById("guessed").innerHTML="Wrong Guesses: " +guessed;
	document.getElementById("guessesLeft").innerHTML="Guesses Left: " + triesLeft;

}
//reset = document.getElementById("reset");
document.getElementById("reset").onclick =function(){
	console.log("test");
	lost = false;
	triesLeft =7;
	guessed = [];
	word = songs[Math.floor(Math.random()*songs.length)].toUpperCase();
	wordArr = word.split("");
	blanks = "";
	blanksArr = [];
	for(var i=0;i<word.length;i++){
		if(word.charAt(i) == " "){
			blanksArr.push(" ");
		}
		else{blanksArr.push("_");}
	}
	update();
	
}
document.onkeyup =function(event){
	if(!lost){
		var guess = String.fromCharCode(event.keyCode).toUpperCase();
		var inWord= false;
		for(i=0; i<blanksArr.length; i++){
			//console.log(guess, wordArr[i]);
			if(wordArr[i]==guess){
				//console.log("true");
				blanksArr[i]=guess;
				inWord = true;
			}
		}
		if(!inWord){
			triesLeft--;
			guessed.push(guess);
		}
		if(wordArr.toString()==blanksArr.toString()){
			update();
			alert("You win!");
		}
	}
	if(triesLeft<=0){
		lost = true;
		alert("You lose!");
	}
update();
}

