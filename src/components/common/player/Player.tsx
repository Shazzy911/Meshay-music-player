import Image from "next/image";
import React from "react";

const Player = () => {
  return (
    <div>
      <div>
        <Image
          src={
            "https://i.pinimg.com/236x/6b/3c/96/6b3c969068ec1cea4a84a30383eb2f09.jpg"
          }
          height={200}
          width={200}
          alt="Image not found"
          layout="responsive" // Automatically adjusts to the image's original dimensions
          objectFit="cover" // Fills the container without stretching
        />
        <div>
          <h4></h4>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Player;
