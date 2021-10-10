import React from "react";
import { Link } from "react-router-dom";
import { ProjectTopicTypeList } from "../types/HomeTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  pillars: ProjectTopicTypeList;
}

const PillarsHome: React.FC<Props> = ({ pillars }) => {
  return (
    <>
      <h1 className="text-center pt-10 text-3xl px-6">
        Our Pillars
      </h1>
      <div
        className="
          grid grid-rows-1 grid-cols-1
          gap-y-10 gap-x-10
          items-center
          justify-center
          ml-auto
          mr-auto
          xl:mb-12
          xl:mt-5
          mt-9
          mb-12
          place-items-center
          lg:grid-cols-2 lg:grid-rows-2
          max-w-3xl
        " 
      >
        {pillars.map((topic, key) => {
          return (
            <Link to={`/projects?topic=${encodeURI(topic.name)}`} key={key}>
              <div
                className={`
                  bg-gray-300
                  rounded-md
                  shadow-lg
                  cursor-pointer
                  max-w-xs
                `}
              >
                <img
                  src={cmsImg(topic.image)}
                  alt={topic.name}
                  className="rounded-t-md w-full object-fit object-center max-h-xs"
                />
                <h1 className="text-center pt-4 text-2xl px-3">{topic.name}</h1>
                <p className="text-center pt-2 pb-4 px-3">
                  {topic.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
  
    </>
  );
};

export default PillarsHome;
