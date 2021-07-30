import React from 'react';
import bgimg from '../images/bgimg.jpg';

const Home = () => {
    return (
        <div className="p-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0 ">
                    <img className="h-48 w-full flex justify-center text-align:center items-center" src={bgimg} alt="The game of Battle" />
                </div>
            </div>
            <div className="p-8">
                    <h1 className="uppercase tracking-wide text-xl text-red-600 font-bold">Battlegrounds Mobile India (BGMI)</h1>
                    <h2 className="mt-1 text-lg font-small-bold text-black">We are BGMI players, we don’t need beautiful, we need battery full.</h2>
                </div>
        </div>
    )
}
export default Home