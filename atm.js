var atm = {
  // buttons: document.querySelector("[type='button']"),
  buttons: document.querySelectorAll("[type='button']"),
  accounts: {
    checking: 0,
    savings: 0
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
      this.accounts[accountType] +=  userInput
    } else if( button == "Withdraw" && this.accounts[accountType] >= userInput) {
      this.accounts[accountType] -=  userInput
    } else{
      alert("You don't have enough money")
    }
    // update the html for that account
    account.querySelector(".balance").innerHTML = "$" + this.accounts[accountType]
  },
  listen: function(){
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.transact.bind(this))
    }
  }
}

atm.listen()
