import React, { useEffect, useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ytLogo from "../assets/yt-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=manu`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between p-5 sticky top-0 z-50 bg-black ">
      <section className="flex">
        <MenuIcon
          className="cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img src={ytLogo} alt="Youtube" className=" h-6 object-contain ml-2" />
      </section>
      <section className="flex items-center border border-white rounded-full w-2/5 p-1">
        <input
          placeholder="      search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-none  outline-none bg-transparent "
        />
        <SearchIcon className="w-4  border-l border-white text-gray-500" />
      </section>
      <nav className="flex text-center text-gray-200">
        <VideoCallIcon className="mr-1" />
        <AppsIcon className="mr-1" />
        <NotificationsIcon className="mr-1" />
      </nav>
    </header>
  );
}

export default Header;
