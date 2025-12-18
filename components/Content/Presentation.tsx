'use client'
import React from 'react'
import { motion } from 'framer-motion';
import {FiHelpCircle, FiInfo} from 'react-icons/fi';

type PresentationProps = {
    text: string;
}
export const Presentation = ({ text }: PresentationProps) => {
    return (
        <motion.div className='flex flex-col items-center space-y-5'>
        <h2 className='flex items-center gap-2'><FiInfo/>About Us</h2>
            <motion.p
                className='p-5 text-center leading-7'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                >
               {text}
            </motion.p> 
         </motion.div>
    )
}
