import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <section className="col-span-2 pl-5">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Home </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5 ">Subscriptions</h1>
      <ul>
        <li>music </li>
        <li>Sports</li>
        <li>Movie</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>music </li>
        <li>Sports</li>
        <li>Movie</li>
        <li>Gaming</li>
      </ul>
    </section>
  );
};

export default Sidebar;
