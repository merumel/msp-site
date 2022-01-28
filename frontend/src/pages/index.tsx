import React from 'react'
import Layout from '../components/Layout'
import Services from '../components/Services'
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
                <div className="flex relative shadow-lg shadow-indigo-400/50 mt-15 font-sans p-10 font-hairline self-start bg-stone-200">
                    
                    <div className="container justify-center w-1/2 h-1/2 p-20 ml-10">
                        <h1 className="text-3xl md:text-5xl text-black leading-tight">
                            Your Trusted IT Consultant - Serving You and Your business.
                        </h1>
                        <p className="text-lg pt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="container pr-6 mt-10 w-9/12 self-start">
                        <div
                            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
                            style={{
                            boxShadow:
                                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
                            }}
                        >
                            <div className="flex-1">
                                <div className="flex flex-row pb-1 items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 align-center justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                    </svg>
                                    <p>                                                
                                    <strong>Phone: </strong>
                                     XXX XXX XXX
                                    </p>
                                </div>
                                <div className="flex flex-row pb-1 items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>
                                    <strong>Email: </strong>
                                    xxx@xxx.com
                                    </p>
                                </div>
                                
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
                <div className="shadow-lg shadow-indigo-700/50">
                    <Services />
                </div>
                

            </div> 
        </Layout>

        )
}

export default IndexPage