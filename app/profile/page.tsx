
"use client"
import React, { useEffect } from 'react'
import Bottom from '@/components/Nav/Bottom';
import { IoIosCloseCircle } from "react-icons/io";
import { Top } from '@/components/Nav/Top';
type profileProps = {
	id: number;
}
function profile({ id }: profileProps) {

	return (
		<>
<Bottom/>
		</>
		// 		<div className='fixed z-10 w-full h-full bg-black'>
		// <p>PROFILE</p>
		// 			<div>
		// 				<img className='absolute w-full h-full object-cover' src="/public/img/user/user1.jpg" alt="" />
		// 			</div>

		// 			<div className='relative'>
		// 				<div className='flex items-center justify-between p-5'>
		// 					<h1 className='flex flex-col font-bold text-xl'>Theo, 25 <span className='text-xs'>1.8 miles away</span></h1>
		// 					<IoIosCloseCircle onClick={onClose} className='text-3xl' />
		// 				</div>
		// 			</div>

		// 			<div className='relative w-full h-[20%]'>
		// 				<div>
		// 					{/* Informations */}
		// 				</div>
		// 			</div>

		// 			<Bottom />
		// 		</div>


	)
}

export default profile