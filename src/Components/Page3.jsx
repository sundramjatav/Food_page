import React from 'react'

const Page3 = () => {
    const arr = [
        {
            name:"Pick meals",
            icon:<i class="ri-cursor-line"></i>,
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia obcaecati ex eveniet nihil at.",
        },
        {
            name:"Choose Payment",
            icon:<i class="ri-money-dollar-circle-line"></i>,
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia obcaecati ex eveniet nihil at.",
        },
        {
            name:"Select Address",
            icon:<i class="ri-map-pin-line"></i>,
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia obcaecati ex eveniet nihil at.",
        },
        {
            name:"Fast Delivery",
            icon:<i class="ri-truck-line"></i>,
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia obcaecati ex eveniet nihil at.",
        },
    ]
    return (
    <div className='w-full h-fit py-10 bg-red-50'>
         <h1 className='text-center text-3xl font-semibold'>How It Works</h1>
         <div className='w-[90%] m-auto flex flex-wrap items-center gap-5 justify-between mt-10'>
           {arr.map(item=>(
            <div className='w-[270px] h-[300px] bg-white rounded-md gap-3 flex  items-center justify-center flex-col p-4'>
                <div className='bg-pink-700 rounded-full px-3 text-xl text-white py-2'>{item.icon}</div>
                <h1 className='text-center text-xl font-semibold'>{item.name}</h1>
                <p>{item.para}</p>
            </div>
           ))}
         </div>
    </div>
  )
}

export default Page3