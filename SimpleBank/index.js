//-----------------------------------------------------------------------------------------------
class bank {

  constructor(balance) {
    this.balance = balance

  }
//---------------------------------------
  deposite(amount) {

    const balancea = this.balance += amount
    console.log(`Your account has a balance of $ ${balancea}`)

return balancea
  }
//-------------------------------------

  withdraw(amount) {
    //method
   
    const balancea = this.balance -= amount
   console.log(`Your account has a balance of $ ${balancea}`)//from here it gets - 100 $
// return balancea
 if (balancea < 100) {
    return (this.balance = 0)
  }
 else return balancea
 
  }
  
  //--------------------------------
  
  
  
}
//------------------------------------------------------------------------------------------------
const SpotAccount = new bank(0)

// console.log('$' + SpotAccount.balance)
// SpotAccount.deposite(100)
// SpotAccount.withdraw(100)

const DepositeAmount = document.getElementById('fname')
const Balance = document.getElementById('Balance')
const WithdrawAmount = document.getElementById('fname2')
const WithdrawError = document.getElementById('caat')



const GEtDeposite = () => {
    const depositedValue = Number(DepositeAmount.value)
// SpotAccount.deposite(depositedValue)
 // deposited value is passed to amount in deposite 
 Balance.innerText  = ` SPOT :$ ${SpotAccount.deposite(depositedValue)}` 
return depositedValue
}

const GEtWithdraw = () => {
    const withdrawValue = Number(WithdrawAmount.value)
    if(SpotAccount.balance < withdrawValue){
     WithdrawError.innerText = "ERROR : withdraw amount can't exceeds the wallet balance !!"
      return
    }
    else{
      WithdrawError.innerText = ""
    }
 // withdaw value is passed to amount in Withdaw Method
 Balance.innerText  = ` SPOT :$ ${SpotAccount.withdraw(withdrawValue)}` 

}

//------------------------------------------------------------------------------------------------



























