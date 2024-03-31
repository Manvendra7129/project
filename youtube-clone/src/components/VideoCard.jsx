import React from "react";
import styles from "./VideoCard.module.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
function VideoCard({ image, title, channel, timeStrap, views, channelImage }) {
  return (
    <section className={styles.videoCard}>
      <img className={styles.videoCard__thumbnail} src={image} />
      <section className={styles.video__info}>
        <AccountBoxIcon
          className={styles.videoCard__avatar}
          alt={channel}
          src={channelImage}
        />
        <section className={styles.video__Text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} .{timeStrap}
          </p>
        </section>
      </section>
    </section>
  );
}
export default VideoCard;
