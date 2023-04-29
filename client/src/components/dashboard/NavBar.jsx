import React from 'react'

function NavBar() {
  return (
    <>
      <div id='dashNav' className="w-full h-[150px] bg-black flex flex-row items-center border-b-2 border-white border-solid">
        <div className="w-full bg-gray-500 p-2">
          <div className="flex flex-row justify-between">
            <div className="text-[white]">Rugh Design</div>
            <div className="flex flex-row gap-8 text-[white]">
              <a className="text-[white]" href="/">
                Home
              </a>
              <a className="text-[white]" href="/create">
                Create Post
              </a>
              <a className="text-[white]" href="/editposts">
                Edit Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar