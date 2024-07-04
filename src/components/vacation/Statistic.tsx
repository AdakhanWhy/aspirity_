import Image from "next/image";
import React from "react";
import StatisticBlock from "./StatisticBlock";
import { CiCircleAlert } from "react-icons/ci";

const Statistic = () => {
    return (
        <div className="bg-zinc-900 mt-4 rounded text-zinc-300 p-4">
            <div className="flex items-center mb-2 relative group">
                <h3>Статистика</h3>
                <CiCircleAlert className="" />
                <p className="absolute right-0 bottom-5 transform -translate-x-1/2 mt-2 p-2 w-48 bg-zinc-700 text-zinc-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    1 раб. месяц = 3 дня отпуска
                </p>
            </div>

            <div className="flex justify-center items-center mb-3">
                <Image
                    src={"assets/progress/progress-bar.svg"}
                    alt="progress bar"
                    width={160}
                    height={160}
                />
            </div>

            <div>
                <StatisticBlock
                    color="bg-green-600"
                    title="Доступно сейчас"
                    days="32 дня"
                />
                <StatisticBlock
                    color="bg-yellow-500"
                    title="Запланировано"
                    days="8 дней"
                />
                <StatisticBlock
                    color="bg-red-600"
                    title="Использовано/недоступно"
                    days="4 дня"
                />
            </div>
        </div>
    );
};

export default Statistic;
