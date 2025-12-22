'use client'
import { Presentation } from './Presentation';
import { Pricing } from './Pricing';
import { Reviews } from './Reviews';
import { Contact } from './Contact';
import { Border } from './Border';

export const Content = () => {

    return (
        <div className='[&_h2]:text-[1.5rem] '>

            <Presentation />
            <Border />
            <Pricing />
            <Border />
            <Reviews />
            <Border />
            <Contact />
        
        </div>

    )
}
