var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
const btnCash = document.querySelector("#btn-cash");
var message = document.querySelector("#error-message");
var notes = [2000, 500, 100, 50, 10, 5, 1];
var nosOfNotes = document.querySelectorAll(".no-of-notes");
// const returnedNotes = document.querySelectorAll(".noOfNotes");
btnCash.addEventListener("click", function btnClickHandler() {
  hideMessage();
  //   console.log("hii its working");
  if (billAmount.value > 0) {
    // console.log("the value is positive");

    if (cashAmount.value > billAmount.value) {
      const returnCash = cashAmount.value - billAmount.value;
      //   console.log("this value is largest");

      calculateChange(returnCash);
    } else {
      showMessage("Do you wanna wash plates");
      //   console.log("invalid error");
    }
  } else {
    // console.log("you put the negative value");
    showMessage("The bill Amount should be greater than zero");
  }
});
function hideMessage() {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
function calculateChange(returnCash) {
  for (var i = 0; i < notes.length; i++) {
    var remainderNote = Math.trunc(returnCash / notes[i]);
    // console.log(remainderNote);
    returnCash %= notes[i];
    // console.log(returnCash);
    // console.log(nosOfNotes[0].innerText);
    // nosOfNotes[i].innerText = remainderNote;
    // nosOfNotes[i].value = remainderNote;
    nosOfNotes[i].innerText = remainderNote;
  }
}
