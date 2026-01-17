// 'use client';
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button"
import { Border } from "../Content/Border";
import { useState } from "react";
import Link from "next/link";

type SignupProps = {
    onClose: () => void;
}

export const Signup = ({ onClose }: SignupProps) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const [isSignin, setIsSignin] = useState(false);
    // Voir autocomplete input
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-screen bg-black/60 backdrop-blur-xl fixed'>
                <div>
                    <AiOutlineClose onClick={onClose} className="absolute top-0 right-0 m-3 text-2xl" />
                    <h2 className="text-3xl mb-10">{isSignin ? 'Sign In' : 'Sign Up'}</h2>
                    <form method='' className='space-y-4 [&_input]:text-lg [&_input]:w-[70vw] [&_input]:py-2 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_input]:focus:outline-0'>
                        <input className={`${isSignin ? 'hidden' : ''}`} type='text' name='name' placeholder='Your name' />
                        <input className={`${isSignin ? 'hidden' : ''}`} type='text' name='name' placeholder='Your Birth Day' />
                        <input type='number' name='email' placeholder='Your Phone Number' />
                        {isSignin ? <>
                            <input type='password' name='password' placeholder='Your Password' />
                        </> : ''}
                      <Link href={'/welcome'}> <Button className='px-5 mt-3 rounded-xs text-gray-300 block mx-auto border'>{isSignin ? 'Enter' : 'Create'}</Button></Link> 
                    </form>
                </div>

                <Border />

                <div>
                    <h2 className="text-xl mb-5 -mt-5">Or</h2>
                    <Button onClick={() => setIsSignin(!isSignin)} className="px-5 rounded-xs text-gray-300 bg-white/20 border">{isSignin ? 'Sign Up' : 'Sign In'}</Button>
                </div>

            </div>
        </>
    )
}
