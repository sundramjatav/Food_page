import React from 'react'

const Footer = () => {
  return (
    <div className='md:h-[40vh] h-fit w-full flex  justify-center mt-10 mb-5'>
            <div className="sectionwrapper flex flex-wrap md:justify-center gap-4 w-full md:items-center px-10 ">
            
            <div className="section w-[240px] h-fit flex flex-col gap-4">
                <div>
                <h1 className='font-black'>Company</h1>
                </div>
                <div className='flex flex-col justify-around gap-2'>
                    <p>About </p>
                    <p>Press</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Security </p>
                    <p>Driver Centre</p>
                </div>
            </div>
            
            <div className="section w-[240px] h-fit flex flex-col gap-4">
                <div>
                <h1 className='font-black'>About Rapidbox</h1>
                </div>
                <div className='flex flex-col justify-around gap-2'>
                <p>Our Story </p>
                    <p>Recipes</p>
                    <p>Nutrition</p>
                    <p>Resoures</p>
                    <p>Newsletter </p>
                    <p>Contact</p>
                </div>
            </div>
        
            <div className="section w-[240px] h-fit  flex flex-col gap-4">
                <div>
                <h1 className='font-black'>Service</h1>
                </div>
                <div className='flex flex-col justify-around gap-2'>
                    <p>Customer service</p>
                    <p>Recommend a restaurant</p>
                    <p>Signup a restaurant</p>
                    <p>Jobs </p>
                    <p>Press</p>
                    <p>Terms of user </p>
                </div>
            </div>
        
            <div className="section md:w-[240px] w-full h-[170px] ">
                <div>
                    <h1 className='font-black mb-5'>Subscribe Now</h1>
                </div>
                <div className='flex h-14 border  rounded-3xl items-center justify-between px-5'>
                    <input className='bg-transparent w-full px-2 outline-none' type="text" placeholder='text....'/>
                    <i class="ri-user-3-line"></i>
                </div>
                <button className='py-4 px-2 rounded-full  w-full mt-5 bg-pink-600'>Subscribe Now </button>
            </div> 
        </div>
        
    </div>
  )
}

export default Footer