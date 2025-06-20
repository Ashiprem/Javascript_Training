// 1. Ask for the user's name (string).
// 2. Ask for the current balance (number).
// 3. Ask for the amount to withdraw (number).
// 4. Check if the withdrawal amount is valid:
// Must be a positive number.
// Must be less than or equal to the current balance.
// 5. If valid, deduct the amount from the balance and return a message:
// Hello [User], you have successfully withdrawn ₹[Amount]. Remaining balance: ₹[NewBalance].
// 6. If not valid, return an error message like:
// "Invalid amount!"
// "Insufficient balance!"

function withdrawMoney(userName,currentbalance,withdrawamount)
{
    if( withdrawamount <=0 )
    {
        console.log ("Invalid amount! Please enter a valid withdraw amount")
    }
    if( withdrawamount > currentbalance)
    {
        console.log ("Insufficient Balance")
    }
    let NewBalance = currentbalance - withdrawamount;
    
  /*  console.log (`Hello ${userName} you have successfully ${withdrawamount}.The Remaining balance:$${currentbalance}`)*/
    
     console.log (`Hello ${userName}, you have successfully withdrawn $${withdrawamount}.The Remaining balance:$${NewBalance}`)
}