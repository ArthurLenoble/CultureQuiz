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

    console.log(questionNum);
    
    // Change the html file
    let container = document.querySelector('.container');
    container.innerHTML = questionsBalise;

    // List of the questions
    let questions = {
        1: "En quelle année est sorti Super Mario Bros. ?",
        2: "Question 2",
        3: "Question 3",
        4: "Question 4"
    };

    // Lists of the answers
    let answers = {
        1: ["1981", "1985", "1983", "1979"],
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

    
};


// Define the good choices for each question 

let goodAnswer = {
    1: 1,
    2: 0,
    3: 3,
    4: 2
};

let answerDescription = {
    1: '<p class="answer-description">Super Mario Bros. est sorti le 13 Septembre 1985 au Japon sur NES et Famicon et le 15 Mai 1987 en Europe.</p>',
    2: '<p "answer-description">Bla Bla</p>',
    3: '<p "answer-description">Bla Bla</p>',
    4: '<p "answer-description">Bla Bla</p>'
};

let result = "";

const checkResponse = () => {
    
    console.log("Checking...");

    let container = document.querySelector('.choices');

    let choice1 = document.querySelector('#choice1');
    let choice2 = document.querySelector('#choice2');
    let choice3 = document.querySelector('#choice3');
    let choice4 = document.querySelector('#choice4');


    // Checking if at least one choice is checked

    if (choice1.checked || choice2.checked || choice3.checked || choice4.checked) {
        console.log("Something checked");
        let nextBtn = document.querySelector('.next');
        let checkBtn = document.querySelector('.submit');
        checkBtn.style.display = 'none';

        nextBtn.style.display = 'block';
    } else {
        alert('Veuillez choisir au moins une réponse.');
        valueRendering();
        questionNum= questionNum-1;
    };
    
    console.log(`Question N.${questionNum}`);

    // Checking if this is the right or wrong

    console.log(`${goodAnswer[questionNum]}`);
    
    if (goodAnswer[questionNum] == 0) {
            if (choice1.checked) {
                if (choice2.checked || choice3.checked || choice4.checked) {
                    result = "<p class='choice-result'>Mauvaise réponse</p>";
                    console.log('Mauvaise réponse');
                } else {
                    result = '<p class="choice-result">Bonne réponse</p>';
                    console.log('Bonne réponse');
                };
            } else {
                result = "<p class='choice-result'>Mauvaise réponse</p>";
                console.log('Mauvaise réponse');
            };
        } else if (goodAnswer[questionNum] == 1) {
            if (choice2.checked) {
                if (choice1.checked || choice3.checked || choice4.checked) {
                result = "<p class='choice-result' >Mauvaise réponse</p>";
                console.log('Mauvaise réponse');
            } else {
                result = '<p class="choice-result">Bonne réponse</p>';
                console.log('Bonne réponse');
            };
        } else {
            result = "<p class='choice-result'>Mauvaise réponse</p>";
            console.log('Mauvaise réponse');
        };
    } else if (goodAnswer[questionNum] == 2) {
        if (choice3.checked) {
            if (choice2.checked || choice1.checked || choice4.checked) {
                result = "<p class='choice-result'>Mauvaise réponse</p>";
                console.log('Mauvaise réponse');
            } else {
                result = '<p class="choice-result">Bonne réponse</p>';
                console.log('Bonne réponse');
            };
        } else {
            result = "<p class='choice-result'>Mauvaise réponse</p>";
            console.log('Mauvaise réponse');
        };
    } else if (goodAnswer[questionNum] == 3) {
        if (choice4.checked) {
            if (choice2.checked || choice3.checked || choice1.checked) {
                result = "<p class='choice-result'>Mauvaise réponse</p>";
                console.log('Mauvaise réponse');
            } else {
                result = '<p class="choice-result">Bonne réponse</p>';
                console.log('Bonne réponse');
            };
        } else {
            result = "<p class='choice-result'>Mauvaise réponse</p>";
            console.log('Mauvaise réponse');
        };
    };
    // Printing result

    container.innerHTML = `${result}${answerDescription[questionNum]}`;

    result="";

    questionNum+=1;
};

    //Rendering for mode explanation
const modeExplaination = () => {
    let container = document.querySelector('.container');
    container.innerHTML = '<div class="title">Quiz en mode émission</div><div class="description">Pour ce mode, vous devrez définir deux équipes composées de 2 ou 3 joueurs de préférence ainsi qu\'un présentateur pour lire les questions et compter les points. Le présentateur aura un fichier avec toutes les questions et un écran pour afficher les scores de chaque équipe</div><a class="start" href="counters.html">Démarrer</a><a id="download-file" href="questions-ytb.txt" download="Questions.txt">Fichier avec les questions à poser</a>';
};