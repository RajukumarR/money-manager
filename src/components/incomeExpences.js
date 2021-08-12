import React from 'react'

const IncomeExpences = () => {
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">+INR 0.00</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">-INR 0.00</p>
    </div>
  </div>
  )
}

export default IncomeExpences
