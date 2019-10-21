$(window).on("load",function(){
    $('#start-btn').on('click',startGame)
    
})
var game ={

    //questions, options and correct answer bank
    questions = [
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
                {text: 'Dan Marino', correct: false },
                {text: 'Phil Sims', correct: false},
                {text: 'John Madden', correct: true},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Who was the 1st overall pick in the 2009 NFL Draft?',
            answer: [
                {text: 'Dan Marino', correct: false},
                {text: 'Phil Sims', correct: false},
                {text: 'Matthew Stafford', correct: true},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Which team finished the 2008 NFL season with the dubious record of 0-16?',
            answer: [
                {text: 'Dan Marino', correct: false },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'Detroit Lions', correct: true}
            ]
        },
        {
            question:'At the start of the 2005 NFL season, the horse collar tackle was banned. Which player significantly used this tackle the season before?',
            answer: [
                {text: 'Dan Marino', correct: false},
                {text: 'Roy Williams', correct: true},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Who was the 2004 NFL Comeback Player of the Year?',
            answer: [
                {text: 'Drew Brees', correct: true },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Who was the 1st overall pick in the 2001 NFL Draft?',
            answer: [
                {text: 'Dan Marino', correct: false },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'Michael Vick', correct: true}
            ]
        },
        {
            question:'What NFL Player retired during halftime of a football game?',
            answer: [
                {text: 'Dan Marino', correct: false },
                {text: 'Phil Sims', correct: false},
                {text: 'Vontae Davis', correct: true},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'In what year was the first "Madden NFL" game released?',
            answer: [
                {text: '1988', correct: true },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Which NFL team has the most consecutive Super Bowl appearances?',
            answer: [
                {text: 'Buffalo Bills', correct: true },
                {text: 'Phil Sims', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'What is the only NFL team that won the Super Bowl with a perfect season?',
            answer: [
                {text: 'Dan Marino', correct: false },
                {text: 'Miami Dolphins', correct: true},
                {text: 'Bob Griese', correct: false},
                {text: 'John Stamos', correct: false}
            ]
        },
        {
            question:'Who won the MVP in 2015?',
            answer: [
                {text: 'Dan Marino', correct: false },
                {text: 'Drew Brees', correct: false},
                {text: 'Bob Griese', correct: false},
                {text: 'Cam Newton', correct: true}
            ]
        },
    
    ],

    startGame: function (){
         //hide start button
         $('#start-btn').hide();

        //show question section, finish button and timer
        $('.questions-container').remove(".hide");
        $('.controls').remove('.hide');

       

        
        //display 1st question
        shuffleQuestion = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        setNextQuestion()
    }
    //start timer
    var 
    $('#clock') = 60000;
    clockRunning: function(){
        intervalId = setInterval(function(){
            clock--;
        })
    }

}
var clockTime = 60000;
var intervalId;
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
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();

setTimeout()

    

    