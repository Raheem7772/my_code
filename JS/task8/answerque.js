let questionsFormE1=document.getElementById("questionsForm");
let resultMsgE1=document.getElementById("resultMsg");
let cityHyderabadE1=document.getElementById("cityHyderabad");
let cityChennaiE1=document.getElementById("cityChennai");
let cityDelhiE1=document.getElementById("cityDelhi");
let cityMumbai1=document.getElementById("cityMumbai");

function handleSubmit(event) {
    event.preventDefault();    
    let answer=[cityHyderabadE1.value,cityChennaiE1.value,cityDelhiE1.value,cityMumbai1.value];
    //let answerE1=cityHyderabadE1.value
    if(answer.textContent==="Hyderabad"){
        resultMsgE1.textContent="wrong answer";
    }else if(answer.textContent==="Chennai"){
        resultMsgE1.textContent="wrong answer";
    }else if(answer.textContent==="Delhi"){
        resultMsgE1.textContent="correct answer";
    }else if(answer.textContent==="Mumbai"){
        resultMsgE1.textContent="wrong answer";
    }
    
}
questionsFormE1.addEventListener("submit",handleSubmit);



/*
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission from refreshing the page

      // Get the user's question from the input field
      const questionInput = document.getElementById('question');
      const question = questionInput.value;

      // Process the question and get the answer (replace this with your actual answer logic)
      const answer = getAnswer(question);

      // Display the answer in the answerContainer
      const answerContainer = document.getElementById('answerContainer');
      answerContainer.innerHTML = `<p><strong>Your Question:</strong> ${question}</p><p><strong>Answer:</strong> ${answer}</p>`;

      // Clear the input field after displaying the answer
      questionInput.value = '';
    }

    // Function to get the answer (Replace this with your actual logic to answer the questions)
    function getAnswer(question) {
      // Replace this with your actual logic to process the question and get the answer
      // For example, you can use if-else statements or switch-case to handle different questions and provide respective answers.
      // For simplicity, let's just return a hardcoded answer.
      return 'This is a sample answer. Replace it with your real answer logic.';
    }

    // Add event listener to the form submit event
    const questionForm = document.getElementById('questionForm');
    questionForm.addEventListener('submit', handleSubmit);
*/