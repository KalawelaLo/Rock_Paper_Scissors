
document.getElementsByClassName("r")[0].addEventListener("click", function() {
    playround("r");
});
document.getElementsByClassName("p")[0].addEventListener("click", function() {
    playround("p");
});
document.getElementsByClassName("s")[0].addEventListener("click", function() {
    playround("s");
});

let rounds = 0;
let wins = 0;
let loses = 0;
let ties = 0;
let round_loss = 0;
let round_win = 0;
let turns = 0;

function playround(player_choice){
    turns += 1;
    //Random function to determine computer's choice
    let choose = Math.random();
    let choice = "None";

    //Parses computer choice
    if (choose < 1.0/3.0) {
        choice = "r";
    } else if (choose < 2.0/3.0){
        choice = "p";
    } else {
        choice = "s";
    }

    //determine who wins
    if (player_choice == choice){
        ties += 1;
        winner_display("t");
    } else if (player_choice == "r"){
        if (choice == "p"){
            loses += 1;
            winner_display("c");
        } else {
            wins += 1;
            winner_display("p");
        }
    } else if (player_choice == "p") {
        if(choice == "s"){
            loses += 1;
            winner_display("c");
        } else {
            wins += 1;
            winner_display("p");
        }
    } else {
        if(choice == "r"){
            loses += 1;
            winner_display("c");
        } else {
            wins += 1;
            winner_display("p");
        }
    }
    if(turns == 4){
        turns = 0;
        rounds += 1;
        if (wins >= loses){
            round_win += 1;
        } else {
            round_loss +=1;
        }
        wins = ties = loses = 0;

    }
}

    function winner_display(winner) {
        let out = "None";
        if (winner == "t"){
            out = "There was a tie";
        } else if (winner == "p"){
            out = "The player won";  
        } else {
            out = "The computer won";
        }
        document.getElementsByClassName("w")[0].innerHTML = wins;
        document.getElementsByClassName("t")[0].innerHTML = ties;
        document.getElementsByClassName("l")[0].innerHTML = loses;
        document.getElementsByClassName("winner")[0].innerHTML = out;
        document.getElementsByClassName("round")[0].innerHTML = rounds + 1;
        document.getElementsByClassName("rw")[0].innerHTML = round_win;
        document.getElementsByClassName("rl")[0].innerHTML = round_loss;
    }


