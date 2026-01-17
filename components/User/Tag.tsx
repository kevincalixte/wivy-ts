import React from 'react'

type TagProps = {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <div className='border border-white/5 shadow-2xl rounded-2xl w-12 h-6 text-xs bg-black/20 text-center'>{text}</div>
    )
}

export default Tag