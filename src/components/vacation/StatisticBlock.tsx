import React from "react";
import { FaRegCircle } from "react-icons/fa";

const StatisticBlock = ({
    title,
    days,
    color,
}: {
    title: string;
    days: string;
    color: string;
}) => {
    return (
        <div className="flex rounded-lg border border-zinc-700 justify-between p-3 text-sm mb-2 hover:border-zinc-400">
            <div className="flex items-center">
                <FaRegCircle className={`${color} rounded-full`} />
                <p className="ml-1">{title}</p>
            </div>
            <p>{days}</p>
        </div>
    );
};

export default StatisticBlock;
