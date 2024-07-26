document.getElementById('calculateBtn').addEventListener('click',calculteLoan);

function calculteLoan(){

    const loanAmt = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanterm = parseFloat(document.getElementById("loanTermInput").value);

    if(isNaN(loanAmt) || isNaN(interestRate) || isNaN(loanterm)){
        alert("Please Enter valid number for all the fieldds");
    }

    const monthlyInterest = interestRate/100/12;

    const totalPaymets = loanterm;

    const monthlypayment = (loanAmt * monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPaymets));

    const totalinterest = (monthlyInterest * totalPaymets) - loanAmt;

    displayresult(monthlypayment,totalinterest);
}

function displayresult(monthlypayment,totalinterest){

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <p><strong>
    Monthly Payments : ${monthlypayment.toFixed(2)}
    </p></strong>

    <p><strong>
    Total interest : ${totalinterest.toFixed(2)}
    </p></strong>
    `;
}