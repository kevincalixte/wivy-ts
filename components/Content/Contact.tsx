import React from 'react'
import Button from '../Hero/Button/Button';

export const Contact = () => {
    return (
        <section className='flex flex-col items-center justify-center w-[90%] mx-auto '>
            <h2 className='mb-10'>Contact Us</h2>
            <form method='POST' className='rounded-xs space-y-5'>
                <div className='space-y-2 [&_input]:w-full [&_input]:px-3 [&_input]:py-2 [&_input]:rounded-xs [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_input]:focus:outline-0'>
                    <input type='text' name='name' placeholder='Your name' />
                    <input type='email' name='email' placeholder='Your Email Address' />
                </div>
                <div className=''>
                    <select name="subject" id="subject" className='w-full bg-white/8 rounded-xs px-3 py-2.5'>
                        <option value="">Choose a subject</option>
                    </select>
                </div>
                <div className=''>
                    <textarea name="text" id="text" maxLength={200} className='w-full h-36 bg-white/8 rounded-xs resize-none overflow-hidden p-3' placeholder='Your message'></textarea>
                </div>
                <div className=''>
                    <Button className='w-full rounded-xs'>Submit</Button>
                </div>
            </form>
        </section>
    )
}
