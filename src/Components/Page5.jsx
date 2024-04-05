import React from 'react'

const Page5 = () => {
    const arr = [
       {
        image:"https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Rohit",
        work:"Food Bloger",
       },
       {
        image:"https://plus.unsplash.com/premium_photo-1661476065598-c2a3629c8c43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Ajay",
         work:"Food Bloger",
       },

       {
        image:"https://images.unsplash.com/photo-1647483684830-7ddde27dcf4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Chirag",
         work:"Food Bloger",
       },
       {
        image:"https://images.unsplash.com/photo-1518609819766-6c7ed22fa768?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Naman",
         work:"Food Bloger",
       },

    ]
    return (
    <div className='w-full h-fit py-5'>
    <h1 className='text-center text-3xl font-semibold'>Most Expert chefs</h1>
         <div className='w-[90%] m-auto flex flex-wrap items-center gap-5 justify-between mt-10'>
           {arr.map(item=>(
            <div className='w-[270px] h-[330px] bg-white rounded-md gap-3 flex  justify-center flex-col p-2'>
                <img className='w-full object-cover mb-4 h-[80%] object-top' src={item.image} alt="" />
                <h1 className='text-lg leading-3'>{item.name}</h1>
                <p>{item.work}</p>
            </div>
           ))}
         </div>
    </div>
  )
}

export default Page5