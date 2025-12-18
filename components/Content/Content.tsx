'use client'
import React, { useEffect, useState } from 'react'
import { Presentation } from './Presentation';
import { Pricing } from './Pricing';
import { Reviews } from './Reviews';
import { Contact } from './Contact';

export const Content = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/data/reviews.json')
            .then(response => response.json())
            .then(data => {
                console.log('>>>', data);
                setReviews(data);
            })
    }, []);

    return (
        <div className='[&_h2]:text-[1.5rem] '>

            <section>
                <Presentation text="" />
            </section>

            <section>
                <Pricing />
            </section>

            <section className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
                {
                    reviews.map((review: any) => (
                        <Reviews key={review.id} id={review.id} name={review.name} subject={review.subject} message={review.message} />
                    ))
                }
            </section>

            <section>
                <Contact />
            </section>


        </div>

    )
}
