import React from 'react';

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: React.ReactNode;
}
    ;
function Button({ onClick, className, children }: ButtonProps) {
    return (
        <>
            <button onClick={onClick} className={`${className} py-2 font-normal rounded-3xl text-black hover:bg-white hover:text-black hover:scale-110 transition-all duration-200`}>
                {children}
            </button>
        </>
    );
}

export default Button;