import React from 'react'

const RightCardContent = (props) => {
    
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex justify-between flex-col'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-8 w-8 flex justify-center items-center p-6'>{props.id}</ h2>
            <div>
                <p className='text-xl text-shadow-2xs leading-snug text-white mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor: props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='text-white font-medium px-3 py-2 rounded-full {props.color}'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent