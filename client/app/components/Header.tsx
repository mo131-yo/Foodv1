import React from 'react'

export const Header = () => {
  return (
<div>
        <header className='w-full h-24 bg-black shadow-md px-10 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <img 
                src="Food Delivery Logo.png" 
                alt="Logo" 
                className='w-20 h-20 object-contain' 
            />
            <h1 className='text-orange-500 font-bold text-xl invisible md:visible'>
                Food Delivery
            </h1>
        </div>
    </header>
    <div className='flex items-center gap-6'>
            <div className='text-right hidden sm:block'>
                <p className='text-sm text-gray-500 font-medium'>Өдрийн онцлох:</p> 
                <p className='text-lg font-bold text-gray-800'>Амтат Цуйван</p>
            </div>
            <img 
                src="tsuivan.png" 
                alt="Tsuivan" 
                className='w-229 h-229 object-cover rounded-full border-4 border-orange-00 shadow-lg' 
            />
        </div>
</div>
  )
}