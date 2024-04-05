import React from 'react'
import Nav from './Nav'
import home from '../assets/home.png'
const Page1 = () => {
  return (
    <div className='w-full h-fit  grid grid-flow-row sm:grid-cols-2 grid-cols-1  justify-between'>
        <div className='w-full  sm:p-5'>
            <div className='flex justify-between'>
            <p className='font-semibold'>Logo</p>
            <i class="ri-menu-2-line text-2xl cursor-pointer sm:hidden"></i>
            </div>
            <div className='w-full h-[80%] flex items-center justify-center'>
                <div className='sm:w-[70%] sm:-ml-20 h-fit gap-5 flex flex-col justify-between'>
                    <h1 className='text-5xl font-bold mt-16 '>Healthy Food</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores corporis voluptatum consectetur magnam molestias necessitatibus voluptas aspernatur, exercitationem eaque quaerat. Molestias a dolor aperiam eveniet veritatis molestiae quis laboriosam.</p>
                    <div className=' bg-white flex gap-2 shadow-md'>
                        <input type="text" className='py-3 w-full px-3 bg-white outline-none text-gray-400' placeholder='Search your favourite food'/>
                        <i class="ri-search-line p-5 bg-pink-700"></i>
                    </div>
                    <div className='w-full h-32  flex gap-2'>
                        <div className='w-[35%] h-full p-5'>
                            <img src={home} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-[65%] h-full overflow-auto py-5 text-gray-600'>
                            <p className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatum obcaecati <br /> perspiciatis debitis, laudantium nobis <br /> harum nostrum illo quo in odio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex gap-5 sm:mt-0 sm:p-0'>
            <div className=''>
            <img src={home} className='sm:w-full sm:h-full object-cover' alt="" />
            </div>
            <Nav/>
        </div>
    </div>
  )
}

export default Page1