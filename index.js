                  //retrieve score from local storage or initialize
const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
  };
      updateScoreElement();
                     

                      //main game function
  function playGame(playerMove){
      const computermove = pickComputerMove();

         let  result = ''

         if(playerMove === 'paper'){
                if(computermove === 'rock'){
              result ='you win'
          }else if(computermove === 'paper'){
              result = 'tie'
          }else if(computermove === 'scissors'){
                  result = 'you lose'
          }
            } 


         else if(playerMove === 'scissors'){
                if(computermove === 'rock'){
              result ='you lose'
          }else if(computermove === 'paper'){
              result = 'you win'
          }else if(computermove === 'scissors'){
                  result = 'tie'
       }
            }


            else if(playerMove === 'rock'){
              if(computermove === 'rock'){
              result ='tie'
          }else if(computermove === 'paper'){
              result = 'you lose'
          }else if(computermove === 'scissors'){
                  result = 'you win'
          }
            }

                      //update score based on result
          if(result === 'you win'){
              score.wins +=1;
            }else if(result === 'you lose'){
              score.losses +=1;
            }else if(result === 'tie'){
              score.ties +=1;
            }
                
                   //local storage update
            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

                    //display result and moves
            document.querySelector('.js-result')
            .innerHTML = result;
            
                    //moves display
            document.querySelector('.js-moves')
             .innerHTML =`you
          <img src="imgs/${playerMove}-emoji.png" class="result-button">
          <img src="imgs/${computermove}-emoji.png" class="result-button">computer`
             
            //  `you ${playerMove} - ${computermove} computer`;

                  
         
  }
                      //update score element
  function updateScoreElement(){
      document.querySelector('.js-score')
          .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

                      //computer move function
  function pickComputerMove(){
    const randomNumber= Math.random();

               let computermove=''

       
       if(randomNumber>= 0 && randomNumber < 1/3){
           computermove= 'rock';
       }else if(randomNumber >= 1/2 && randomNumber <2/3){
           computermove='paper';
       }else if(randomNumber >= 2/3 && randomNumber < 1  ){
           computermove = 'scissors';
  }
  return computermove;
}