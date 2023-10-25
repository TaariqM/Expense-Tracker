import React from "react";
import { useState } from "react";
import "../styling/expenses.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState({
    title: "",
    amount: null,
    category: "",
    desc: "",
    date: "",
  });
  const [newRow, setNewRow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setNewRow(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="main-table-container">
        <div className="header-btn-section">
          <div className="header-section">
            <h1>Header</h1>
          </div>

          <div className="btn-section">
            <button className="add-expense-btn" onClick={handleClick}>
              Add Expense
            </button>
          </div>
        </div>

        <div className="table-section-container">
          <table>
            <thead>
              <tr>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Amount</div>
                </th>
                <th>
                  <div>Category</div>
                </th>
                <th>
                  <div>Description</div>
                </th>
                <th>
                  <div>Date</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>test</div>
                </td>
                <td>
                  <div>test</div>
                </td>
                <td>
                  <div>test</div>
                </td>
                <td>
                  <div>test</div>
                </td>
                <td>
                  <div>test</div>
                </td>
              </tr>
            </tbody>

            {/* {expenses.map((expense) => (
              <tr>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.desc}</td>
                <td>{expense.date}</td>
              </tr>
            ))} */}
            {newRow && (
              <tr>
                <th>
                  <input type="text" name="title" onChange={handleChange} />
                </th>
                <th>
                  <input type="number" name="amount" onChange={handleChange} />
                </th>
                <th>
                  <input type="text" name="category" onChange={handleChange} />
                </th>
                <th>
                  <input type="text" name="desc" onChange={handleChange} />
                </th>
                <th>
                  <input type="date" name="date" onChange={handleChange} />
                </th>
              </tr>
            )}
          </table>
        </div>
      </div>

      <div className="total-amount-container">
        <div className="total-header">
          <h1>Total Amount: </h1>
        </div>

        <div className="total-amount">
          <h2>$1000.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
