import React from "react";
import RecommendedVideo from "./RecommendedVideo";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <main className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default Body;
