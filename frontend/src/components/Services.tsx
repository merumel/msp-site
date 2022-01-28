import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {

    return(
        <div className="flex flex-col bg-slate-700 text-[#e4e4e4]">
            <h1 className="text-center text-2xl pt-20 text-indigo-700 font-bold">Our Services</h1>
            <strong className="text-center font-bold text-4xl">What We Offer</strong>
            <p className="text-base pt-6 text-center text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
            </p>
            <div className="mx-20">
                <div className="p-20 mt-15 font-sans grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-x-4 gap-y-14 auto-rows-auto font-hairline self-start">
                    
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-lg md:max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/code.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>
                             
                       
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/laptop_1.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/document.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>   
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/cloud.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>  
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/lock.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>           
                    <div className="flex justify-center items-center">
                        <div className="rounded shadow-lg bg-slate-500 max-w-md h-96 shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
                        <StaticImage as="div" className="flex h-1/3 w-1/4 m-7" objectFit="contain" src="../images/mail.png" alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 leading-6">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>                   
                        </div> 
                    </div>          
                </div>
            </div>
        </div>
        
    )
}
export default Services;