import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const Pricing = () => {
    return (
        <section className='flex flex-col space-y-10 items-center justify-center [&_article]:flex [&_article]:flex-col [&_article]:justify-center [&_article]:items-center [&_article]:px-15 [&_article]:py-10  [&_article]:border [&_article]:w-[90%] [&_article]:border-white/20 [&_li]:flex [&_li]:items-center [&_li]:space-x-2 [&_li]:leading-7 [&_h3]:mb-5 [&_h3]:text-[1.2rem] '>
            <h2>Unlock More Features</h2>
            <article>
                <h3 >Free</h3>
                <ul>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>Unlimited chat</span>
                    </li>

                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>See who visited you</span>
                    </li>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-gray-400" />
                        <span>See who liked you</span>
                    </li>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-gray-400" />
                        <span>Ad-free experience</span>
                    </li>
                </ul>
            </article>

            <article>
                <h3 >Premium</h3>
                <ul>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>Unlimited chat</span>
                    </li>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>See who visited you</span>
                    </li>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>See who liked you</span>
                    </li>
                    <li>
                        <IoMdCheckmarkCircleOutline className="text-green-500" />
                        <span>Ad-free experience</span>
                    </li>
                </ul>
            </article>
        </section>
    )
}
