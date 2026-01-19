import React from 'react'

type TagProps = {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <div className='border mb-1 border-white/5 shadow-2xl rounded-2xl w-[24%] px-3  h-5 text-xs flex justify-center bg-black/20'>{text}</div>
    )
}

export default Tag