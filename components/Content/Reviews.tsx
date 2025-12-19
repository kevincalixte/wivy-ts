import { MdQuestionAnswer } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { FiHelpCircle } from "react-icons/fi";

export const Reviews = () => {

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
        <>
            <h2 className='mb-10 flex justify-center items-center gap-2'><FiHelpCircle />Ask Us Anything</h2>
            <section className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
                {
                    reviews.map((review: any) => (

                        <div className='flex justify-center shrink-0 max-w-[80%] px-2 snap-start'>
                            <article id={review.id} className='flex flex-col items-center gap-1 p-5 rounded-xs bg-gray-300 text-black hover:bg-white hover:cursor-pointer '>
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
