import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const UserTab = () => {
    return (
        <div className="flex border border-slate-500 rounded-full justify-around items-center w-20 p-1 mr-1">
            <Image src={"/avatar.png"} alt="avatar" width={20} height={20} />
            <FaChevronDown color="gray" />
        </div>
    );
};

export default UserTab;
