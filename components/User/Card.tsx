import React from 'react'
import { GiTaurus } from 'react-icons/gi'
import Tag from './Tag'

type CardProps = {
    name: string;
    age: number;
    img: string;
    tags: string[];
}

export const Card = ({ name, age, img, tags }: CardProps) => {

    return (
        <div className='mt-23'>
            <article className='grid grid-cols-[30%__1fr] grid-rows-1 bg-white/5 m-5 rounded-xl '>
                <img className='size-30 object-cover' src={img} alt="" />
                <div className='text-xl ml-2 p-2'>{name}<span>{age} </span><GiTaurus className='inline' />
                    <div className='flex-wrap flex justify-between border'>
                        {tags.slice(0, 12).map((text, id) => (
                            <Tag key={text + id} text={text} />
                        ))}
                    </div>
                </div>
            </article>
        </div>

        //Welcome
        //Favorite
        //Like
        //Message 
        //Notification
    )
}
