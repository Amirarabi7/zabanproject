function checkAnswers() {
 
  var questions = document.querySelectorAll('.question');
  var correctAnswers = 0; 
  var totalQuestions = questions.length; 

  
  questions.forEach(function(question, index) {
    var correctAnswer = question.getAttribute('data-correct-answer'); 
    var userAnswer = '';

  
    var radioButtons = question.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
      userAnswer = radioButtons[0].value;
    }

    
    var textInput = question.querySelector('input[type="text"]');
    if (textInput && textInput.value.trim()) {
      userAnswer = textInput.value.trim().toLowerCase();
    }

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      correctAnswers++; 
      question.style.color = 'green'; 
    } else {
      question.style.color = 'red'; 

      
      if (textInput) {
        var correctAnswerText = document.createElement('span');
        correctAnswerText.textContent = ` (Correct: ${correctAnswer})`;
        correctAnswerText.style.color = 'green';
        textInput.parentElement.appendChild(correctAnswerText);
      } else if (radioButtons.length > 0) {
        
        var options = question.querySelectorAll('input[type="radio"]');
        options.forEach(function(option) {
          if (option.value.toLowerCase() === correctAnswer.toLowerCase()) {
            option.parentElement.style.color = 'green';
          }
        });
      }
    }
  });

  
  var resultMessage = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;
  var result = document.createElement('div');
  result.textContent = resultMessage;
  result.style.fontSize = '20px';
  result.style.fontWeight = 'bold';
  result.style.marginTop = '20px';
  result.style.color = 'blue';
  

  document.querySelector('form').appendChild(result);
}
