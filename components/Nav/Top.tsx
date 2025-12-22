'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type TopProps = {
  logo: string;
}
export const Top = ({ logo }: TopProps) => {
  const pathname = usePathname();
  const isWelcome = pathname === '/welcome';

  return (
    <>
      {isWelcome ? '' :
        // Page Principale 
        <div className='absolute w-full h-15 bg-linear-to-b from-black/85'>
          <Link href={'/'}><img className='w-10 m-3' src={logo} alt="" /></Link>
        </div>
      }
    </>
  )
}
