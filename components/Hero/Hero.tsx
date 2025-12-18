import React from 'react'
import { IoIosArrowDown } from "react-icons/io";// import { Button } from '../Button/Button';
import Button from './Button/Button';

type HeroProps = {
    title: string;
    image: string;
};

export const Hero = ({ title, image }: HeroProps) => {
    return (
        <section style={{ backgroundImage: `url(${image})` }} className='flex flex-col justify-end items-center pb-10 space-y-5 text-white text-center min-h-screen bg-cover bg-center'>
            <h1 className='text-2xl'>{title}</h1>
            <Button className='px-8'>Sign Up</Button>
            <IoIosArrowDown className="text-3xl animate-bounce" />
        </section>
    )
}
