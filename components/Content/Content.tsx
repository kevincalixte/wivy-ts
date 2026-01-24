'use client'
import { Presentation } from './Presentation';
import { Pricing } from './Pricing';
import { Reviews } from './Reviews';
import { Contact } from './Contact';
import { Border } from './Border';

export const Content = () => {

    return (
        <div className='[&_h2]:text-[1.5rem] lg:[&_h2]:text-3xl '>

            <div className='lg:flex lg:p-20 lg:min-h-screen lg:items-center'>
                <Presentation />
                <Border />
                <Pricing />
            </div>
            <Border />
            <Reviews />
            <Border />
            <Contact />

        </div>

    )
}
