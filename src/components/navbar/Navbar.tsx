import Image from "next/image";
import React from "react";
import UserTab from "./UserTab";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className="w-4/5 m-auto">
            <nav className="w-full px-4 lg:px-8 h-20 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={"Logo.svg"}
                        alt="Logo"
                        width={150}
                        height={30}
                    />
                </div>

                <div className="flex items-center">
                    <UserTab />
                    <RxHamburgerMenu className="text-gray-500 ml-4" size={24} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
