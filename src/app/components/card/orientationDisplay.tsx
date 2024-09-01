import Orientation from "@/app/types/Orientation";
import React from "react";

type OrientationComponentProps = {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  orientation: Orientation;
};

export const OrientationDisplay = ({
  leftChild,
  rightChild,
  orientation,
}: OrientationComponentProps) => {
  return (
    <>
      {orientation === "regular" && (
        <div className="flex flex-row w-full h-full">
          <div className="basis-48/100 my-auto">{leftChild}</div>
          <div className="basis-52/100 my-auto border border-l-dark-brown-400">
            {rightChild}
          </div>
        </div>
      )}
      {orientation === "inverted" && (
        <div className="flex flex-row w-full h-full">
          <div className="basis-52/100 h-full my-auto border border-r-dark-brown-400">
            {leftChild}
          </div>
          <div className="basis-48/100 my-auto ">{rightChild}</div>
        </div>
      )}
    </>
  );
};
