"use client";

import Image from "next/image";
import React, { useState } from "react";
import VacationModal from "./VacationModal";

const VacationHistory = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            {show ? (
                <VacationModal setShow={setShow} />
            ) : (
                <div className="bg-zinc-900 mt-4 rounded col-span-2 text-zinc-400">
                    <div className="flex justify-between items-center mb-2 p-4">
                        <h3 className="text-white">История отпусков</h3>
                        <button
                            onClick={() => {
                                setShow((prev) => !prev);
                            }}
                            className="text-zinc-500 hover:text-zinc-700">
                            Посмотреть все
                        </button>
                    </div>

                    <table className="w-full table-auto text-sm p-5">
                        <thead>
                            <tr className="border-b-2 border-zinc-500 text-zinc-500">
                                <th className="p-2 text-left">Типы</th>
                                <th className="p-2 text-left">Даты отпуска</th>
                                <th className="p-2 text-left">
                                    Количество дней
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 border-zinc-500">
                                <td className="p-2">Отпуск</td>
                                <td className="p-2 flex items-center">
                                    03 марта 2023
                                    <Image
                                        src={"assets/progress/arrow-right.svg"}
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="mx-2"
                                    />
                                    23 марта 2023
                                </td>
                                <td className="p-2">20</td>
                            </tr>
                            <tr className="border-b-2 border-zinc-500">
                                <td className="p-2">Отгул</td>
                                <td className="p-2 flex items-center">
                                    03 марта 2023
                                    <Image
                                        src={
                                            "assets/progress/arrow-right-red.svg"
                                        }
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="mx-2"
                                    />
                                    7 марта 2023
                                </td>
                                <td className="p-2">4</td>
                            </tr>
                            <tr className="border-b-2 border-zinc-500">
                                <td className="p-2">Отгул</td>
                                <td className="p-2 flex items-center">
                                    03 марта 2023
                                    <Image
                                        src={
                                            "assets/progress/arrow-right-red.svg"
                                        }
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="mx-2"
                                    />
                                    7 марта 2023
                                </td>
                                <td className="p-2">4</td>
                            </tr>
                            <tr className="border-b-2 border-zinc-500">
                                <td className="p-2">Отгул</td>
                                <td className="p-2 flex items-center">
                                    03 марта 2023
                                    <Image
                                        src={
                                            "assets/progress/arrow-right-red.svg"
                                        }
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="mx-2"
                                    />
                                    7 марта 2023
                                </td>
                                <td className="p-2">4</td>
                            </tr>
                            <tr>
                                <td className="p-2">Отгул</td>
                                <td className="p-2 flex items-center">
                                    03 марта 2023
                                    <Image
                                        src={
                                            "assets/progress/arrow-right-red.svg"
                                        }
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="mx-2"
                                    />
                                    7 марта 2023
                                </td>
                                <td className="p-2">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default VacationHistory;
