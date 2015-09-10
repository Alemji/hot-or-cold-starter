

//when the user guesses they get the option to start a new game
//newGame function
//You’ll need to write code that allows users to start a new game without making additional calls to the server. 
//Clicking “New Game” should trigger the JavaScript function that starts a new game



$(document).ready(function(){

	


	var answer = Math.floor(Math.random() *100);
//

	var clicker = 0;
	
	
	$("form").submit(function(e) {

		var guess = document.getElementById("userGuess").value,
		guessNum = parseInt(guess);
		var difference = Math.abs(guessNum - answer);

		e.preventDefault(); //prevent submit

		
		if (guessNum > 100 || guessNum < 1) {
			$(".text").val('')
			document.getElementById("feedback").innerHTML = "You must pick a number between 1 and 100!"

			return;}

		if (!isNaN(guessNum)) { 
			$('.guessBox').append("<li>"+ $("input[type='text']").val() + "</li>");
			$(".text").val('');
	
			clicker++; //update count  
			document.getElementById("count").innerHTML = clicker;
		}
			//change placeholder for these cases and dont update count and guess
			else if (isNaN(guessNum)) {
				$(".text").val('');
				document.getElementById("feedback").innerHTML = "You must pick a number!";
			}

					

		if (guessNum==answer) {
			document.getElementById("feedback").innerHTML = "Correct!";
		}
			else if (difference > 50) {
				document.getElementById("feedback").innerHTML = "Ice Cold!";
			}
			else if (difference > 30 && difference <= 50) {
				document.getElementById("feedback").innerHTML = "Cold!";	
			}
			
			else if (difference > 20 && difference <= 30) {
				document.getElementById("feedback").innerHTML = "Warm!";	
			}
			else if (difference > 10 && difference <= 20) {
				document.getElementById("feedback").innerHTML = "hot!";	
			}
			else if (difference >= 1 && difference <= 10) {
				document.getElementById("feedback").innerHTML = "Very hot!";	
			}
	


	

		
		
		

	});



	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


