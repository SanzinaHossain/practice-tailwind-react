import React from 'react'
import PricingOption from '../PricingOption/PricingOption'

const Pricing = () => {
    const pricingOption=[
        {id:1,name:'Free',price:0,benefits:[
            'Lifetime free','Unlimited Deals','Unlimmited service'
        ]},
        {id:2,name:'Regular',price:120,benefits:[
            'Lifetime Regular','Unlimited Deals','Unlimmited service'
        ]},
        {id:3,name:'Premium',price:300,benefits:[
            'Lifetime Premium','Unlimited Deals','Unlimmited service'
        ]}
    ]
  return (
    <div className='bg-orange-400 p-6'>
        <h1 className='text-6xl font-mono text-center'>Best Deal of the Town</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consectetur doloremque labore tempora quibusdam delectus voluptates similique deleniti consequatur? Iusto reprehenderit veniam repellendus accusamus sequi perferendis, ea praesentium minus incidunt. Quos nihil earum impedit quas! Provident, quae necessitatibus! Reiciendis quos vitae facilis rem, ipsum assumenda, ducimus eaque voluptas soluta doloremque accusantium dicta accusamus laboriosam cumque iusto corrupti aspernatur voluptate iure fuga laudantium dolor odit error. Aperiam minus dolorem qui delectus deserunt, error, repudiandae consequatur tempora doloribus ducimus ad voluptatem, veniam pariatur veritatis ipsa tempore repellendus nulla quibusdam cumque.</p>
        <br/>
        <div className='grid md:grid-cols-3 sm:grid-cols-1  gap-3 rounded'>
            {
               pricingOption.map(p=><PricingOption
                   key={p.id}
                   p={p}
               ></PricingOption>)
            }
        </div>
    </div>
  )
}

export default Pricing