let player1;
let player2;
let count = 0;

const gameBoard = (() => {
  const gameBoardArr = [
    {grid: 'a', move: ""}, 
    {grid: 'b', move: ""}, 
    {grid: 'c', move: ""}, 
    {grid: 'd', move: ""}, 
    {grid: 'e', move: ""}, 
    {grid: 'f', move: ""}, 
    {grid: 'g', move: ""}, 
    {grid: 'h', move: ""}, 
    {grid: 'i', move: ""}];

  const render = () => {
    document.querySelector(".startContainer").style.display = ("none");

    document.querySelector(".winner").innerHTML = "";

    var temp = document.getElementById("container");
    while (temp.hasChildNodes()) {
      temp.removeChild(temp.firstChild);
    }

    for (i = 0; i < 9; i++){
      var box = document.createElement("div");
      document.getElementById("container").appendChild(box);
      box.classList.add("box");
      box.classList.add(gameBoardArr[i].grid);
      box.innerHTML = "";
      box.addEventListener('click' , function(turn){
        if (count % 2 == 0) {
          turn = 'x';
        }
        else if (count % 2 != 0) {
          turn = 'o';
        }

        if (this.innerHTML == "") {
          this.innerHTML = turn;
        }

        checkGame();

        count ++;
      });
    }
  }
  
  return {gameBoardArr, render};
})();

const playerFactory = (name, move) => {
  return {name, move};
};

function playerSubmit() {
  player1 = playerFactory(document.querySelector("#p1").value, 'x');
  player2 = playerFactory(document.querySelector("#p2").value, 'o');

  document.querySelector("#playerForm").style.display = ("none");
  document.querySelector(".startContainer").style.display = ("block");
  document.querySelector("#container").style.display = ("grid");
}

function p1Win() {
  document.querySelector(".winner").innerHTML = player1.name + " Wins!";
  document.querySelector(".startButton").innerHTML = "Restart Game";
  document.querySelector(".startContainer").style.display = ("block");
}

function p2Win() {
  document.querySelector(".winner").innerHTML = player1.name + " Wins!";
  document.querySelector(".startButton").innerHTML = "Restart Game";
  document.querySelector(".startContainer").style.display = ("block");
}

function checkGame() {
  for (i = 0; i < 9; i++) {
    gameBoard.gameBoardArr[i].move = document.querySelector('#container').childNodes[i].innerHTML;
  }

  if (gameBoard.gameBoardArr[0].move == 'x' && gameBoard.gameBoardArr[1].move == 'x' && gameBoard.gameBoardArr[2].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[3].move == 'x' && gameBoard.gameBoardArr[4].move == 'x' && gameBoard.gameBoardArr[5].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[6].move == 'x' && gameBoard.gameBoardArr[7].move == 'x' && gameBoard.gameBoardArr[8].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[0].move == 'x' && gameBoard.gameBoardArr[3].move == 'x' && gameBoard.gameBoardArr[6].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[1].move == 'x' && gameBoard.gameBoardArr[4].move == 'x' && gameBoard.gameBoardArr[7].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[2].move == 'x' && gameBoard.gameBoardArr[5].move == 'x' && gameBoard.gameBoardArr[8].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[0].move == 'x' && gameBoard.gameBoardArr[4].move == 'x' && gameBoard.gameBoardArr[8].move == 'x') {
    p1Win();
  }
  else if (gameBoard.gameBoardArr[2].move == 'x' && gameBoard.gameBoardArr[4].move == 'x' && gameBoard.gameBoardArr[6].move == 'x') {
    p1Win();
  }

  if (gameBoard.gameBoardArr[0].move == 'o' && gameBoard.gameBoardArr[1].move == 'o' && gameBoard.gameBoardArr[2].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[3].move == 'o' && gameBoard.gameBoardArr[4].move == 'o' && gameBoard.gameBoardArr[5].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[6].move == 'o' && gameBoard.gameBoardArr[7].move == 'o' && gameBoard.gameBoardArr[8].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[0].move == 'o' && gameBoard.gameBoardArr[3].move == 'o' && gameBoard.gameBoardArr[6].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[1].move == 'o' && gameBoard.gameBoardArr[4].move == 'o' && gameBoard.gameBoardArr[7].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[2].move == 'o' && gameBoard.gameBoardArr[5].move == 'o' && gameBoard.gameBoardArr[8].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[0].move == 'o' && gameBoard.gameBoardArr[4].move == 'o' && gameBoard.gameBoardArr[8].move == 'o') {
    p2Win();
  }
  else if (gameBoard.gameBoardArr[2].move == 'o' && gameBoard.gameBoardArr[4].move == 'o' && gameBoard.gameBoardArr[6].move == 'o') {
    p2Win();
  }

  else if (gameBoard.gameBoardArr[0].move != '' && gameBoard.gameBoardArr[1].move != '' && gameBoard.gameBoardArr[2].move != '' && gameBoard.gameBoardArr[3].move != '' && gameBoard.gameBoardArr[4].move != '' && gameBoard.gameBoardArr[5].move != '' && gameBoard.gameBoardArr[6].move != '' && gameBoard.gameBoardArr[7].move != '' && gameBoard.gameBoardArr[8].move != '') {
    document.querySelector(".winner").innerHTML = "Draw!";
    document.querySelector(".startButton").innerHTML = "Restart Game";
    document.querySelector(".startContainer").style.display = ("block");
  }
}