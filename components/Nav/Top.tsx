import Link from "next/link";

type TopProps = {
  logo: string;
}
export const Top = ({ logo }: TopProps) => {
  return (
    <>
      {/* Page Principale */}
      <div className='absolute w-full h-15 bg-linear-to-b from-black/85'>
        <Link href={'/'}><img className='w-10 m-3' src={logo} alt="" /></Link>
      </div>
    </>
  )
}
