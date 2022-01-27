import React from 'react'
import Layout from '../components/Layout'
import '../styles/curves.css'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import ServerIcon from "../assets/server-vec.svg";
import CityscapeImage from "../assets/cityscape.svg";
import CloudImage from "../assets/cloud.svg";
import CodeImage from "../assets/code.svg";
import LockImage from "../assets/lock.svg";
import ShieldGuardImage from "../assets/shieldguard.svg";
import DocumentImage from "../assets/document.svg"


const IndexPage = () => {
    return(
        <Layout bodyClass={null}>
            <div
            className="grid grid-cols-1 divide-y-0 items-center"
            > 
                <div className="flex mx-auto mt-15 font-sans p-10 font-hairline self-start ">
                    
                    <div className="container justify-center w-1/2 h-1/2 p-20 ml-10">
                        <h1 className="text-3xl md:text-5xl text-black leading-tight">
                            Your Trusted IT Consultant - Serving You and Your business.
                        </h1>
                        <p className="text-lg pt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="container pr-6 mt-10 self-start">
                        <div
                            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
                            style={{
                            boxShadow:
                                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
                            }}
                        >
                            <div className="flex-1">
                                <p>
                                    <strong>Phone: </strong>
                                    XXX XXX XXX
                                </p>
                                <p>
                                    <strong>Email: </strong>
                                    xxx@xxx.com
                                </p>
                            </div>
                            <p className="pr-9 text-lg text-slate-400">-OR-</p>
                            <div className="flex-initial mt-6 sm:mt-0">
                                <Link to="/contact">
                                    <button className="py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1">Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex justify-center mx-auto w-4/12 mt-5">
                        <CityscapeImage className="mx-auto"/>
                    </div>                      
                </div>
                
                <div className="p-20 mt-15 font-sans grid grid-cols-3 gap-10 items-center justify-center font-hairline self-start bg-[#e4e4e4] text-[#565656]">
                    <div className="col-span-3 pb-20 items-center">
                        <h1 className="text-center text-2xl">Our Services</h1>
                        <h2 className="text-center font-bold text-3xl">What We Offer</h2>
                        <p className="text-base text-center text-body-color">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                    <div className="md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8">
                        <StaticImage className="w-3/12 m-7" src="../images/code.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                   
                    </div>    
                    <div className="justify-center max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <StaticImage className="w-1/5 m-7" src="../images/laptop_1.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                   
                    </div>    
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <StaticImage className="w-1/5 m-7" src="../images/document.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                    
                    </div>  
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <StaticImage className="w-1/5 m-10" src="../images/cloud.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                    
                    </div>  
                    <div className="justify-center max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <StaticImage className="w-1/6 m-7" src="../images/lock.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                   
                    </div>                   
                    <div className="justify-center max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <StaticImage className="w-1/5 m-7" src="../images/mail.png" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>                   
                    </div>


                     
                </div>

            </div> 
        </Layout>

        )
}

export default IndexPage