import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.jpg'
const Header = () => {
    return (
        <header className="w-full  text-gray-400 bg-[#ec3503] body-font">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <Image src={logo}
                        width={35}
                        height={35}
                        className='rounded-sm'
                        alt="Picture of the author" />
                    <span className="ml-3 text-lg font-bold">Stock Management App</span>
                </a>

            </div>
        </header>
    )
}

export default Header