'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

type TopProps = {
  logo: string;
}
export const Top = ({ logo }: TopProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isWelcome = pathname === '/welcome';
  const isMessage = pathname === '/message';

  return (
    <div className="flex justify-center">

      <nav className={`
         ${isHome ? 'absolute w-full h-15 bg-linear-to-b from-black/85' : ''}
         ${!isHome ? 'mt-5' : ''}
         ${isWelcome ? 'py-3 fixed flex pl-5 items-center w-[90%] h-12 rounded-full backdrop-blur bg-white/20 text-white' : ''}
         ${isMessage ? '' : ''}
         
        `}>

        {/* Page Home */}
        {isHome && (
          <Link href={'/'}>
            <img className='w-10 m-3' src={logo} alt="" />
          </Link>
        )}

        {/* Page Welcome */}
        {isWelcome && (
          <Link href={'/'} className=''>
            <span className='flex items-center gap-2'>
              <FiSearch />
              <p className='text-md opacity-50'>What are you looking for today ?</p>
            </span>
          </Link>
        )}


      </nav>

    </div >
  )
}