import React from 'react'
import Tag from '../User/Tag';

type DescriptionProps = {
    description?: string;
    tags?: string[];
}
const Description = ({ description, tags }: DescriptionProps) => {
    return (
        <>
            <div className='lg:fixed  flex-col lg:bottom-20 lg:w-1/3 lg:h-40 rounded-2xl bg-white/10 flex justify-center text-center p-5'>
                {description}
                <div className='flex flex-wrap pt-5 justify-around'>

                    {tags && tags.map((tag, idx) => (
                        <Tag key={idx} text={tag} />

                    ))}
                </div>
            </div>

        </>
    )
}

export default Description