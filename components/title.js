import React from 'react'

export default function Title(props) {
  return (
    <>
        <div className='py-4 flex flex-wrap mx-auto justify-center'>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold  text-center'>{props.title}</h1>
                <div className='border-t-[2px] border-teal-300 '></div>
                <div className='w-[70%] mx-auto mt-[2px] border-t-[1px] border-teal-300 '></div>
            </div>

        </div>
    </>
  )
}
