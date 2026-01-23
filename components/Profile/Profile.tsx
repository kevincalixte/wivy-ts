
import { FaXmark } from 'react-icons/fa6';

type ProfileProps = {
	id: number;
}
const Profile = ({ id }: ProfileProps) => {
	const name = "name"
	const age = 28
	const status = "status"
	const verified = "verified"
	return (
		<>
			<div className="absolute min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/img/user/user1.jpg')" }}>
				<div className='flex items-center justify-between mx-3 mt-3'> <span>{name}, {age}, {status} {verified}</span>

					<FaXmark className='text-2xl' />
			
				</div>
			</div>
		</>
	)
}

export default Profile