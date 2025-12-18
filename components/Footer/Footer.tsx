import React from 'react'

type FooterProps = {
    visible: boolean;
}
export const Footer = ({ visible }: FooterProps) => {
    return (
        <>
            {visible ?
                <div>Footer</div>
                : null
            }
        </>

    )
}
