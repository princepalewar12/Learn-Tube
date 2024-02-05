import React, { useEffect, useState } from "react";
import {
  MENU_ICON_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSetsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // API Call

    // Make an Api call after every key press
    // But if the difference between 2 API calls is less than 200ms
    // Decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSetsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * -useEffect()
   * -start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component (useEffect return method)
   * - re-render the component
   * useEffect()
   * start timer => make api call after 200 ms
   *
   * setTimeout(200) = make an Api call
   */

  const getSearchSuggestions = async () => {
    console.log("API call: " + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const res = await data.json();
    // console.log(res[1]);
    setSetsuggestions(res[1]);

    // update Cache
    dispatch(
      cacheResults({
        [searchQuery]: res[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src={MENU_ICON_URL}
          alt="hamburger-menu-icon"
        />
        <a href="/">
          <img className="h-8 mx-4" src={YOUTUBE_LOGO_URL} alt="youtube-logo" />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2  border border-gray-400 px-6 py-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" fixed bg-white py-2 px-2 w-[36.5rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className=" py-3 shadow-sm hover:bg-gray-100 cursor-default"
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img className="h-8" src={USER_ICON_URL} alt="User-Icon" />
      </div>
    </div>
  );
};

export default Head;
