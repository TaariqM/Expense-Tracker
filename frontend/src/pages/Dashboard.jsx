import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ExpenseFolderModal from "./ExpenseFolderModal";
import NavigationBar from "./NavigationBar";
import "../styling/modal.css";

const Dashboard = () => {
  // let classname = {
  //   selected: "item-selected",
  //   notSelected: "item-notSelected",
  // };

  const [navigation, setNavigation] = useState([]);
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseFolders, setExpenseFolders] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split("/")[2]; // this will get the id of the user

  // const handleClick = (clickedItem, e) => {
  //   e.preventDefault();
  //   // Update the state to mark the clicked item as current
  //   setNavigation((prevNavigation) =>
  //     prevNavigation.map((item) => ({
  //       ...item,
  //       current: item.name === clickedItem.name,
  //     }))
  //   );

  //   if (clickedItem.name === "Add Expense Folder") {
  //     setIsModalOpen(true);
  //   }
  // };

  const handleCardClick = (folder, e) => {
    e.preventDefault();
    navigate(
      `/${userId}/${user.first_name.toLowerCase()}-${user.last_name.toLowerCase()}/${
        folder.expense_folder_id
      }/${folder.name}/expenses`
    );
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

        setNavigation([
          {
            name: "Dashboard",
            href: `/dashboard/${
              userData.data[0].user_id
            }/${userData.data[0].first_name.toLowerCase()}${"-"}${userData.data[0].last_name.toLowerCase()}`,
            current: true,
          },
          {
            name: "Add Expense Folder",
            href: "",
            current: false,
          },
          {
            name: "Profile",
            href: `/dashboard/${
              userData.data[0].user_id
            }/${userData.data[0].first_name.toLowerCase()}${"-"}${userData.data[0].last_name.toLowerCase()}/profile`,
            current: false,
          },
          {
            name: "Settings",
            href: `/dashboard/${
              userData.data[0].user_id
            }/${userData.data[0].first_name.toLowerCase()}${"-"}${userData.data[0].last_name.toLowerCase()}/settings`,
            current: false,
          },
          {
            name: "Sign Out",
            href: "#",
            current: false,
          },
        ]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
    // console.log(user);
  }, [userId]);

  return (
    <div className={`main ${isModalOpen ? "modal-open" : ""}`}>
      {/* <nav className="navigation-bar-container">
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
                      onClick={(e) => handleClick(item, e)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <NavigationBar
        navigation={navigation}
        setNavigation={setNavigation}
        openModal={setIsModalOpen}
        link={location.pathname}
      />

      <div className="dashboard-container">
        <div className="dashboard-title-container">
          <h1 className="dashboard-title">{`${user.first_name}${" "}${
            user.last_name
          }${"'s"}${" Dashboard"}`}</h1>
        </div>
      </div>

      <div className="cards-container">
        {expenseFolders.map((expenseFolder) => (
          <div
            className="card"
            onClick={(e) => handleCardClick(expenseFolder, e)}
          >
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
          closeModal={setIsModalOpen}
          navLinks={navigation}
        />
      )}
    </div>
  );
};

export default Dashboard;
