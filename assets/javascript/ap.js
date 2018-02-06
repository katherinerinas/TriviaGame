$(document).ready(function() {
	$(".answerchoice").hide();
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$(".timer").html("<h3>" +  this.time  +  " so...don't wig out...but...</h3>");
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				

			if (countdownTimer.time >= 0) {
				$(".timer").html("<h3>"    +   countdownTimer.time  +     "So...don't wig out, but..</h3>");
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'In what year did Music Television (MTV) first launch?',
	possibleAnswers : ['A. 1983',
				 'B. 1987',
				 'C. 1981',
				 'D. 1989'],
	flags : [false, false, true, false],
	answer : 'C. 1981'
};

var q2 = {
	question: 'Who was the President of the United States in 1980?',
	possibleAnswers: ['A. Richard Nixon',
				 'B. Ronald Reagan',
				 'C. Teddy Rosevelt',
				 'D. George H.W. Bush'],
	flags : [false, true, false, false],
	answer : 'B. Ronald Reagan'
};

var q3 = {
	question : 'What was the first music video?',
	possibleAnswers : ['A. Material Girl ',
				 'B. Video Killed the Radio Star',
				 'C. Vogue',
				 'D. Take On Me'],
	flags : [false, true, false, false],
	answer : 'B. Video Killed the Radio Star'
};

var q4 = {
	question : 'What arcade game was released in 1980? ',
	possibleAnswers : ['A. Pac-Man',
				 'B. Pong',
				 'C. Space Invaders',
				 'D. Galaxian'],
	flags : [true, false, false, false],
	answer : 'A. Pac-Man'
};

var q5 = {
	question : 'Which of these Disney movies was released in the 80s?',
	possibleAnswers : ['A. Aladdin',
				 'B. The Little Mermaid',
				 'C. Snow White',
				 'D. Beauty and the Beast'],
	flags : [false, true, false, false],
	answer : 'B. The Little Mermaid'
};

var q6 = {
	question : 'Which of these shows would not have been found in the 80s?',
	possibleAnswers : ['A. Welcome Back, Kotter',
				 'B. The Cosby Show',
				 'C. The Jeffersons',
				 'D. The Golden Girls'],
	flags : [true, false, false, false],
	answer : 'A. All That'
};

var q7 = {
	question : 'Which movie stars Kim Cattrall and is about an artist who falls in love with a mannequin?',
	possibleAnswers : ['A. Ghostbusters',
				 'B. Top Gun',
				 'C. Mannequin',
				 'D. Stand by Me'],
	flags : [false, false, true, false],
	answer : 'C. Mannequin'
};

var q8 = {
	question : 'Which of these artists is NOT featured on The Goonies soundtrack?',
	possibleAnswers : ['A. Cindy Lauper',
				 'B Michael Bolton',
				 'C. REO Speedwagon',
				 'D. Luther Vandross'],
	flags : [false, true, false, false],
	answer : 'B. Michael Bolton'
};

var q9 = {
	question : 'Which of these is a Vampire movie?',
	possibleAnswers : ['A. Scarface',
				 'B. The Breakfast Club',
				 'C. Die Hard',
				 'D. The Lost Boys'],
	flags : [false, false, false, true],
	answer : 'D. The Lost Boys'
};

var q10 = {
	question : 'What Artist had Back-to-Back best selling albums in the 80s?',
	possibleAnswers : ['A. Whitney Houston',
				  'B. Michael Jackson',
				  'C. George Michael',
				  'D. Pink Floyd'],
	flags : [false, true, false, false],
	answer : 'B. Michael Jackson'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}

function loadQuestion(questionSelection) {
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Tubular!");
	
}

function answerWrong() {
	wrong++;
	alert("Bummer!");
	
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>You got " + correct + " right- Clutch!</p></h2>");
	$('.question').append("<h2><p>You got " + wrong +  " wrong-What's your Damage?</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
function reBoot(){
	$('.question').append("<button id=resetbutton>Redeem Yourself!</button>");
	$("#resetbutton").on("click", setup);
	
}
setup();
$('.answerchoice').on('click', function() {

 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 	reBoot();

    
 }
});

});	


