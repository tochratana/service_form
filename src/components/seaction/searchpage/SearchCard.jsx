import React from 'react'

export function SearchCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col mx-auto w-[200px] my-5">
        <img className="h-[200px] w-full" src="https://i.pinimg.com/564x/2b/f2/cc/2bf2cc224b03915e5bcfdae415012a75.jpg" alt="" />
        <div className='px-3 py-4'>
            <div className='font-bold text-xl mb-2'>Restaurants</div>
            <p className='text-gray-700 text-sm'>
                56 Places
            </p>
        </div>

    </div>
    );
};
