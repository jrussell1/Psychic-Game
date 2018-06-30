//array with letters
var doubleLetter = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
//variables
var wordBank =['mets','dodgers','padres', 'yankees','cubs','phillies','rangers'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
function reset()
{
	//Choose word randombly
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//splits word into individual letters
	lettersInWord = choosenWord.split('');
	//figure out number of blanks
	numBlanks = lettersInWord.length;
	
	//RESET
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleLetter = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}
function startGame()
{
	//Chooses word
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//splits the word into individual letters
	lettersInWord = choosenWord.split('');
	//place blanks that are size of the word
	numBlanks = lettersInWord.length;
	
	//RESET
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleLetter = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	//Populate blanks
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}
	//change html
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}

function compareLetters(userKey)
{
//if user key hit is inside choosen word
				if(choosenWord.indexOf(userKey) > -1)
				{ 
					for(var i = 0; i < numBlanks; i++)
					{
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
				}
				//Wrong Keys
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
				}
			
			
		
}
function winLose()
{
	// when blanks = the right number correct letters
	if(rightGuessCounter === numBlanks)
	{
		//changes the win count 
		winCount++;
		//Change html win
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
	}
	else if(guessesLeft === 0)
	{
		//changes the loss count
		loseCount++;
		//Change html loss
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

//Initiates
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleLetter.length; i++)
	{	
		if(letterGuessed === doubleLetter[i] && test === true)
		{
			var spliceDword = doubleLetter.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + doubleLetter[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}