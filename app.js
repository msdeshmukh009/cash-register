var billAmnt =document.querySelector("#bill");
var nxtBtn = document.querySelector("#go-nxt");
var paidAmnt = document.querySelector("#cash");
var resultBtn = document.querySelector("#result");
var note = document.querySelector(".noOfNotes")

function clicked(){

}

function finalClick(){
var returnAmnt = paidAmnt.value-billAmnt.value;
if(returnAmnt % 2000==0){
  return note.value = returnAmnt/2000; 
}
}
nxtBtn.addEventListener("click",clicked);

resultBtn.addEventListener("click",finalClick)