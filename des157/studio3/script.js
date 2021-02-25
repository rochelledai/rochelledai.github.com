(function(){
    'use strict';
    console.log("reading js");

    const startGame = document.getElementById('startgame');
    let gameControl = document.getElementById('gamecontrol');
    let game = document.getElementById('game');
    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');
    let actionArea = document.getElementById('actions');
    let mess = document.getElementById('mess'); /* winning message */
    let p1 = document.getElementById('p1'); /* player 1 */
    let p2 = document.getElementById('p2'); /* player 2 */
    const instruct = document.getElementById('instruct');
    const rollsound = new Audio('media/diceroll.mp3');
    const winsound = new Audio('media/win.mp3');


    let gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
            'images/4die.png', 'images/5die.png', 'images/6die.png'],  
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,  //used to determine which player goes first
        gameEnd: 29
    };

    startGame.addEventListener("click", function() {
        instruct.style.color="#5c5c5c";  /* once game starts, instructions are grayed out */
        //generates random number
        gameData.index = Math.round(Math.random()); 
        //changes the text on the page
        gameControl.innerHTML = '<h2></h2>'; /* clears the text */
        gameControl.innerHTML += '<button id="quit">quit</button>';

        //reloads the page if user clicks "quit"
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        setUpTurn(); //calls this function within the startGame 
    });

    function setUpTurn(){
        //roll the dice for player 1 (or 2, depends on what it is)
        game.innerHTML = `<h3>Click die to roll for ${gameData.players[gameData.index]}</h3>`;

        /* if it is player 1's turn, add a gradient on their side */
        if ( gameData.players[gameData.index] === gameData.players[0] ){
            p2.className = "";
            p1.className = "p1on";
        }
        else {
            p1.className = ""; /* clears the other side's gradient */
            p2.className = "p2on";
        }

        /* initial imgs of ? dies */
        /* i only want these to appear in the very beginning, NOT before every roll... needs conditional?*/
        game.innerHTML += `<div id="dies"><img src = "images/qdie.png">
                            <img src="images/qdie.png"></div>`;


        document.getElementById('dies').addEventListener('click', function(){
            rollsound.play(); /* ADDED SOUND */
            throwDice(); //when u click dies, they are rolled
        });
    }

    function throwDice() {
        actionArea.innerHTML = ''; //clears the action area 

        //records the two rolls of the dice
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //use floor to avoid getting a 0
        gameData.roll2 = Math.floor(Math.random() * 6) +1;

        //changes the text and images to match die
        game.innerHTML = `<h3>Click die to roll for ${gameData.players[gameData.index]}</h3>`;
        game.innerHTML += `<div id="dies"><img src = "${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}"></div>`;

        //computes the sum
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if ( gameData.rollSum === 2) {
            console.log("snake eyes were rolled");
            game.innerHTML += '<h3>Oh snap! Snake eyes!</h3>';
            gameData.score[gameData.index] = 0;
            //ternary operator is if operator. if index = 0, change index = 1
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        else if ( gameData.roll1 ===1 || gameData.roll2 ===1) {
            console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index =1);
            game.innerHTML += `<h3>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</h3>`;
            setTimeout(setUpTurn, 2000);
        }
        else {
            console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="pass">Pass</button>';

            document.getElementById('dies').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index =1);
                setUpTurn();
            });
    
            checkWinningCondition();
        }
    }
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            winsound.play(); /* ADDED SOUND */
            mess.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new Game?";
        }
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore () {
        score1.innerHTML = gameData.score[0]; /* displaying the scores in their respective areas */
        score2.innerHTML = gameData.score[1];
    }

}());