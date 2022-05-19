let team1_count = 0;
let team2_count = 0;
let team1_score = 0;
let team2_score = 0;

const minus_team1 = () => {
    team1_score = document.querySelector('#score_team_1');
    if (team1_count > 0) {
        console.log("-1");
        team1_count--;
        team1_score.textContent = team1_count;
    };
};
const plus_team1 = () => {
    team1_score = document.querySelector('#score_team_1');
    console.log("+1");
    team1_count++;
    team1_score.textContent = team1_count;
};

const minus_team2 = () => {
    team2_score = document.querySelector('#score_team_2');
    if (team2_count > 0) {
        console.log("-1");
        team2_count--;
        team2_score.textContent = team2_count;
    };
};
const plus_team2 = () => {
    team2_score = document.querySelector('#score_team_2');
    console.log("+1");
    team2_count++;
    team2_score.textContent = team2_count;
};