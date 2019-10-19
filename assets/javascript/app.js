//***trivia game
//start game
    var number = 1000
   var intervalId;
//start game landing page
 //click start button
        
 $('#startGame').on('click',run)
   
//timer will begin once start game is clicked
function run(){
   clearInterval(intervalId);
   //create timer (1 minute)
   intervalId =  setInterval(decrement,60000)
   }
    //initiate timer once start game is clicked
   function decrement (){
    number--;
   
   //display timer
  $('#timer').html('<h2>'+ number + '<h2>')
   
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
    
 

//create question bank
var questions = [
    'In American Football which famous Miami Dolphins quarterback retired in 2000?',
    'What sportscaster posted an NFL coaching record of 103-22-7?',
    'Who was the 1st overall pick in the 2009 NFL Draft?',
    'Which team finished the 2008 NFL season with the dubious record of 0-16?',
    'At the start of the 2005 NFL season, the horse collar tackle was banned. Which player significantly used this tackle the season before?',
    'Who was the 2004 NFL Comeback Player of the Year?',
    'Who was the 1st overall pick in the 2001 NFL Draft?',
    'What NFL Player retired during halftime of a football game?',
    'In what year was the first "Madden NFL" game released?',
    'Which NFL team has the most consecutive Super Bowl appearances?',
    'What is the only NFL team that won the Super Bowl with a perfect season?',
    'Who won the MVP in 2015?',

];
//answer each question 
var answers = [
    'Dan Marino',
        'John Madden',
        'Matthew Stafford',
        'Detroit Lions',
        'Roy Williams',
        'Drew Brees',
        'Michael Vick',
        'Vontae Davis',
        '1988',
        'Buffalo Bills',
       'Miami Dolphins',
        'Cam Newton',

]
        
//create question answers and options



//display questions
//diplay questions in random order
    // var randomQuestions = function(questions){
    //     for(var i = 0; i < randomQuestions.length; i++)
        
    // }
    //reset game / random questions 

    //link questions to answers
    //create dot/checkbox selector for questions
//tally write and wrong questions
    //create function to tally score
    //display score
//reveal percentage score of ratio score
    //final page revealed 
    //reset 