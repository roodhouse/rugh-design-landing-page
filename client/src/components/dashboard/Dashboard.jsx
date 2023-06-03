import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import RecordList from "../mongoTest/recordList";
import "./styles.css";
import Auth from "../../utils/auth";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const hasAccess = Auth.getToken();
  console.log(hasAccess)
  if (hasAccess === '') {
    console.log('not logged in')
  }
  console.log(hasAccess.data.role);
  console.log(hasAccess.data.username);

  // This useEffect hook navigates to the "/" route if the user does not have the role "admin".
  useEffect(() => {
    if (hasAccess.data.role !== "admin") {
      console.log("is not admin");
      navigate("/");
    } 
  },[hasAccess.data.role]);
    
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

export default Dashboard;
