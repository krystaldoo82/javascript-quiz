function submitAnswers(){
	var total = 5;
	var score = 0;

	// get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// validation

	for(i = 1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ""){
			alert("You haven't filled out question " + i);
			return false;
		}
	}

	// Set Correct Answers
	var answers = ["b", "a", "d", "b", "d"];

	// Check answers
	for(i = 1; i <= total; i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	// display results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span>!</h3>'; 
	

// not really saving results so you put return false
	return false;
}