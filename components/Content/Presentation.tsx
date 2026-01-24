'use client'
import { FiZap, FiSearch, FiHeart, FiUsers } from "react-icons/fi";

export const Presentation = () => {
    return (
        <div className='px-5 lg:w-1/2'>
            <h2 className='py-10 lg:py-5 flex justify-center items-center gap-2'><FiZap /> What Makes Us Different ?</h2>
            <section className='lg:mt-15 flex flex-col space-y-10 
            [&_div]:flex [&_div]:flex-col [&_div]:gap-3 [&_div]:items-center [&_div]:text-center 
            [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:lg:text-2xl 
            [&_p]:text-sm [&_p]:text-gray-300 [&_p]:lg:text-xl [&_div]:hover:font-bold  '>

                <div>
                    <FiSearch className='text-4xl text-white' />
                    <h3 >Search</h3>
                    <p className='text-sm text-gray-300'>Find people who match your vibe with personalized tags</p>
                </div>
                <div className="hover:text-blue-500">
                    <FiUsers className='text-4xl text-blue-500' />
                    <h3>Friends</h3>
                    <p>Build genuine friendships where kindness comes first</p>

                </div>
                <div className="hover:text-fuchsia-500">
                    <FiHeart className='text-4xl text-fuchsia-500' />
                    <h3>Connect</h3>
                    <p>Ready for romance? We've got your back with match suggestions and activity alerts</p>
                </div>
            </section>
        </div>
    )
}
