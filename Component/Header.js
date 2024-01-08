import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.jpg'
const Header = () => {
    return (
        <header className="w-full text-gray-400 bg-[#ec3503] body-font">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <Image src={logo}
                        width={25}
                        height={25}
                        className='rounded-sm'
                        alt="Picture of the author" />
                    <span className="ml-3 text-sm">Stock Management App</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">First Link</a>
                    <a className="mr-5 hover:text-white">Second Link</a>
                    <a className="mr-5 hover:text-white">Third Link</a>

                </nav>

            </div>
        </header>
    )
}

export default Header