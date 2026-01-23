'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

type TopProps = {
  logo?: string;
}

export const Top = ({ logo }: TopProps) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isWelcome = pathname === '/welcome';

  return (
    <div className="flex justify-center">

      <nav className={`
        ${isHome ? 'absolute w-full h-15 bg-linear-to-b from-black/85' : ''}
        ${isWelcome ? 'mt-5 py-3 fixed flex pl-5 items-center w-[90%] h-12 rounded-full backdrop-blur bg-white/20 text-white' : ''}
      `}>

        {/* Home */}
        {isHome && (
          <Link href="/">
            <img className="w-10 m-3" src={logo} alt="logo" />
          </Link>
        )}

        {/* Welcome */}
        {isWelcome && (
          <span className="flex items-center gap-2">
            <FiSearch />
            <input
              className="focus:outline-0 w-[70vw] h-10"
              type="text"
              placeholder="What are you looking for today ?"
            />
          </span>
        )}
      </nav>
    </div>
  );
};