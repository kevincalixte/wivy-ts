'use client'
import React from 'react'
import { motion } from 'framer-motion';

type PresentationProps = {
    image: string;
}
export const Presentation = ({ image }: PresentationProps) => {
    return (
        <motion.div className='flex flex-col items-center space-y-5'>
            <motion.p
                className='p-5 text-center leading-7'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Welcome to Wivy. Born in 2025, we're redefining how people connect. Chat, meet, and discover meaningful relationships in a space designed for authentic conversations.
            </motion.p>

            <motion.img
                className='w-[70%]'
                src={image}
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            />
        </motion.div>
    )
}
