import React from 'react'
import { GiTaurus } from 'react-icons/gi'
import Tag from './Tag'

type CardProps = {
    name: string;
    age: number;
    sign: any; // A changer
    description: string;
    badges: React.ReactElement[]; // A changer
    img: string;
    tags: string[];
    state?: string;
    verified?: string;
}

export const Card = ({ name, age, sign, img, tags, description, badges, state, verified }: CardProps) => {

    return (

        <article className='flex h-30 mb-5 bg-white/5 rounded-xl'>
            <img className='w-1/3 rounded-xl object-cover' src={img} alt="" />
            <div className='py-1 px-2'>
                <div className='h-1/5 flex text-sm items-center gap-2'>{name}{age}{sign} <span className='flex justify-end space-x-1.5 '>{badges.map((badge, id) => React.cloneElement(badge, { key: id }))}</span></div>
                <div className='h-16 overflow-hidden text-ellipsis text-xs pt-3'>
                    {description.length > 130 ? description.slice(0, 130) + "..." : description}
                </div>
                <div className='flex flex-wrap mt-1.5'>
                    {tags.slice(0, 4).map((text, id) => (
                        <Tag key={id} text={text} />
                    ))}
                </div>
            </div>
        </article>
  
        //Welcome
        //Favorite
        //Like
        //Message 
        //Notification
    )
}
