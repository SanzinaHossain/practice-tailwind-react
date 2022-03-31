import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react'

const PricingOption = (props) => {
    const {name,price}=props.p;
  return (
    <div className='bg-white p-4 rounded text-center'>
        <h1 className='bg-orange-300 text-2xl font-bold py-2 rounded'>{name}</h1>
        <p>
            <span className='text-3xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/month</span>
        </p>
        <br/>
        <div>
            <h3 className='text-2xl text-left'>Benefits:</h3>
             {
                 props.p.benefits.map(k=>
                    <p className='flex items-center'>
                    <CheckCircleIcon className='h-6 w-6 text-green-600 mr-2'></CheckCircleIcon>{k}
                    </p>
                    )
             }
           
        </div>
        <br/>
        <button className='bg-green-500 flex justify-center font-bold rounded w-full py-2 hover:bg-lime-400'>Buy Now<ArrowRightIcon className='ml-2 h-6 w-6 '></ArrowRightIcon></button>
    </div>
  )
}

export default PricingOption