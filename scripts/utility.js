function hideSectionById(elementId){
 const element=document.getElementById(elementId);
 element.classList.add('hidden');
}

function showSectionById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-500');
 
}
function removeBackGroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}
function getTextValueOfElementById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;

}
function getTextElementValueById(elementId){
 const element=document.getElementById(elementId);
 const elementTextValue=element.innerText;
 const value=parseInt(elementTextValue);
 return value;
}
function setTextElementValueById(elementId,value){
const element=document.getElementById(elementId);
element.innerText=value;
}

function getARandomAlphabet(){
    // get or create an alphabet 
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    
    // get a random index 0 to 25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index];
   
    return alphabet;
}
