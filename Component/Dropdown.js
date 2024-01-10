import React from 'react'

const Dropdown = ({ props }) => {

    return (
        <div className='flex justify-between items-center w-90'>
            {props.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h1>{item.slug}</h1>
                            <h1>{item.price}</h1>
                        </div>
                        <div>{item.quantity}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Dropdown