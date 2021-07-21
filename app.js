var billAmnt =document.querySelector("#bill");
var nxtBtn = document.querySelector("#go-nxt");

var cashGivenDiv = document.querySelector(".cashGiven");
var paidAmnt = document.querySelector("#cash");
var checkBtn = document.querySelector("#result");

var errorDiv = document.querySelector(".errorMsg");

var changeReturnDiv = document.querySelector(".changeReturn");
var noOfNotes = document.querySelector(".noOfNotes");

var avilableNotes = [2000,500,100,20,10,5,1];

//events after clicking bext button
function nxtBtnClicked(){
  if(Number(billAmnt.value)>0){
    nxtBtn.style.diplay ="none" //remove nxtBtn
    cashGivenDiv.style.diplay="block"//shown cashGivenDiv
  }
  else{
    showError("Enter valid bill amount")
  }
}
function showError(message){
  errorDiv.style.diplay="block"//shown errorDiv
  errorDiv.innerText = message;
  changeReturnDiv.style.diplay="none"//hide the table
}
nxtBtn,addEventListener("click",nxtBtnClicked)

//events after clicking check button

//if amount is entered without refresing the page
function clearPreviousResult(){
  for(var i=0;i<noOfNotes.length;i++){
    noOfNotes[i].innerText="";
  }
}
function checkBtnClicked(){
  clearPreviousResult();

  //error-handling
  var totalBill = Number(billAmnt.value);
  var totalCash = Number(paidAmnt.value);

  if(totalBill>0 && totalCash>0){
    if(!Number.isInteger(totalCash)){
      showError("Enter valid amount in cash field")
    }
    if(totalBill > totalCash){
      showError("cash is less than bill, enter valid amount");
    }
    //if everthing is good
    notesToReturn(totalBill,totalCash)
  }else{
    showError("Enter valid details for bill and cash amount")
  }

}
function notesToReturn(bill,cash){
  var returnAmt = cash - bill;
  if(returnAmt<1){
    showError("No amount should be returned");
  }
  cashGivenDiv.style.diplay="block"

  for(var i=0;i<avilableNotes.length;i++){
    compute(returnAmt,avilableNotes[i],i)
  }
}

function compute(moneyToReturn,noteAmt,index){
  let mod = moneyToReturn
  if(mod>=noteAmt){
      mod = moneyToReturn%noteAmt;
      moneyToReturn = moneyToReturn - mod;
      let notes = moneyToReturn/noteAmt;
      noOfNotes[index].innerText = notes;
  }
  return mod;
}
checkBtn.addEventListener("click",checkBtnClicked)