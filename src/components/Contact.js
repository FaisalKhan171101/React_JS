import React from 'react';
import Proimg from '../images/Proimg.jpeg';

const Contact = () => {
    return (
    <div className="p-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-55 w-full object-cover md:w-48" src={Proimg} alt="The Confident one" />
                </div>
                <div className="p-8">
                    <h1 className="uppercase tracking-wide text-xl text-indigo-500 font-Bold">Faisal Khan</h1>
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">20191CSE0147</h2>
                    <p className="mt-2 text-gray-800">Hello, Everyone !! I am Faisal Khan !!<br />This is my assignment-1 for REACT VAC</p>
                </div>
            </div>
            <div className="p-9">
                    <h3 className="uppercase tracking-wide text-xl text-red-600 font-bold">Contact Me ☎</h3>
                    <h4 className="mt-3 font-small text-grey-500">You can contact me <br />
                     <u>Email</u>-@faisalkhan@gmail.com<br />
                     <u>Instagram</u>-@faisal.amir.khan<br />
                     <u>Discord</u>-@Mr.Khanslopss<br />
                   </h4>
             </div>
        </div>
    )
}

export default Contact