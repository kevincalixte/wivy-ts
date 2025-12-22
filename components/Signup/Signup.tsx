import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button"
import Link from "next/link";
import { Border } from "../Content/Border";

type SignupProps = {
    onClose: () => void;
}

export const Signup = ({ onClose }: SignupProps) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-screen bg-black/60 backdrop-blur-xl fixed'>
                <div>
                    <Link href={''}> <AiOutlineClose className="absolute top-0 right-0 m-3 text-2xl" /></Link>
                    <h2 className="text-2xl mb-5">Sign Up</h2>
                    <form method='' className='space-y-4 [&_input]:w-50 [&_input]:py-2 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_input]:focus:outline-0'>
                        <input type='text' name='name' placeholder='Your name' />
                        <input type='text' name='name' placeholder='Your Birth Day' />
                        <input type='number' name='email' placeholder='Your Phone Number' />
                        <Button className='px-5 mt-3 text-sm rounded-xs text-gray-300 block mx-auto border'>Validate</Button>
                    </form>
                </div>

                <Border />

                <div>
                    <h2 className="text-xl mb-5 -mt-5">Or</h2>
                    <Button className="px-5 text-sm rounded-xs text-gray-300 border">Sign In</Button>
                </div>

            </div>
        </>
    )
}
