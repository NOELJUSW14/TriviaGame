//questions, options and correct answer bank
var questions= [
        {
            question: 'Which famous Miami Dolphins quarterback retired in 2000?',
            answer: [
                {text: 'Dan Marino', correct: true },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'What sportscaster posted an NFL coaching record of 103-22-7?',
            answer: [
                {text: 'Al Michaels', correct: false },
                {text: 'Marv Albert', correct: false},
                {text: 'John Madden', correct: true},
                {text: 'Stuart Scott', correct: false}
            ]
        },
        {
            question:'Who was the 1st overall pick in the 2009 NFL Draft?',
            answer: [
                {text: 'Mark Sanchez', correct: false},
                {text: 'Tim Tebow', correct: false},
                {text: 'Matthew Stafford', correct: true},
                {text: 'Eli Manning', correct: false}
            ]
        },
        {
            question:'Which team finished the 2008 NFL season with the dubious record of 0-16?',
            answer: [
                {text: 'Miami Dolpins', correct: false },
                {text: 'New York Giants', correct: false},
                {text: 'Cleveland Browns', correct: false},
                {text: 'Detroit Lions', correct: true}
            ]
        },
        {
            question:'At the start of the 2005 NFL season, the horse collar tackle was banned. Which player significantly used this tackle the season before?',
            answer: [
                {text: 'Rodney Harrison', correct: false},
                {text: 'Roy Williams', correct: true},
                {text: 'Vontaze Burfict', correct: false},
                {text: 'Ray Lewis', correct: false}
            ]
        },
        {
            question:'Who was the 2004 NFL Comeback Player of the Year?',
            answer: [
                {text: 'Drew Brees', correct: true },
                {text: 'Tom Brady', correct: false},
                {text: 'Eli Manning', correct: false},
                {text: 'Big Ben Roethlisberger', correct: false}
            ]
        },
        {
            question:'Who was the 1st overall pick in the 2001 NFL Draft?',
            answer: [
                {text: 'Donovan McNabb', correct: false },
                {text: 'Josh Booty', correct: false},
                {text: 'David Carr', correct: false},
                {text: 'Michael Vick', correct: true}
            ]
        },
        {
            question:'What NFL Player retired during halftime of a football game?',
            answer: [
                {text: 'JaMarcus Russell', correct: false },
                {text: 'Johnny Manziel', correct: false},
                {text: 'Vontae Davis', correct: true},
                {text: 'Ryan Leaf', correct: false}
            ]
        },
        {
            question:'In what year was the first "Madden NFL" game released?',
            answer: [
                {text: '1988', correct: true },
                {text: '1992', correct: false},
                {text: '1999', correct: false},
                {text: '2001', correct: false}
            ]
        },
        {
            question:'Which NFL team has the most consecutive Super Bowl appearances?',
            answer: [
                {text: 'Buffalo Bills', correct: true },
                {text: 'New York Jets', correct: false},
                {text: 'Jacksonville Jaguars', correct: false},
                {text: 'New England Patriots', correct: false}
            ]
        },
        {
            question:'What is the only NFL team that won the Super Bowl with a perfect season?',
            answer: [
                {text: 'Baltimore Ravens', correct: false },
                {text: 'Miami Dolphins', correct: true},
                {text: 'San Francisco 49ers', correct: false},
                {text: 'Pittsburgh Steelers', correct: false}
            ]
        },
        {
            question:'Who won the MVP in 2015?',
            answer: [
                {text: 'Marlon Mack', correct: false },
                {text: 'Drew Brees', correct: false},
                {text: 'Tom Brady', correct: false},
                {text: 'Cam Newton', correct: true}
            ]
        },
    
    ]
   
let shuffleQuestion = Math.floor(Math.random() * questions.length);
let currentQuestion = questions[shuffleQuestion];
         

//display 1st question at random
var trivia = function(){
    currentQuestion = $('#questions-display');
    if (currentQuestion.answer == true){
        $('#answer') = currentQuestion.answer
    }
}

//click start button
$(window).on("load",function(){
    $('.start-btn').on('click',startGame)
    
})
let startGame = function (){
    //hide start button
    $('.start-btn').hide();

    //show question section, finish button and timer
    $('#questions-container').show();
    $('#controls').show();
    $('#timer').show()
    $('#clock').show()
    setNextQuestion()
}
let questionsIndex = 0;
var correctCount = 0;
var wrongCount = 0;    
//start timer
var clockTime = 10;
var intervalId;

let setNextQuestion = function(){
    $('#answer-buttons').empty();
    var currentQuestion = questions[questionsIndex]
    $('#question-display').text(currentQuestion.question)
    clockTime = 10;
    intervalId = setInterval(function(){
        if(clockTime > 0){
            $('#clock').text(clockTime);
            clockTime--
        } else{
            clearInterval(intervalId)
            setNextQuestion()
        }
    }, 1000)
    for(var i = 0; i< currentQuestion.answer.length; i++){
        var answerObject = currentQuestion.answer[i];
        $('<button>').text(answerObject.text).addClass("btn").attr("data-correct",answerObject.correct).appendTo('#answer-buttons').on('click',function(){
            console.log($(this).attr('data-correct'))
            if($(this).attr('data-correct') === "true"){
                correctCount++
            } else{
                console.log('wrong')
                wrongCount++
            }
            clearInterval(intervalId)
            questionsIndex++
            setNextQuestion()
        })

    }
}




//setNextQuestion()

        

// let shuffleQuestion = Math.floor(Math.random()* questions.length)
// let currentQuestionIndex = questions[shuffleQuestion];

//document.readyState(function(){
 //   $('#start-btn').on('click',startGame)
//})
    




//     shuffleQuestion = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     setNextQuestion()
  
// }

// let setNextQuestion = function(){
//     showQuestion(shuffleQuestion[currentQuestionIndex])
// }
// function showQuestion(questions){
//     questionElement.innerText = questions.question

//}





// function selectAnswer(){}



//start variables

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 60000);
}
  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    clockTime--;

    //  Show the number in the #show-number tag.
    $("#clock").html("<h2>" + clockTime + "</h2>");


    //  Once number hits zero...
    if (clockTime === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    clearInterval(intervalId);
  }

  //  Execute the run function.

 
   
//timer will begin once start game is clicked
// function run(){
//    clearInterval(intervalId);
//    //create timer (1 minute)
//    intervalId =  setInterval(decrement,60000)
//    }
//     //initiate timer once start game is clicked
//    function decrement (){
//     number--;
   
//    //display timer
//   $('#timer').html('<h2>'+ number + '<h2>')
   
//    //  Once number hits zero...
//    if (number === 0) {

//     //  ...run the stop function.
//     stop();

//     //  Alert the user that time is up.
//     alert("Time Up!");
//   }
// }

// //  The stop function
// function stop() {

//   //  Clears our intervalId
//   //  We just pass the name of the interval
//   //  to the clearInterval function.
//   clearInterval(intervalId);
// }

// //  Execute the run function.
// run();
