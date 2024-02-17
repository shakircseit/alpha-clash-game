// function play(){
//     const homeSection=document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
const playerPressed=event.key;
console.log(playerPressed);
// stop the game if player pressed esc buttom
if(playerPressed==='Escape'){
gameOver();
}
// get the expected to press
const displayAlphabetElement=document.getElementById('display-alphabet');
const displayAlphabet=displayAlphabetElement.innerText;
const expectedAlphabet=displayAlphabet.toLowerCase();

// check match or not
if(playerPressed===expectedAlphabet){
 console.log('you got a point');
// update Score
// const currentScoreElement=document.getElementById('current-score');
// const currentScoreText=currentScoreElement.innerText;
// const currentScore=parseInt(currentScoreText);
// const newScore=currentScore+1;
// currentScoreElement.innerText=newScore;
   const currentScore=getTextElementValueById('current-score');
   const updatedScore=currentScore+1;
   setTextElementValueById('current-score',updatedScore);

// start a new round
 removeBackGroundColorById(expectedAlphabet);
 continueGame();
}
else{
    console.log('you missed, you lost a life');
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLifeEText=currentLifeElement.innerText;
    // const currentLife=parseInt(currentLifeEText);
    // const newLife=currentLife-1;
    // currentLifeElement.innerText=newLife;
    // .........................................

    const currentLife=getTextElementValueById('current-life');
    const updatedLife=currentLife-1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife===0){
     gameOver();
    }
}
}
// capture keyboard button press
document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
 const alphabet=getARandomAlphabet();
 console.log('Your Alphabet',alphabet);

 // Set Random Generated Alphabet To the Screen 
 const currentAlphabetElement=document.getElementById('display-alphabet');  
 currentAlphabetElement.innerText=alphabet;

//  set background Color
setBackgroundColorById(alphabet);
}

function play(){
    hideSectionById('home');
    hideSectionById('final-score');
    showSectionById('play-ground');
    
    //reset score and life
    setTextElementValueById('current-life',4) ;
    setTextElementValueById('current-score',0)
    continueGame();
}
function gameOver(){
 hideSectionById('play-ground');
 showSectionById('final-score');
//  update final score
 const lastScore=getTextElementValueById('current-score');
 setTextElementValueById('game-final-score',lastScore);
//  clear the highlighted keyboard
const currentAlphabet=getTextValueOfElementById('display-alphabet');
removeBackGroundColorById(currentAlphabet);
}