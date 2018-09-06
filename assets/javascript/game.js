$(document).ready(function() {
        //VARIABLES
        var crystalBlue = getRandomInt (1, 12);
        var crystalGreen = getRandomInt (1, 12);
        var crystalRed = getRandomInt (1, 12);
        var crystalYellow = getRandomInt (1, 12);
        var targetScore = getRandomInt (19, 120);
        var playerScore = 0;
        var wins = 0;
        var losses = 0;

        //Returns a random integer between min (inclusive) and max (inclusive)
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        function processClick(value) {
            playerScore += value;
            $("#totalScore").text(playerScore);
            if (targetScore === playerScore) {
                wins++;
                $("#numberWins").text(wins);
                $(".textWinLost").text("You won");
                reset();
            } else if (targetScore < playerScore) {
                losses++;
                $("#numberLosses").text(losses);
                $(".textWinLost").text("You lost");
                reset();
            };
        }
        
        // Target Score
        $("#numberRandom").text(targetScore);

        updateField()
        // Click the image and add score to the user's score
        $("#blue").on("click", () => processClick(crystalBlue));
        $("#green").on("click", () => processClick(crystalGreen));
        $("#yellow").on("click", () => processClick(crystalYellow));
        $("#red").on("click", () => processClick(crystalRed));
    
        function reset() {
            crystalBlue = getRandomInt (1, 12);
            crystalGreen = getRandomInt (1, 12);
            crystalRed = getRandomInt (1, 12);
            crystalYellow = getRandomInt (1, 12);
            targetScore = getRandomInt (19, 120);
            playerScore = 0;
            $("#totalScore").text(playerScore);
            $("#numberRandom").text(targetScore);
            
        }

        function updateField () {
            $(".textWinLost").text("");
            
        }
    
    //Using jQuery to add the numbers to the images and the scores to the appropriate div
    // .val grabs value off elements or add values; add var crystal 1-4 to different images
    // click handler
    // add to player's score
    // each crystal has the same class "crystals" for eg.
    // when user click run the event handler
    // $(this).val() as .val is a method, no parametor: pull values from 'this'
    // after adding to player score, if the score match the target score
    // if match display message
    // check if the player score is higher than the target score, increment losses
    // if neither contidions are met, continue playing 
})

