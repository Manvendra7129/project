import React from "react";
import ButtonList from "./ButtonList";
import VideoCointainer from "./VideoContainer";

function RecommendedVideo() {
  return (
    <section className=" border-l  col-span-10 ">
      <ButtonList />
      <VideoCointainer />
    </section>
  );
}

export default RecommendedVideo;
