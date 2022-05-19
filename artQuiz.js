// Variable with the html to change

const questionsBalise = `
    <div class="question">Question</div>
        <div class="choices">
            <input type="checkbox" class="choice" id="choice1">
            <label for="choice1" id="choice1-text">Answer</label></br>
            <input type="checkbox" class="choice" id="choice2">
            <label for="choice2" id="choice2-text">Answer</label></br>
            <input type="checkbox" class="choice" id="choice3">
            <label for="choice3" id="choice3-text">Answer</label></br>
            <input type="checkbox" class="choice" id="choice4">
            <label for="choice4" id="choice4-text"></label<></br>
        </div>
    <input type="submit" class="submit" value="Confirmer" onclick="checkResponse()"/>
    <input type="submit" class="next" value="Question Suivante" onclick="valueRendering()"/>`;

// Variable to set the current question and answers
let questionNum = 1;

// Setting the values to the document

const valueRendering = () => {
    // Change the html file
    let container = document.querySelector('.container');
    container.innerHTML = questionsBalise;

    // List of the questions
    let questions = {
        1: "Question 1",
        2: "Question 2",
        3: "Question 3"
    };

    // Lists of the answers
    let answers = {
        1: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        2: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        3: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        4: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    };


    // Variables to change the values of the differents components
    let currentQuestion = document.querySelector('.question');
    let choice1 = document.querySelector('#choice1-text');
    let choice2 = document.querySelector('#choice2-text');
    let choice3 = document.querySelector('#choice3-text');
    let choice4 = document.querySelector('#choice4-text');

    

    // Settings the values of the differents components
    currentQuestion.textContent = questions[questionNum];
    choice1.textContent = answers[questionNum][0];
    choice2.textContent = answers[questionNum][1];
    choice3.textContent = answers[questionNum][2];
    choice4.textContent = answers[questionNum][3];

    questionNum+=1;
};

const checkResponse = () => {
    
    let choice1 = document.querySelector('#choice1');
    let choice2 = document.querySelector('#choice2');
    let choice3 = document.querySelector('#choice3');
    let choice4 = document.querySelector('#choice4');

    if (choice1.checked || choice2.checked || choice3.checked || choice4.checked) {
        let nextBtn = document.querySelector('.next');
        let checkBtn = document.querySelector('.submit');
        checkBtn.style.display = 'none';

        nextBtn.style.display = 'block';
    } else {
        alert('Veuillez choisir au moins une réponse.')
    };
};

    //Rendering for mode explanation
const modeExplaination = () => {
    let container = document.querySelector('.container');
    container.innerHTML = '<div class="title">Quiz en mode émission</div><div class="description">Pour ce mode, vous devrez définir deux équipes composées de 2 ou 3 joueurs de préférence ainsi qu\'un présentateur pour lire les questions et compter les points. Le présentateur aura un fichier avec toutes les questions et un écran pour afficher les scores de chaque équipe</div><a class="start" href="counters.html">Démarrer</a><a id="download-file" href="questions-art.txt" download="Questions.txt">Fichier avec les questions à poser</a>';
};