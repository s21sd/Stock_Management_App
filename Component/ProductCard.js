
import React from 'react'

const ProductCard = ({ props }) => {
    return (
        <div class="text-gray-600 body-font flex justify-center items-center ">
            <div class="container px-4 py-2 mx-auto ">

                <div class="flex flex-wrap -m-4">
                    <div class="w-50 h-50  p-4">
                        <div class="flex ">
                            <div class="px-8 py-10  border-4 border-gray-200 rounded-xl bg-white ">
                                <h2 class="tracking-widest text-sm title-font font-medium  text-indigo-500 mb-1">{props.slug}</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{props.price}</h1>
                                <p class="leading-relaxed">{props.quantity}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard