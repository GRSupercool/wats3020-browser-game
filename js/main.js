/* WATS 3020 Browser Game project */
/* Build a tic tac toe game for two players. */


let game;

class Player{
    contructor(token){
        this.token=token;
    }   
}

// Tic Tac Toe Game Class
class TicTacToe {
  constructor(){
     
      this.player1=new Player('times');
      this.player2=new Player('circle');
      
      this.currentPlayer=null;

      this.gameStatus=null;

      this.winner=null;

      this.moveCount=0;

      this.startPrompt=document.querySelector('#start-prompt');

     this.movePrompt=document.querySelector('#move-prompt');
     
     this.currentPlayerToken=document.querySelector('#player-token');
      
      this.gameboard=document.querySelector('#gameboard');
     
      this.winScreen=document.querySelector('#win-screen');

      
      this.winnerToken=document.querySelector('#winner-token');

      
      this.drawScreen=document.querySelector('#draw-screen');

      // Initialize an Array representing the starting state of the game board.
      // This is provided for you. We can access the spaces on the board using
      // (X, Y) coordinates as `this.gameState[x][y]`, which is how the game
      // will check to see if the winner is known.
      this.gameState = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
      ];


      this.winStates = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
      ];
  }

  // This `checkForWinner()` method is provided for you, but you must fill in
  // the event dispatch lines that cause the end game screens to show.
  checkForWinner(){
      for (let condition of this.winStates){
          let winningCondition = true;
          for (let position of condition){
              if(this.gameState[position[0]][position[1]] !==this.currentPlayer.token) {
                  winningCondition = false;
              }
          }
          if (winningCondition) {
              console.log('We have a winner!');
              console.log(`Condition is: ${condition}`);
              this.gameStatus = 'won';
              this.winner = this.currentPlayer;

              // If we've gotten here, then we need to createa  `win` event and
              // dispatch it.

             
                  let winEvent= new Event('win');
              }

    
                document.dispatchEvent(winEvent);
              return true; // Return a value to stop processing the additional move count check.
          }
      }

      
      this.moveCount++;
      console.log(`Reviewed move ${this.moveCount}.`);
      if (this.moveCount >= 9) {
          console.log(`This game is a draw at ${this.moveCount} moves.`);
          this.gameStatus = 'draw';

          
          let drawEvent=new Event('draw');
          
         document.dispatchEvent(drawEvent);
     }
  }

  recordMove(event){      
let tile_x=event.target.dataset.x;
let tile_y=event.target.dataset.y;
   } 

if(!this.gameState[tile_x][tile_y]){
    this.gameState[tile_x][tile_y]=this.currentPlayer.token;
    event.target.setAttribute('class',`tile played fas fa-${this.currentPlayer.token}`);
}else{
    return false;
}
}
 
event.target.setAttribute('class','tile played' `fas fa-${this.currentPlayer.token}`);
 else{
 return false;
       }
  
  
switchPlayer(){

if(this.currentPlayer===this.player1){
this.currentPlayer=this.player2;
}else {
this.currentPlayer=this.player1;
}
}


setUpTileListeners(){
let titleElements=document.querySelectorAll('.tile');

      
for(const tile of tileElements){
title.addEventListener('click','handleMove');
}
}
  showWinScreen(){

this.winScreen.setAttribute('class','show');

this.winnerToken.setAttribute('class',`fas fa-${this.currentPlayer.token}`);
  }
  showDrawScreen(){

this.drawScreen.setAttribute('class','show');
  }
setUpBoard(){

this.gameboard.innerHTML='';

for(let i=0; i<3; i++){
let newRow= document.createElement('div');

newRow.setAttribute('class','row');

for(let j=0; j<3; j++){

let newCol=document.createElement('div');

newCol.setAttribute('class','col-xs-3');

let newTile=document.createElement('span');

newTile.setAttribute('class','fas fa-question tile');

newTile.setAttribute('data-x',i);

newTile.setAttribute('data-y',j);

newCol.appendChild(newTile);

newRow.appendChild(newCol);
}
this.gameboard.appendChild(newRow);

}

this.setUpTileListeners();
  }
initializeMovePrompt(){
      
this.startPrompt.setAtttribute('class','hidden');

this.movePrompt.setAttribute('class','');

this.currentPlayer= (this.player1);

this.currentPlayerToken.setAttribute('class',`fas fa-${this.currentPlayer.token}`);
  }
start(){

this.setUpBoard();
console.log('set up board');

this.intializeMovePrompt();
console.log('init move prompt');

}
} 


document.addEventListener('DOMContentLoaded',(event)=>{
let startButton=document.querySelector('#start-button');

startButton.addEventListener('click',(event)=>{
game= new TicTacToe();
game.start();
  });
  });


document.addEventListerner('win',(event))=> {
    console.log ('win event fired');
}

game.showWinScreen();
  });

// NOTE: End of the "win" event listener.


document.addEventListener('draw',(event)=>{


game.showDrawScreen()

});
// NOTE: End of the "draw" event listener.


function handleMove(event){

game.recordMove(event);

game.checkForWinner();

game.switchPlayer();
}
