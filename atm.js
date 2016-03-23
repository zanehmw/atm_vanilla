var atm = {
  // buttons: document.querySelector("[type='button']"),
  buttons: document.querySelectorAll("[type='button']"),
  accounts: {
    checking: 0,
    savings: 0
  },
  listen: function(){
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.transact.bind(this))
    }
  },
  transact: function(event){
    var account = event.target.parentNode
    var accountType = account.querySelector("h2").innerHTML.toLowerCase()
    var inputField = "#"+ accountType +"Amount"
    var userInput = parseInt(account.querySelector(inputField).value)
    // check which button we clicked on
    var button = event.target.value
    if( button == "Deposit"){
      // add user input to the relevant account
      atm.changeClass(accountType);
      this.accounts[accountType] +=  userInput
    } else if (button == "Withdraw" && this.accounts[accountType] > userInput) {
      this.accounts[accountType] -=  userInput
    } else if (button == "Withdraw" && this.accounts[accountType] == userInput) {
      this.accounts[accountType] -=  userInput
      atm.changeClass(accountType);
    } else {
      alert("You don't have enough money")
    }
    // update the html for that account
    account.querySelector(".balance").innerHTML = "$" + this.accounts[accountType]
  },
  changeClass: function(accountType){
    var elName = "#"+ accountType +"BalanceDiv"
    var classNames = document.querySelector(elName).classList
    if (classNames.contains("zero")) {
      classNames.remove("zero")
    } else {
      classNames.add("zero")
    }
  }
}

atm.listen()
