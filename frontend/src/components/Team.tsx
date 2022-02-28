import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Team = () => {
  return (
    <div className="block bg-stone-300">
      <div className="mx-10 flex flex-row divide-x-2 divide-stone-800 py-10">
        <div className="flex h-48 w-3/5 flex-col">
          <h1 className="inline-block px-28 pt-10 text-4xl">Our Team</h1>
          <p className="inline-block px-28 pt-10 text-xl">
            Native houstonians.... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.{" "}
          </p>
        </div>
        <div className="flex w-2/5 flex-col md:flex-row">
          <ul className="space-y-4 pl-28 text-sm lg:text-base">
            <li className="flex flex-row items-center">
              <StaticImage
                as="div"
                className="h-2/12 m-7 flex w-2/12 px-2"
                objectFit="contain"
                src="../images/chris.png"
                alt="Sunset in the mountains"
              />

              <span className="text-2xl">Chris Lai</span>
            </li>
            <li className="flex flex-row items-center">
              <StaticImage
                as="div"
                className="h-2/12 m-7 flex w-2/12 px-2 shadow-lg"
                imgClassName="rounded-lg"
                src="../images/chris.png"
                alt="Sunset in the mountains"
              />

              <span className="text-2xl">Dexter Wande</span>
            </li>
            <li className="flex flex-row items-center">
              <StaticImage
                as="div"
                className="h-2/12 m-7 flex w-2/12 px-2"
                objectFit="contain"
                src="../images/chris.png"
                alt="Sunset in the mountains"
              />

              <span className="text-2xl">Jordan Chappell</span>
            </li>
            <li className="flex flex-row items-center">
              <StaticImage
                as="div"
                className="h-2/12 m-7 flex w-2/12 px-2"
                objectFit="contain"
                src="../images/chris.png"
                alt="Sunset in the mountains"
              />

              <span className="text-2xl">Alex Altman</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Team;
