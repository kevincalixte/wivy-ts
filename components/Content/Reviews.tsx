import { MdQuestionAnswer } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { FiHelpCircle } from "react-icons/fi";

type Review = {
    id: string;
    name: string;
    subject: string;
    message: string;
}

export const Reviews = () => {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [title, setTitle] = useState<string>('Ask Us Anything');

    useEffect(() => {
        fetch('/data/reviews.json')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => setTitle("Reviews are unavailable"));
    }, []);


    return (
        <>
            <h2 className='mb-10 flex justify-center items-center gap-2'><FiHelpCircle />{title}</h2>
            <section className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
                {
                    reviews.map((review) => (

                        <div className='flex justify-center shrink-0 max-w-[80%] px-2 snap-start'>
                            <article key={review.id} className='flex flex-col items-center gap-1 p-5 rounded-xs bg-gray-300 text-black hover:bg-white hover:cursor-pointer '>
                                <h3>{review.name}</h3>
                                <p className='text-xs text-black-300'>About : {review.subject}</p>
                                <p>{review.message}</p>
                                <p className='flex items-center self-end gap-1 pt-3 text-xs'>Show response<MdQuestionAnswer /></p>
                            </article>
                        </div>

                    ))
                }
            </section>
        </>

    )
}
