import React from 'react'
import { Presentation } from './Presentation';
import { Pricing } from './Pricing';
import { Reviews } from './Reviews';
import { Contact } from './Contact';

export const Content = () => {
    return (

        <div className='[&_section]:min-h-screen [&_h2]:text-[1.5rem]'>
        
            <section>
                <Presentation image="/img/preview/preview1.png"/>
            </section>

            <section>
                <Pricing/>
            </section>
           
            <section>
                {/* <Reviews > */}
            </section>
            
            <section>
                <Contact/>
            </section>
        </div>
    )
}
