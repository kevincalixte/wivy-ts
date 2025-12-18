import React from 'react'
import { MdQuestionAnswer } from "react-icons/md";

type ReviewsProps = {
    id?: string;
    name: string;
    subject: string;
    message: string;

};

export const Reviews = ({ id, name, subject, message }: ReviewsProps) => {
    return (
        <div className='relative flex justify-center'>
            <article id={id} className='absolute flex flex-col items-center w-[80%] gap-1 p-5 rounded-xs bg-gray-300 text-black hover:bg-white hover:cursor-pointer'>
                <h3>{name}</h3>
                <p className='text-xs text-black-300'>About : {subject}</p>
                <p>{message}</p>
                <p className='flex items-center self-end gap-1 pt-3 text-xs'>Show response<MdQuestionAnswer /></p>
            </article>
        </div>
    )
}
