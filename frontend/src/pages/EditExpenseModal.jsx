import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditExpenseModal = ({
  isOpen,
  closeModal,
  userId,
  expenseFolderId,
  navLink,
  expense,
}) => {
  const [newExpense, setNewExpense] = useState({
    user_Id: userId,
    expenseFolder_Id: expenseFolderId,
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
    desc: expense.desc,
    date: expense.date,
  });

  const navigation = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8800/api/v1/expense/" + expense.expense_id,
        newExpense
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  // this function will handle clicks inside the modal content
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevents the click event from propagating to the overlay
    // console.log(newExpense);
    // console.log(expense);
  };

  const handleOutsideModalClick = (e) => {
    e.preventDefault();
    closeModal(false);
    if (navLink) {
      navigation(navLink);
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      onClick={handleOutsideModalClick}
    >
      <div className="modal-overlay">
        <div className="modal-content" onClick={handleContentClick}>
          <div className="modal-title-container">
            <h1 className="modal-title">Expense</h1>
          </div>

          <div className="modal-form-container">
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="container">
                <label>Name:</label>
                <div className="model-form-input-container">
                  <input
                    type="text"
                    name="title"
                    value={newExpense.title}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="container">
                <label>Amount:</label>
                <div className="model-form-input-container">
                  <input
                    type="number"
                    name="amount"
                    step=".01"
                    value={newExpense.amount.toFixed(2)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="container">
                <label>Category:</label>
                <div className="model-form-input-container">
                  <input
                    type="text"
                    name="category"
                    value={newExpense.category}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="container">
                <label>Description:</label>
                <div className="model-form-input-container">
                  <input
                    type="text"
                    name="desc"
                    value={newExpense.desc}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="container">
                <label>Date:</label>
                <div className="model-form-input-container">
                  <input
                    type="date"
                    name="date"
                    value={newExpense.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal-button-container">
                <button className="modal-button" type="submit">
                  Edit
                </button>

                <button className="modal-button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;
