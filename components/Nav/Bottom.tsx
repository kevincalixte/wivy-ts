
import Link from 'next/link'
import { FiSearch, FiStar, FiUsers, FiHeart, FiMessageCircle, FiMessageSquare, FiHome, FiUser, FiInfo, FiPaperclip, FiSend, FiMic, FiSmile } from 'react-icons/fi';
import Description from '../Profile/Description';
import { useState } from 'react';

type BottomProps = {
  isProfile: boolean;
}
function Bottom({ isProfile }: BottomProps) {

  const [description, showDescription] = useState(false);

  return (

    <div className='flex justify-center'>
      {isProfile ?
      <>
      {description ? <Description description='Young 25-year-old man, friendly and always smiling 😊. I enjoy going out with friends, traveling, and discovering new flavors 🍣✈️. Here to meet great people and share good times!
' tags={[ "Netflix", "Disney", "Computer", "Coffee"]}/> : ""}
        <nav className='z-20 fixed bottom-0 mb-5 flex items-center w-[50%] h-15 p-5 rounded-4xl backdrop-blur bg-white/10 text-white lg:top-140'>
          <ul className='flex items-center justify-around w-full text-2xl [&_li]:hover:scale-110'>
            <li ><button><FiInfo onClick={() => { showDescription(true)}} /></button></li>
            <li className=' hover:text-yellow-500'><button><FiStar /></button></li>
            <li className=' hover:text-fuchsia-500'><button><FiHeart /></button></li>
            <li><button><FiMessageSquare /></button></li>
          </ul>
        </nav>
      </>
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
