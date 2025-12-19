import Button from '../Button/Button';
import { FiMail } from 'react-icons/fi';

export const Contact = () => {
    return (
        <section className='flex flex-col items-center justify-center w-[90%] mx-auto mt-10'>
            <h2 className='mb-10 flex items-center gap-2'><FiMail />Contact Us</h2>
            <form method='POST' className='rounded-xs space-y-5'>
                <div className='space-y-2 [&_input]:w-full [&_input]:px-3 [&_input]:py-2 [&_input]:rounded-xs [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_input]:focus:outline-0'>
                    <input type='text' name='name' placeholder='Your name' />
                    <input type='email' name='email' placeholder='Your Email Address' />
                </div>
                <div>
                    <select name="subject" id="subject" className='w-full bg-white/8 rounded-xs px-3 py-2.5 '>
                        <option value="">Choose a subject</option>
                    </select>
                </div>
                <div>
                    <textarea name="text" id="text" maxLength={200} className='w-full h-36 bg-white/8 rounded-xs resize-none overflow-hidden p-3' placeholder='Your message'></textarea>
                </div>
                <div>
                    <Button className='w-full rounded-xs'>Submit</Button>
                </div>
            </form>
        </section>
    )
}
