import React from 'react'
import bgmiimg from '../images/bgmiimg.jpg';

const About = () => {
    return (
        <div className="p-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img className="h-48 w-full flex justify-center items-center" src={bgmiimg} alt="The game of Battle" />
            </div> 
        </div>
        <div className="p-8">
                <h1 className="uppercase tracking-wide text-xl text-red-600 font-bold">Battlegrounds Mobile India (BGMI)</h1>
                <p className="mt-2 font-medium text-gray-600">Battlegrounds Mobile India or BGMI is now available for download on all Android smartphone users.
                 The game is the official remake of the PUBG Mobile and brings back all of the features along with some extra additions.
                  That being said, game dynamics are more or less the same as the PUBG Mobile.<br /></p>
            </div>
    </div>
    )
}

export default About