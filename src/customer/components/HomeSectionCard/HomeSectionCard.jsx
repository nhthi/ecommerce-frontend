import React from 'react'

const HomeSectionCard = ({product}) => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border
        transition-transform transform ease-out hover:scale-105 hover:shadow-2xl duration-500'>
            <div className='h-[13rem] w-[10rem]'>
                <img
                    src={product?.image}
                    alt=''
                    className='w-full h-full object-cover object-top'
                />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Áo sơ mi nam</h3>
                <p className='mt-2 text-gray-500 text-sm'>Áo siêu đẹp tôn dáng dành cho Nam</p>
            </div>
        </div>
    )
}

export default HomeSectionCard
