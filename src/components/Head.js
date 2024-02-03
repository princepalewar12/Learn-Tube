import React from "react";
import {
  MENU_ICON_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
} from "../utils/constants";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img className="h-8" src={MENU_ICON_URL} alt="hamburger-menu-icon" />
        <img className="h-8 mx-4" src={YOUTUBE_LOGO_URL} alt="youtube-logo" />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1 ">
        <img className="h-8" src={USER_ICON_URL} alt="User-Icon" />
      </div>
    </div>
  );
};

export default Head;
