import React from 'react'
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaSnapchatGhost, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
type FooterProps = {
    visible: boolean;
}
export const Footer = ({ visible }: FooterProps) => {
    return (
        <>
            {visible ?
                <div className='flex flex-col items-center space-y-3 my-10'>
                    <span className="flex space-x-2 text-2xl">
                        <p className="text-[1.2rem]">Socials :</p>
                        <Link href={''}><FiFacebook className="hover:text-blue-600" /></Link>
                        <Link href={''}><FiInstagram className="hover:text-orange-600" /></Link>
                        <Link href={''}><FaSnapchatGhost className="hover:text-yellow-300" /></Link>
                        <Link href={''}><FaTwitter className="hover:text-blue-400" /></Link>
                        <Link href={''}><FaLinkedin className="hover:text-blue-700" /></Link>
                    </span>
                    <span className="flex space-x-2 [&__>a]:hover:underline">
                        <Link href={''}>Terms of Use - </Link>
                        <Link href={''}>Privacy Setting - </Link>
                        <Link href={''}>Cookie policy</Link>
                    </span>
                    <span>© 2025 Wivy. All Rights Reserved</span>
                </div>
                : null
            }
        </>

    )
}
