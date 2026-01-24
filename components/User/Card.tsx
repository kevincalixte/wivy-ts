"use client"
import React from 'react'
import Tag from './Tag'
import { MdVerified } from 'react-icons/md';
import { RiRadioButtonFill } from 'react-icons/ri';

type CardProps = {
    name: string;
    age: number;
    sign: React.ReactElement;
    description: string;
    img: string;
    tags: string[];
    status: string;
    verified: boolean;
    onclick: React.MouseEventHandler;
}

export const Card = ({ name, age, sign, img, tags, description, status, verified, onclick }: CardProps) => {

    return (

        <article className='flex h-36 mb-5 bg-white/5 rounded-xl lg:w-[25%] hover:cursor-pointer hover:bg-white/10 hover:scale-105 transform-gpu transition-transform duration-300' onClick={onclick} >
            <img className='w-1/3 rounded-l-xl object-cover' src={img} alt="" />
            <div className='py-1 px-2 flex flex-col justify-between'>
                <div className='h-1/5 flex items-center gap-2'>{name}{age}{sign} <span className='flex justify-end space-x-1.5 '>
                    {status === 'connected' && <RiRadioButtonFill className='text-green-600' />}
                    {status === 'disconnected' && <RiRadioButtonFill className='text-gray-400' />}
                    {status === 'recent' && <RiRadioButtonFill className='text-orange-400' />}
                    {verified && <MdVerified className='text-blue-400' />}
                </span></div>
                <div className=' overflow-hidden text-ellipsis text-sm'>
                    {description.length > 60 ? description.slice(0, 60) + "..." : description}
                </div>
                <div className='flex flex-wrap space-x-0.5 pb-2'>
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
