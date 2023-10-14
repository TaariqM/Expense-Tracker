import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ExpenseFolderModal = () => {
  const [expenseFolder, setExpenseFolder] = useState({
    folderName: "",
    userId: null,
  });

  const location = useLocation();
  // const navigation = useNavigate();
  const currentUserId = location.pathname.split("/")[2].split("#")[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8800/api/v1/addExpenseFolder",
        expenseFolder
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    // setExpenseFolder((prev) => ({ [e.target.name]: e.target.val }));
    setExpenseFolder((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      userId: currentUserId,
    }));
    console.log(expenseFolder);
  };

  return (
    <div className="modal">
      <div className="modal-title-container">
        <h1 className="modal-title">Add Expense Folder</h1>
      </div>

      <div className="modal-form-container">
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <div className="model-form-input-container">
            <input type="text" name="folderName" onChange={handleChange} />
          </div>

          <div className="modal-button-container">
            <button className="modal-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseFolderModal;
