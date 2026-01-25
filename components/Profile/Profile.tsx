
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { RiRadarFill, RiRadioButtonFill } from 'react-icons/ri';


type ProfileProps = {
	id: number;
	onClose: () => void;
}
const Profile = ({ id, onClose }: ProfileProps) => {
		useEffect(() => {
			// Bloque le scroll sur mobile
			if (window.innerWidth < 1024) {
				document.body.style.overflow = 'hidden';
			}
			// Masque la topbar
			const topElement = document.getElementById("top");
			if (topElement) {
				topElement.classList.add("hidden");
			}
			return () => {
				if (window.innerWidth < 1024) {
					document.body.style.overflow = 'unset';
				}
				if (topElement) {
					topElement.classList.remove("hidden");
				}
			};
		}, []);

	const name = "John Doe"
	const age = 25
	const status = <MdVerified />
	const verified = <RiRadioButtonFill className='text-green-500' />

	return (
		<div className='lg:flex lg:justify-center lg:mt-10'>
			<div className="z-20 min-h-screen w-full bg-cover bg-center lg:min-h-0 lg:h-100 lg:fixed lg:mt-20 lg:rounded-3xl lg:w-1/2" style={{ backgroundImage: "url('/img/user/user1.jpg')" }}>
				<div className='flex items-center justify-between mx-5 pt-3 '>
					<span className='flex items-center text-2xl gap-2'>{name}, {age}  {status} {verified}</span>
					<FaArrowLeft className='text-2xl lg:text-3xl cursor-pointer hover:scale-110' onClick={onClose} />
				</div>
			</div>
		</div>
	)
}

export default Profile