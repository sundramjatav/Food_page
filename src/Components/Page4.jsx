import React from 'react'

const Page4 = () => {
  return (
    <div className='w-full h-fit my-20'>
        <div className='w-[90%] h-fit m-auto flex flex-wrap gap-20 items-center justify-center'>
            <div className='w-[500px] h-full bg-slate-700'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='w-[500px] h-fit  py-8 p-5'>
                <h1 className='text-center sm:text-5xl text-4xl mb-5 font-semibold'>Order Your Favourite Food</h1> 
                <p className='mb-4 text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque cupiditate blanditiis cum quam exercitationem quae veritatis eveniet distinctio odit voluptates dolorum, sunt laboriosam veniam minus nostrum cumque neque! Ducimus.</p>
                <p className='mb-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas nihil quo, ipsa dolores alias aliquid magnam mollitia a neque.</p>
                <div className='flex flex-wrap gap-5'>
                    <img className='w-[200px] h-[100px] object-cover rounded-2xl' src="https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className='w-[200px] h-[100px] object-cover rounded-2xl' src="https://images.unsplash.com/photo-1555789185-76365931ffaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4