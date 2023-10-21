import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ExpenseFolderModal from "./ExpenseFolderModal";
import "../styling/modal.css";

const Dashboard = () => {
  let classname = {
    selected: "item-selected",
    notSelected: "item-notSelected",
  };

  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseFolders, setExpenseFolders] = useState([]);

  const [navigation, setNavigation] = useState([
    {
      name: "Dashboard",
      href: "#",
      current: true,
    },
    {
      name: "Add Expense Folder",
      href: "#",
      current: false,
    },
    {
      name: "Profile",
      href: "/profile",
      current: false,
    },
    {
      name: "Settings",
      href: "/settings",
      current: false,
    },
    {
      name: "Sign Out",
      href: "#",
      current: false,
    },
  ]);

  const location = useLocation();

  const userId = location.pathname.split("/")[2]; // this will get the id of the user
  const handleClick = (clickedItem) => {
    // Update the state to mark the clicked item as current
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: item.name === clickedItem.name,
      }))
    );

    // console.log(clickedItem);
    if (clickedItem.name === "Add Expense Folder") {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await axios.get(
          "http://localhost:8800/api/v1/user/" + userId
        );
        setUser({ ...userData.data[0] }); // the axios responses are usually in a 'data' property

        const expenseFolderData = await axios.get(
          "http://localhost:8800/api/v1/expenseFolder/" + userId
        );

        setExpenseFolders(expenseFolderData.data);
        console.log(expenseFolderData);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [userId]);

  return (
    <div className={`main ${isModalOpen ? "modal-open" : ""}`}>
      <nav className="navigation-bar-container">
        <div className="navigation-bar">
          <div className="navigation-bar-items-container">
            <div className="navigation-bar-items">
              <div className="navigation-items">
                <div className="items">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={
                        item.current
                          ? classname.selected
                          : classname.notSelected
                      }
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => handleClick(item)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="dashboard-title-container">
          <h1 className="dashboard-title">{`${user.first_name}${" "}${
            user.last_name
          }${"'s"}${" Dashboard"}`}</h1>
        </div>
      </div>

      <div className="cards-container">
        {expenseFolders.map((expenseFolder) => (
          <div className="card">
            <div className="card-title-container">
              <h2 className="card-title">{expenseFolder.name}</h2>
            </div>

            <div className="buttons-container">
              <button className="cardBtn">Edit</button>
              <button className="cardBtn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ExpenseFolderModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
