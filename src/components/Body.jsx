import React from "react";

const Body = () => {
    return (
        <div className=" -space-y-5 lg:flex lg:h-[380px]">
            <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end ">
                <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-[45deg] h-64 md:h-[100px] lg:h-[380px]" />
                <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-[100px] lg:h-[380px]" />
                <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-[100px] lg:h-[380px]"/>
                <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-[100px] lg:h-[380px]" />
            </div> 
            
            <div className="lg:flex-1 lg:order-1 lg:space-y-7">
                <h1 className="text-5xl font-bold font-playfair leading-tight lg:text-6xl">Host your website in less than 5 minutes.</h1>
                <p className="font-lato text-gray-400 lg:text-xl">With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>

                <form action="" className=" flex flex-col gap-4 md:flex-row">
                    <input className=" rounded-md px-4 py-3 placeholder:text-gray-400 lg:text-xl" type="email" placeholder="Enter Your Email"/>
                    <button className=" rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white lg:text-xl">Join Waitlist</button>
                </form>

                <div className=" flex gap-2">
                    <img src="./assets/Checkmark.svg" alt="check"/>
                    <p className=" font-lato text-gray-400 lg:text-xl">No spam ever. Unsubscribe anytime</p>
                </div>
            </div>
        </div>
    )
}

export default Body;