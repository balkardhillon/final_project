// ==============Questions================================
let presentQuestion =0;
let questions=[{

"question":"What is 27+29? ",
"choice1":"67","choice2":"49","choice3":"56","choice4":"66",
"answer":"3"
},
{
	"question":"What is the answer if we  multiply 2 with any thing? ",
"choice1":"even","choice2":"odd","choice3":"prime","choice4":"All of the above",
"answer":"1"
},
{
	"question":"How much is 10-6? ",
"choice1":"6","choice2":"4","choice3":"5","choice4":"2",
"answer":"2"
},
{
	"question":"What is 27/3? ",
"choice1":"6","choice2":"9","choice3":"5","choice4":"19",
"answer":"2"
},
{
	"question":"What is 20-9? ",
"choice1":"11","choice2":"12","choice3":"5","choice4":"16",
"answer":"1"
}
]

let marksGained=0;
function get_quest (presQues){
	document.getElementById('question').textContent=(presQues + 1) +'.'+questions[presQues].question;
	document.getElementById('choice1').textContent = questions[presQues].choice1;
	document.getElementById('choice2').textContent = questions[presQues].choice2;
	document.getElementById('choice3').textContent = questions[presQues].choice3;
	document.getElementById('choice4').textContent = questions[presQues].choice4;
};
 function makeNextQuesReady() {
 	let choiceSelected=document.querySelector('input[type=radio]:checked');
 	if(!choiceSelected){
 		alert('No Answer Selected');
 		return;
 	}
let answer = choiceSelected.value;
if(questions[presentQuestion].answer == answer){
	marksGained++;
	document.getElementById('answer');
	// document.getElementById('correctans').innerHTML=questions[presentQuestion].answer;
}


 choiceSelected.checked= false;
 presentQuestion++;
 if(presentQuestion == questions.length - 1 ){
 	document.getElementById('nextButton').textContent= 'Finish-Submit';
 }



 if(presentQuestion == questions.length){
 // alert('Out of 5,your marksGained: '+ marksGained);
 //  		return;
 if(marksGained>=3){
	document.getElementById("quizcontainer").innerHTML="<h1>Congratulations You got "+marksGained+"/"+questions.length+"</h1>";
}else{
		document.getElementById("quizcontainer").innerHTML="<h1>Sorry you Fail <br>Try Again! <br>You got only "+marksGained+"/"+questions.length+"</h1>";

}



 }
get_quest(presentQuestion);

}
get_quest(presentQuestion);

// =========Timer=========================

let mm = 0;
	let ss = 60;
let mm2 = '0'+mm;
	let ss2 = ss;
	
let tmr = setInterval(function(){
		ss--;
		if(ss<=9) ss2 = '0'+ss; else ss2 = ss;
		if(mm<=9) mm2 = '0'+mm; else mm2 = mm;
		
		if(ss<=0){
			ss=60;
			mm--;
            if(mm<=0){
                clearInterval(tmr);
                alert('Time Out');
 		return;
            }
		}
		
		document.getElementById("timer").innerHTML = mm2+":"+ss2;
	}, 1000);













