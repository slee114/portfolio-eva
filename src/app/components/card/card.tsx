import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Orientation from "@/app/types/Orientation";
import { OrientationDisplay } from "./orientationDisplay";

type CardProps = {
  className?: string;
  orientation?: Orientation;
  children: React.ReactNode;
  image?: StaticImport | string;
};

export const Card = ({
  className,
  orientation,
  children,
  image,
}: CardProps) => {
  return (
    <div className={`w-full border-b border-dark-brown-400 ${className}`}>
      <div className="flex flex-row mx-36 border-[1px] border-x-dark-brown-400 justify-center text-center ">
        {!orientation && children}

        {orientation && image && orientation === "regular" && (
          <OrientationDisplay
            orientation={orientation}
            rightChild={
              <Image
                className="border border-none rounded-[7rem] hover:duration-700 hover:rounded-none w-full "
                src={image}
                alt="This is an image of a color gradient background"
              />
            }
            leftChild={children}
          />
        )}

        {orientation && image && orientation === "inverted" && (
          <OrientationDisplay
            orientation={orientation}
            leftChild={
              <Image
                className="border border-none rounded-[7rem] hover:duration-700 hover:rounded-none w-full"
                src={image}
                alt="This is an image of a color gradient background"
              />
            }
            rightChild={children}
          />
        )}
      </div>
    </div>
  );
};
