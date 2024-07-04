import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import VacationTDate from "./VacationTDate";

const VacationModal = ({
    setShow,
}: {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="w-screen h-screen backdrop-blur-sm bg-zinc-800/70 mx-auto absolute top-0 right-0 flex justify-center items-center">
            <div className="bg-zinc-900 rounded w-2/5">
                <div className="bg-zinc-900 rounded col-span-2 text-zinc-400">
                    <div className="flex justify-between items-center mb-2 p-4">
                        <h3 className="text-white">История отпусков</h3>
                        <button
                            onClick={() => {
                                setShow((prev) => !prev);
                            }}
                            className="text-zinc-500 hover:text-zinc-700">
                            <IoMdClose color="gray" />
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
                                    <FaArrowRight color="yellow" />
                                    23 марта 2023
                                </td>
                                <td className="p-2">20</td>
                            </tr>
                            <VacationTDate
                                title="Отгул"
                                days={4}
                                icon={<FaArrowRight color="red" />}
                            />
                            <VacationTDate
                                title="Отгул"
                                days={4}
                                icon={<FaArrowRight color="red" />}
                            />

                            <VacationTDate
                                title="Отгул"
                                days={4}
                                icon={<FaArrowRight color="red" />}
                            />

                            <VacationTDate
                                title="Отгул"
                                days={4}
                                icon={<FaArrowRight color="red" />}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VacationModal;
