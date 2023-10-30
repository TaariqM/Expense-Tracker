import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/modal.css";

const ExpensesModal = ({
  isOpen,
  closeModal,
  userId,
  expenseFolderId,
  navLink,
}) => {
  const [expenses, setExpenses] = useState({
    title: "",
    amount: null,
    category: "",
    desc: "",
    date: "",
  });
  //   const [userFname, setUserFname] = useState("");
  //   const [userLname, setUserLname] = userState("");

  const navigation = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [e.target.name]: e.target.value,
    }));
  };

  // this function will handle clicks inside the modal content
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevents the click event from propagating to the overlay
  };

  const handleOutsideModalClick = (e) => {
    e.preventDefault();
    closeModal(false);
    if (navLink) {
      navigation(navLink);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   useEffect(() => {
  //     const getData = async () => {
  //         try {
  //             const userData = await axios.get("http://localhost:8800/api/v1/user/" + userId);
  //         }
  //         catch (err) {
  //             console.log(err);
  //         }
  //     };

  //     getData();
  //   }, [userId, expenseFolderId]);

  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      onClick={handleOutsideModalClick}
    >
      <div className="modal-overlay">
        <div className="modal-content" onClick={handleContentClick}>
          <div className="modal-title-container">
            <h1 className="modal-title">New Expense</h1>
          </div>

          <div className="modal-form-container">
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="container">
                <label>Name:</label>
                <div className="model-form-input-container">
                  <input type="text" name="title" onChange={handleChange} />
                </div>
              </div>

              <div className="container">
                <label>Amount:</label>
                <div className="model-form-input-container">
                  <input type="number" name="amount" onChange={handleChange} />
                </div>
              </div>

              <div className="container">
                <label>Category:</label>
                <div className="model-form-input-container">
                  <input type="text" name="category" onChange={handleChange} />
                </div>
              </div>

              <div className="container">
                <label>Description:</label>
                <div className="model-form-input-container">
                  <input type="text" name="desc" onChange={handleChange} />
                </div>
              </div>

              <div className="container">
                <label>Date:</label>
                <div className="model-form-input-container">
                  <input type="date" name="date" onChange={handleChange} />
                </div>
              </div>

              <div className="modal-button-container">
                <button className="modal-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesModal;
