/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import Profimg from '../images/Profimg.jpeg';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

const Nav = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Link to='/' >
                                            <button className='bg-blue-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                Home
                                            </button>
                                        </Link>
                                        <Link to='/about'>
                                            <button className='bg-blue-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                About 
                                            </button>
                                        </Link>
                                        <Link to='/contact'>
                                            <button className='bg-blue-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium' aria-current="page">
                                                {/* <span className="sr-only">View notifications</span> */}
                                                Contact 
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <Menu as="div" className="ml-3 relative ">
                                    <div>
                                        <img
                                            className="h-10 w-10 rounded-full content-end scale-105"
                                            src={Profimg}
                                            alt=""
                                        />
                                    </div>

                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to='/' >
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    Home
                                </button>
                            </Link>
                            <Link to='/about'>
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    About Me
                                </button>
                            </Link>
                            <Link to='/contact'>
                                <button className='bg-gray-900 text-white content-center block px-3 py-2 rounded-md text-base font-medium w-full' aria-current="page">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav