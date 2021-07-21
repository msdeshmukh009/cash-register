
var billAmt = document.querySelector("#bill");
var cashGiven = document.querySelector("#cash");

var errorDiv = document.querySelector(".errorMsg");

var cashGivenDiv = document.querySelector(".cashGiven");
var changeReturnDiv = document.querySelector(".changeReturn");

var nextBtn = document.querySelector("#goNxt");
var checkBtn = document.querySelector("#result");

var noOfNotes= document.querySelectorAll(".noOfNotes");

var arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];


//events after clicking next button
function nxtBtnClick(){
  hideError()
    if(Number(billAmt.value)>0){

        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    }
    else{
        showError("Enter valid bill amount");
    }
}

function showError(text){
    errorDiv.style.display = "block";
    errorDiv.innerText= text;
    changeReturnDiv.style.display = "none";
}

nextBtn.addEventListener('click',nxtBtnClick)

//events after check button

//to clear previous entries
function clearNoOfNotes(){
    for(i=0;i<noOfNotes.length;i++){
        noOfNotes[i].innerText="";
    }
}


checkBtn.addEventListener('click', checkBtnClick )

function checkBtnClick(){
  hideError()
  clearNoOfNotes();
  //error handling
  let billAmtValue= Number(billAmt.value);
  let cashGivenValue= Number(cashGiven.value);

  if(billAmtValue>0 && cashGivenValue>0){

      if(!Number.isInteger(cashGivenValue)){
          showError("Enter valid amount in cash given field");
          return;
      }
      if(billAmtValue > cashGivenValue){
          showError("Cash is less than bill, please enter right amount");
          return;
      }
      //if input valid calculate no. of notes
      notesToReturn(billAmtValue, cashGivenValue);
  } else{
      showError("Enter valid bill amount and cash given to continue");
      }
}

//to calculate no. of notes
function notesToReturn(bill, cash){
    let returnAmt = cash-bill;
    
    if(returnAmt<1){
        showError("No amount should be returned");
        return;
    }
    changeReturnDiv.style.display = "block";

    for(let i=0; i<arrayNoteAmt.length; i++){
        returnAmt= compute(returnAmt, arrayNoteAmt[i], i);
    }
    
}

function compute(remainder, noteAmt, index){
    let mod = remainder
    if(mod>=noteAmt){
        mod = remainder%noteAmt;
        remainder = remainder - mod;
        let notes = remainder/noteAmt;
        noOfNotes[index].innerText = notes;
    }
    return mod;
}



function hideError(){
    errorDiv.style.display = "none";
}
