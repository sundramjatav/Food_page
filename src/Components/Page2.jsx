import React from 'react'

const Page2 = () => {

    const arr = [
        {
            image:"https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"French Fries",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Food & Drink",
        },
        {
            image:"https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Strawberry",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Health & Wellness, Food & Drink",
        },
        {
            image:"https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Diet Foods",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Health & Wellness, Food & Drink",
        },
        {
            image:"https://images.unsplash.com/photo-1543668900-9124915a121f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Mix Fruits",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Health & Wellness, Food & Drink",
        },
        {
            image:"https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Barger",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Food & Drink",
        },
        {
            image:"https://images.unsplash.com/photo-1500315331616-db4f707c24d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Ots & Milk",
            price:"$56 - $45",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, officiis.",
            about:"Editorial, Health & Wellness, Food & Drink",
        },

    ]
    return (
        <div className='h-fit py-20'>
            <h1 className='text-center text-3xl font-semibold'>Dish of The Day</h1>
            <div className='sm:w-[95%] w-full m-auto h-fit grid mt-14 grid-flow-row gap-16 sm:grid-cols-2 grid-cols-1'>
               {arr.map((item)=>(
                <div className='w-full sm:h-44 h-40  p-5 overflow-hidden flex gap-4'>
                    <div className='w-[30%] h-full rounded-2xl overflow-hidden'>
                        <img  className='w-full h-full object-cover' src={item.image} alt="" />
                    </div>
                    <div className='w-[70%]'>
                        <h1 className='text-lg font-semibold'>{item.name}</h1>
                        <p className='text-sm'>{item.about}</p>
                        <p className='mt-2 whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal sm:text-clip'>{item.desc}</p>
                        <p className='font-bold text-pink-500'>{item.price}</p>
                    </div>
                </div>
               ))}
            </div>
            <div className='w-full flex items-center justify-center mt-14'>
                <button className='px-7 rounded-full bg-pink-700 focus:bg-pink-900 hover:bg-pink-800 text-white py-3'>View More</button>
            </div>
        </div>
    )
}

export default Page2