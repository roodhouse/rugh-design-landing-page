import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import RecordList from "../mongoTest/recordList";
import "./styles.css";
import Auth from "../../utils/auth";

function Dashboard() {
  // const token = localStorage.getItem('token');
  const hasAccess = Auth.getToken();
  console.log(hasAccess.data.role);
  console.log(hasAccess.data.username);
  if (hasAccess.data.role !== "admin") {
    console.log("is not admin");
    return <h1>get out</h1>;
  } else {
    return (
      <div id="wrapper">
        <NavBar />
        <div
          id="mainContainer"
          className="w-full h-full min-h-[100%] flex flex-row"
        >
          <div
            id="menuWrapper"
            className="text-center text-white flex flex-col justify-center bg-[green]"
          >
            <Menu />
          </div>
          <div
            id="recordContainer"
            className="text-white flex flex-1 flex-col h-full bg-neutral-100"
          >
            <h1 className="p-4 text-xl text-[white] bg-black">Dashboard</h1>
            <div id="postContainer" className="flex-1 bg-[gainsboro]">
              <RecordList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
