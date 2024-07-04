import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const HomeLink = () => {
    return (
        <Link
            href={"/"}
            className="flex text-zinc-500 text-sm items-center mt-4 hover:text-white transition delay-100">
            <FaChevronLeft />
            <span>Вернуться к сотрудникам</span>
        </Link>
    );
};

export default HomeLink;
