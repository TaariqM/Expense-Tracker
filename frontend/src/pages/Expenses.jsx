import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ExpensesModal from "./ExpensesModal";
import "../styling/expenses.css";

const Expenses = () => {
  // const [expenses, setExpenses] = useState({
  //   title: "",
  //   amount: null,
  //   category: "",
  //   desc: "",
  //   date: "",
  // });
  const [expensefolderName, setExpenseFolderName] = useState([]);
  const [newRow, setNewRow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const expFolderId = location.pathname.split("/")[3];
  const userId = location.pathname.split("/")[1];

  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setNewRow(true);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setExpenses((prevExpenses) => ({
  //     ...prevExpenses,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  useEffect(() => {
    const getData = async () => {
      try {
        const expenseFolderData = await axios.get(
          "http://localhost:8800/api/v1/expenseFolder/" +
            userId +
            "/" +
            expFolderId
        );
        setExpenseFolderName(expenseFolderData.data[0].name);

        // const userData = await axios.get(
        //   "http://localhost:8800/api/v1/user/" + userId
        // );
        // console.log(folderData.data[0].name);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [userId, expFolderId]);

  return (
    <div className="container">
      <div className="main-table-container">
        <div className="header-btn-section">
          <div className="header-section">
            <h1>{expensefolderName}</h1>
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
              {/* {newRow && (
                <tr>
                  <th>
                    <input type="text" name="title" onChange={handleChange} />
                  </th>
                  <th>
                    <input
                      type="number"
                      name="amount"
                      onChange={handleChange}
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      name="category"
                      onChange={handleChange}
                    />
                  </th>
                  <th>
                    <input type="text" name="desc" onChange={handleChange} />
                  </th>
                  <th>
                    <input type="date" name="date" onChange={handleChange} />
                  </th>
                </tr>
              )} */}
              {/* <tr>
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
              </tr> */}
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
            {/* {newRow && (
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
            )} */}
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

      {isModalOpen && (
        <ExpensesModal
          isOpen={isModalOpen}
          closeModal={setIsModalOpen}
          userId={userId}
          expenseFolderId={expFolderId}
          navLink={location.pathname}
        />
      )}
    </div>
  );
};

export default Expenses;
