 /*   const questions = [
        {
            question: "What excites you the most about coding?",
            answers: [
                {text: "Designing stunning interfaces"}
            ]
        }
    ]
*/

// let questions;





const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

const questions = [
    {question: "What excites you the most about coding?", 
    answers: [
        {text: "Designing stunning interfaces", type: "A"},
        {text: "Solving complex algorithms", type: "B"},
        {text: "Building complete projects from scratch", type: "C"},
        {text: "Debugging until everything is perfect", type: "D"},
            ]
    },
    {question: "Your favorite part of a website is...", 
    answers: [
        {text: "The visuals and animations", type: "A"},
        {text: "The backend magic", type: "B"},
        {text: "How the front and back work together", type: "C"},
        {text: "That everything runs without errors", type: "D"},
            ]
    },
    {question: "What’s your ideal coding playlist?", 
    answers: [
        {text: "Lo-fi aesthetic vibes", type: "A"},
        {text: "Silence or white noise", type: "B"},
        {text: "A mix of everything", type: "C"},
        {text: "Anything that helps me focus while debugging", type: "D"},
            ]
    },
    {question: "You have an hour to learn something new, what do you pick?", 
    answers: [
        {text: "CSS animations", type: "A"},
        {text: "Advanced algorithms", type: "B"},
        {text: "A new full-stack framewor", type: "C"},
        {text: "Regex tricks", type: "D"},
            ]
    },
    {question: "What’s your favorite coding quote?", 
    answers: [
        {text: "Design is intelligence made visible", type: "A"},
        {text: "Programs must be written for people to read", type: "B"},
        {text: "The best code is no code at all", type: "C"},
        {text: "It’s not a bug, it’s a feature!", type: "D"},
            ]
    },
    {question: "If coding were a game, what’s your role?", 
    answers: [
        {text: "The designer creating beautiful maps", type: "A"},
        {text: "The strategist planning the perfect move", type: "B"},
        {text: "The player who does it all", type: "C"},
        {text: "The fixer who patches every glitch", type: "D"},
            ]
    },
    {question: "Which project sounds most fun?", 
    answers: [
        {text: "A stunning animated portfolio", type: "A"},
        {text: "An AI chatbot", type: "B"},
        {text: "A social media app", type: "C"},
        {text: "A bug-fixing challenge", type: "D"},
            ]
    },
    {question: "Your favorite part of a website is...", 
    answers: [
        {text: "The visuals and animations", type: "A"},
        {text: "The backend magic", type: "B"},
        {text: "How the front and back work together", type: "C"},
        {text: "That everything runs without errors", type: "D"},
            ]
    },
    {question: "What’s your debugging style?", 
    answers: [
        {text: "Make it look better and it’ll work", type: "A"},
        {text: "Trace every line logically", type: "B"},
        {text: "Fix as I build", type: "C"},
        {text: "Destroy the bug at all costs.", type: "D"},
            ]
    },
    {question: "How do you feel about regex?", 
    answers: [
        {text: "Ugh, too technical for me", type: "A"},
        {text: "Regex is power", type: "B"},
        {text: "I’ll use it if I need to", type: "C"},
        {text: "I breathe regex.", type: "D"},
            ]
    },
    {question: "Your dream coding setup includes…", 
    answers: [
        {text: "A big colorful monitor and fancy keyboard", type: "A"},
        {text: "A dark terminal and blazing fast laptop", type: "B"},
        {text: "A balance of everything", type: "C"},
        {text: "Debugging tools everywhere ", type: "D"},
            ]
    },
    {question: "Your go-to coding snack?", 
    answers: [
        {text: "Aesthetic coffee & croissant", type: "A"},
        {text: "Energy drink", type: "B"},
        {text: "Anything quick and filling like eggs", type: "C"},
        {text: "Nothing, I’m deep in the code", type: "D"},
            ]
    },
    {question: "Which word best describes your coding style?", 
    answers: [
        {text: "Artistic", type: "A"},
        {text: "Analytical", type: "B"},
        {text: "Balanced", type: "C"},
        {text: "Persistent", type: "D"},
            ]
    },
    {question: "If coding was a superhero power, yours would be…", 
    answers: [
        {text: "UI Vision", type: "A"},
        {text: "Logic Beam", type: "B"},
        {text: "Full-Stack Force", type: "C"},
        {text: "Bug Slayer", type: "D"},
            ]
    },
    {question: "How do you feel when you finish a project?", 
    answers: [
        {text: "It looks amazing", type: "A"},
        {text: "The logic is solid", type: "B"},
        {text: "Everything works together perfectly.", type: "C"},
        {text: "No bugs left. Victory!", type: "D"},
            ]
    }
];


const results = {
    A: "🎨 You’re a Creative Developer! You love designing stunning UIs and bringing ideas to life visually.",
    B: "🧩 You’re a Problem Solver! You thrive on solving complex algorithms and logical challenges.",
    C: "🚀 You’re a Builder! You enjoy starting projects from scratch and seeing them grow into something big.",
    D: "🔧 You’re a Debugger! You’re patient and meticulous, fixing bugs until everything runs perfectly."
};




let score = { A: 0, B: 0, C: 0, D: 0 };
// userAnswers = [];
let selectedAnswer = null;
let currentQuestionIndex = 0;
// let answered = false;
let introMode = true;


function showIntro() {
    // questionElement.innerHTML = "Developer's Personality Quiz";
    questionElement = document.getElementById("head-h1");
    // answerButton.innerHTML = "<p>Find out what kind of developer you are</p><p>This is only fictional, don't take anything personal</p>";
    answerButton = document.getElementById("head-p");
    nextButton = document.getElementById("next-btn")
    // nextButton.innerHTML = "Next";
    introMode = true;
}





function startQuiz(){
    currentQuestionIndex = 0;
    score = { A: 0, B: 0, C: 0, D: 0 };
    // answered = false;
    introMode = false;
    selectedAnswer = null;
    // nextButton.innerHTML = "Next";
    // nextButton.onclick = handleNext;
    // showQuestion();

    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = "";
    selectedAnswer = null;
  
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("buttons");
  
      button.addEventListener("click", () => {
        // mark selected
        selectedAnswer = answer.type;
  
        // remove highlight from others
        document.querySelectorAll("#answer-btns button").forEach(btn => {
          btn.classList.remove("clicked");
        });
        button.classList.add("clicked");
      });
  
      answerButton.appendChild(button);
    });
}


//
//
/*
function showQuestion() {
    // clear old answers
    answerButton.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("buttons");

        // when clicked → store answer type
        button.addEventListener("click", () => {
            score[answer.type]++;
            userAnswers.push(answer.type);

            // highlight selected button
            const buttons = document.querySelectorAll("#answer-btns button");
            buttons.forEach(btn => btn.classList.remove("clicked"));
            button.classList.add("clicked");
        });

        answerButton.appendChild(button);
    });

    // Next button always visible
    nextButton.style.display = "block";
}
*/
//
//
//
/*
function showQuestion() {
    answered = false;
    answerButton.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("buttons");

        button.addEventListener("click", () => {
            score[answer.type]++;
            userAnswers.push(answer.type);
            answered = true;

            // highlight choice
            const buttons = document.querySelectorAll("#answer-btns button");
            buttons.forEach(btn => btn.classList.remove("clicked"));
            button.classList.add("clicked");
        });

        answerButton.appendChild(button);
    });
}
*/
//
//
//
/*
function selectAnswer(type) {
    // add score for the selected type
    score[type]++;

    // store the answer (optional, in case you want review later)
    userAnswers.push(type);
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        // nextButton.style.display = "none"; 
    } else {
        showResult(); 
    }
});
*/



/*
function showResult(){
    let finalType = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    questionElement.innerHTML = "Your Developer Personality";
    answerButton.innerHTML = results[finalType]; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}
*/




/*
function showResult() {
    let finalType = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    questionElement.innerHTML = "Your Developer Personality";
    answerButton.innerHTML = results[finalType]; 

    nextButton.innerHTML = "Play Again";
    nextButton.onclick = startQuiz; 
}
*/

nextButton.onclick = () => {

    if (introMode) {
        // ✅ On intro, no validation
        startQuiz();
        return;
    }


    if (selectedAnswer === null) {
      // vibrate + red border
      document.querySelector(".quiz").classList.add("error");
      setTimeout(() => {
        document.querySelector(".quiz").classList.remove("error");
      }, 500);
      return; // stop here
    }
  
    // update score
    score[selectedAnswer]++;
  
    // go next or show result
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
};


function showResult() {
    let finalType = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    questionElement.innerHTML = "Your Developer Personality";
    answerButton.innerHTML = `<p>${results[finalType]}</p>`;
    
    nextButton.innerHTML = "Replay";
    nextButton.onclick = startQuiz; // replace old click
  }


showIntro();