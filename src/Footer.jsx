import React from "react";

const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <>
        <footer className="text-center bg-light">
            <p className=" my-3">&copy; {year} all right reserved</p>
        </footer>
        </>
    )
};
export default Footer;
