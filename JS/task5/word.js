let wordCloud=["hello","hi","what","you","yourself","name","victory","food","lovely","beautiful","written","when","awesome"];
let wordsContainerE1=document.getElementById("wordsContainer");
let userInputE1=document.getElementById("userInput");
let errorMsgE1=document.getElementById("errorMsg");
let errorMsg="Please enter a word";

function createAndAddWordToWordCloud(word){
    let randomFontSize=Math.ceil(Math.random()*40)+"px";
    let wordE1=document.createElement("span");
    wordE1.textContent=word;
    wordE1.style.fontSize=randomFontSize;
    wordE1.classList.add("m-3");
    wordsContainerE1.appendChild(wordE1);
}
for(let word of wordCloud){
    createAndAddWordToWordCloud(word)
}
function addBtnToWord(){
    let userEnteredWord=userInputE1.value;
    if(userEnteredWord !==""){
        userInputE1.value="";
        errorMsgE1.textContent="";
        createAndAddWordToWordCloud(userEnteredWord);
    }else{
        errorMsgE1.textContent=errorMsg;
    }
}