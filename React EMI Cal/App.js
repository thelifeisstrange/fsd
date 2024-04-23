import React, { useState } from 'react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const term = parseFloat(loanTerm) * 12; // converting years to months
    const rate = parseFloat(interestRate) / 100 / 12; // converting annual rate to monthly and percentage to decimal

    const emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const totalPayment = emi * term;
    const totalInterest = totalPayment - principal;

    setTotalInterestPaid(totalInterest.toFixed(2));
    setTotalAmountPaid(totalPayment.toFixed(2));
  };

  return (
    <div>
      <h2>EMI Calculator</h2>
      <div>
        <label>Loan Amount:</label>
        <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      </div>
      <div>
        <label>Loan Term (in years):</label>
        <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate (per year %):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <button onClick={calculateEmi}>Calculate</button>
      <div>
        <h3>Result:</h3>
        <p>Total Interest Paid: ${totalInterestPaid}</p>
        <p>Total Amount Paid: ${totalAmountPaid}</p>
      </div>
    </div>
  );
};

export default EmiCalculator;
