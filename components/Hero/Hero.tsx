'use client'
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";// import { Button } from '../Button/Button';
import Button from '../Button/Button';
import { Signup } from '../Signup/Signup';

type HeroProps = {
    title: string;
    image: string;
};

export const Hero = ({ title, image }: HeroProps) => {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <section style={{ backgroundImage: `url(${image})` }} className={`flex flex-col ${showSignup ? 'justify-center' : 'justify-end pb-10 px-5'} items-center h-screen space-y-5 text-white text-center bg-cover bg-center`}>
            {
                showSignup ? (
                    <Signup onClose={() => setShowSignup(false)} />
                ) : (
                    <>
                        <h1 className='text-2xl'>{title}</h1>
                        <Button onClick={() => { setShowSignup(true); window.scrollTo(0, 0); }} className='px-8 bg-white/90'>Sign Up</Button>
                        <IoIosArrowDown className="mt-3 text-3xl animate-bounce" />
                    </>
                )
            }
        </section >
    )
}
