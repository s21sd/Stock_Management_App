import React from 'react'

const Dropdown = ({ props }) => {
    return (
        <div className='w-90 border border-gray-200 mb-2 rounded-xl'>
            <div className='flex w-90 justify-between items-center p-2'>
                <div>
                    <h1 className='text-[#ec3503] font-bold'>Name:- {props.slug}</h1>
                    <h1 className='text-gray-900 font-semibold'>Price:- ₹{props.price}</h1>
                </div>
                <div className='text-gray-900 font-semibold'>Quantity:- {props.quantity}</div>
            </div>

        </div>
    )
}

export default Dropdown