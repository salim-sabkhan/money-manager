import React from "react";

function Header({ totalIncome }) {
  return (
    <header>
      <h1>Money Manager</h1>
      <div className="total-income">INR{totalIncome}</div>
    </header>
  );
}

export default Header;