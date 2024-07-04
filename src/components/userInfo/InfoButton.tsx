"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const InfoButton = ({ title, link }: { title: string; link: string }) => {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <Link
            href={link}
            className={`${
                isActive ? "border-b-2 border-blue-700" : ""
            } p-1 m-1`}>
            {title}
        </Link>
    );
};

export default InfoButton;
