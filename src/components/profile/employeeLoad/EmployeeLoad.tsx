"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../UI/customButton/Button";
import EmployeeLoadBlock from "./EmployeeLoadBlock";
import Team from "../team/Team";

const EmployeeLoad = () => {
    const [show, setShow] = useState<boolean>(false);
    const showTeam = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            {show ? (
                <Team setShow={setShow} />
            ) : (
                <div className="text-white bg-zinc-900 p-6 rounded">
                    <div className="flex justify-between mb-5">
                        <p className="text-lg">Загрузка сотрудника</p>
                        <p className="text-xs text-orange-600">100%</p>
                    </div>

                    <div className="grid grid-cols-2 text-white">
                        <EmployeeLoadBlock
                            title="Название проекта"
                            descr="MedPoint 24"
                        />
                        <EmployeeLoadBlock
                            title="Тип проекта"
                            descr="Коммерческий"
                        />
                        <EmployeeLoadBlock
                            title="Ответственный"
                            descr="Анна Кузнецова"
                        />
                        <EmployeeLoadBlock
                            title="Команда"
                            img={
                                <Image
                                    className="hover:opacity-75"
                                    onClick={showTeam}
                                    src={"Avatar Group.svg"}
                                    alt="team"
                                    width={280}
                                    height={45}
                                />
                            }
                        />
                        <EmployeeLoadBlock
                            title="Сроки работы"
                            descr="03 марта 2023 &gt; 23 марта 2023"
                        />
                    </div>
                    <Button title="Посмотреть всю загрузку" />
                </div>
            )}
        </>
    );
};

export default EmployeeLoad;
