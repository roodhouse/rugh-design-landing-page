import React from 'react';
import Auth from "../../utils/auth";

function Menu() {
  function logOut() {
    Auth.logout()
  }
  return (
    <>
      <div
        id="menu"
        className="w-[150px] h-full bg-black relative float-left border-r-2 border-white border-solid"
      >
        <p className="text-[white] p-4 text-xl">Menu</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">Create Post</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu