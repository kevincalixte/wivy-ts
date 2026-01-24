
import { useEffect, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

type ProfileProps = {
	id: number;
	onClose: () => void;
}
const Profile = ({ id, onClose }: ProfileProps) => {
	useEffect(() => {
		// Bloque le scroll uniquement sur mobile
		if (window.innerWidth < 1024) {
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = 'unset';
			};
		}
	}, []);

	const name = "name"
	const age = 28
	const status = "status"
	const verified = "verified"

	return (
		<div className='lg:flex lg:justify-center lg:mt-10'>
			<div className="z-20  absolute min-h-screen w-full bg-cover bg-center lg:min-h-0 lg:h-60 lg:fixed lg:z-20 lg:mt-20 lg:rounded-3xl lg:w-1/2  " style={{ backgroundImage: "url('/img/user/user1.jpg')" }}>
				<div className='flex items-center justify-between mx-3 mt-3'>
					<span className='lg:text-xl'>{name}, {age}, {status} {verified}</span>
					<FaXmark className='text-2xl lg:text-3xl cursor-pointer' onClick={onClose} />
				</div>
			</div>
		</div>
	)
}

export default Profile