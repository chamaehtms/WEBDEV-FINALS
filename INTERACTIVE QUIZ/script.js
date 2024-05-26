const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "When did Facebook first launch?", answer: "2004" },
    { question: "What is the furthest planet from the sun?", answer: "neptune" },
      { question: "Who painted the Mona Lisa?", answer: "leonardo da vinci" },
      { question: "Where is the largest bowling center located?", answer: "japan"}
   
  ];
  
  let currentQuestion = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        alert("Congratulations! You completed the quiz.");
        currentQuestion = 0; // Resetting for potential future attempts
        displayQuestion();
      }
    } else {
      alert("Wrong answer. Try again!");
      currentQuestion = 0; // Restart the quiz if the answer is wrong
      displayQuestion();
    }
  }
  
  // Initial question display
  displayQuestion();