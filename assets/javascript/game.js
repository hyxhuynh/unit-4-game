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

        // Target Score
        $("#numberRandom").text(targetScore);

        // FUNCTIONS
        // Returns a random integer between min (inclusive) and max (inclusive)
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        

        // This function is used later when clicking on the images. Depending on which image clicked, random score from that image will add onto the player's score. 
        // Depending on the player's score, it will display either "You won" or "You lost"
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
        
        // Reset function to refresh random numbers for crystals and target score, and player's score
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

        // Clear "You won" or "You lost" text for a new game
        function updateField () {
            $(".textWinLost").text("");   
        }

        // EVENT LISTENERS

        // Clear "You won" or "You lost" text for a new game
        updateField()
        // Click the image and add score to the user's score
        $("#blue").on("click", () => processClick(crystalBlue));
        $("#green").on("click", () => processClick(crystalGreen));
        $("#yellow").on("click", () => processClick(crystalYellow));
        $("#red").on("click", () => processClick(crystalRed));

})

