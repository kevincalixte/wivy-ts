
import Link from 'next/link'
import { FiSearch, FiStar, FiUsers, FiHeart, FiMessageCircle, FiMessageSquare, FiHome, FiUser, FiInfo, FiPaperclip, FiSend, FiMic, FiSmile } from 'react-icons/fi';

type BottomProps = {
  isProfile: boolean;
}
function Bottom({ isProfile }: BottomProps) {

  return (

    <div className='flex justify-center'>
      {isProfile ?
        <nav className='z-20 fixed bottom-0 mb-5 flex items-center w-[50%] h-15 p-5 rounded-4xl backdrop-blur bg-white/10 text-white lg:top-100'>
          <ul className='flex items-center justify-around w-full text-2xl'>
            <li><button><FiInfo /></button></li>
            <li><button><FiStar /></button></li>
            <li><button><FiHeart /></button></li>
            <li><button><FiMessageSquare /></button></li>
          </ul>
        </nav>
        :
        <nav className='fixed bottom-0 mb-5 flex items-center w-[90%] h-15 p-3 rounded-4xl backdrop-blur bg-white/10 text-white lg:w-1/4'>
          <ul className='flex w-full gap-3 justify-evenly text-2xl'>
            <li><Link href={"/welcome"} className="flex items-center gap-1"><FiHome /></Link></li>
            <li><Link href={"/favorites"} className="flex items-center gap-1"><FiStar /></Link></li>
            <li><Link href={"/likes"} className="flex items-center gap-1"><FiHeart /></Link></li>
            <li><Link href={"/messages"} className="flex items-center gap-1"><FiMessageSquare /></Link></li>
            <li><Link href={"/account"} className="flex items-center gap-1">< FiUser /></Link></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default Bottom
