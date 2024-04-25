import React from "react";
import styles from "./Header.module.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ytLogo from "../assets/yt-logo.png";
function Header() {
  return (
    <header className={styles.header}>
      <section className="header__left">
        <MenuIcon className={styles.header__Micon} />
        <img src={ytLogo} alt="Youtube" className={styles.header__logo} />
      </section>
      <section className={styles.header__input}>
        <input placeholder="search" type="text" />
        <SearchIcon className={styles.header__inputbutton} />
      </section>
      <nav className={styles.header__icons}>
        <VideoCallIcon className={styles.header__icon} />
        <AppsIcon className={styles.header__icon} />
        <NotificationsIcon className={styles.header__icon} />
      </nav>
    </header>
  );
}

export default Header;
