import React from "react";
import { useState } from "react";

const Dashboard = () => {
  let classname = {
    selected: "item-selected",
    notSelected: "item-notSelected",
  };

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
      href: "#",
      current: false,
    },
    {
      name: "Settings",
      href: "#",
      current: false,
    },
    {
      name: "Sign Out",
      href: "#",
      current: false,
    },
  ]);

  const handleClick = (clickedItem) => {
    // Update the state to mark the clicked item as current
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: item.name === clickedItem.name,
      }))
    );

    console.log(clickedItem);
  };

  return (
    <div className="main">
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

      <div className="dashboard-title-container">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      <div className="cards"></div>
    </div>
  );
};

export default Dashboard;
