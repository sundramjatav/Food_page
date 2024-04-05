import React from 'react'

const Nav = () => {
    return (
        <div className='w-[8%] h-full py-5  flex-col gap-10  items-center justify-start hidden sm:flex'>
            <i class="ri-menu-2-line text-2xl cursor-pointer"></i>
            <div className='flex flex-col gap-14 '>
                <p class="inline-block transform rotate-90 text-pink-500 font-semibold cursor-pointer">Home</p>
                <p class="inline-block transform rotate-90 cursor-pointer">About</p>
                <p class="inline-block transform rotate-90 cursor-pointer">Offers</p>
                <p class="inline-block transform rotate-90 cursor-pointer">Contact</p>
            </div>
        </div>
    )
}

export default Nav