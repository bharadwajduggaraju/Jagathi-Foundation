import React from "react";
import { PillarsListType } from "../types/AboutTypes";

interface Props {
  pillars: PillarsListType;
}

const Pillars: React.FC<Props> = ({ pillars }) => {
  return (
    <>
      <h1 className="text-4xl text-center">Our Pillars</h1>
      <div className="w-full bg-gray-300 my-10">
        <div
          className="
            flex
            justify-between
            items-center
            mx-auto
            max-w-7xl
            lg:flex-row
            flex-col
          "
        >
          {pillars.map((pillar, key) => {
            return (
              <div
                className={`pb-5 lg:pt-5 pt-3 ${
                  key === 1 ? "lg:pl-16" : "px-5"
                }`}
                key={key}
              >
                <span
                  className="iconify text-center w-10 m-auto my-3 text-5xl"
                  data-icon="mdi:pillar"
                  data-inline="false"
                ></span>
                <h1 className="text-3xl text-yellow-800">{pillar}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pillars;
