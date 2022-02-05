import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Team = () => {

    return(
        <div className="block bg-stone-300">
            <div className="flex flex-row divide-x-2 divide-stone-800 mx-10 py-10">
                <div className="flex flex-col w-3/5 h-48">
                    <h1 className="inline-block text-4xl px-28 pt-10">
                        Our Team
                    </h1>
                    <p className="inline-block text-xl px-28 pt-10">Native houstonians.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p>
                </div>
                <div className="flex w-2/5">
                    <ul className="space-y-4 text-sm lg:text-base pl-28">
                        <li className="flex flex-row items-center">
                            <StaticImage as="div" className="flex h-2/12 w-2/12 m-7 px-2" objectFit="contain" src="../images/chris.png" alt="Sunset in the mountains"/>

                            <span className="text-2xl">Chris Lai</span>
                        </li>
                        <li className="flex flex-row items-center">
                            <StaticImage as="div" className="flex h-2/12 w-2/12 m-7 px-2 shadow-lg" imgClassName="rounded-lg" src="../images/chris.png" alt="Sunset in the mountains"/>

                            <span className="text-2xl">Dexter Wande</span>
                        </li>
                        <li className="flex flex-row items-center">
                            <StaticImage as="div" className="flex h-2/12 w-2/12 m-7 px-2" objectFit="contain" src="../images/chris.png" alt="Sunset in the mountains"/>

                            <span className="text-2xl">Jordan Chappell</span>
                        </li>
                        <li className="flex flex-row items-center">
                            <StaticImage as="div" className="flex h-2/12 w-2/12 m-7 px-2" objectFit="contain" src="../images/chris.png" alt="Sunset in the mountains"/>

                            <span className="text-2xl">Alex Altman</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default Team;