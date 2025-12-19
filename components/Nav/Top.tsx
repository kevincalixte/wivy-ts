type TopProps = {
  logo : string;
}
export const Top = ({logo}: TopProps) => {
  return (
    <>
      {/* Page Principale */}
      <img className='absolute w-10 m-3' src={logo} alt="" />
    </>
  )
}
