import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ props }) => {
    return (
        <div className="text-gray-600 body-font flex justify-center items-center ">
            <div className="container px-4 py-2 mx-auto ">

                <div className="flex flex-wrap m-4">

                    <div className="w-40 h-40 p-2">
                        <div className="px-7 py-3 border-4 border-gray-200 rounded-xl bg-white ">
                            <h1 className="tracking-widest text-sm title-font font-bold  text-[#ec3503] mb-2">{props.slug}</h1>
                            <div className='flex justify-center items-center mt-4 gap-3'>
                                <div>
                                    <h2 className="title-font text-sm font-medium text-gray-900 m-2">Price: ₹{props.price}</h2>
                                    <p className="leading-relaxed text-sm">Quantity:{props.quantity}</p>
                                </div>
                                <div>
                                    <button><FontAwesomeIcon icon={faCirclePlus} /></button>
                                    <button><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard