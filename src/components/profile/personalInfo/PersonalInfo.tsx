"use client";

import React, { useState } from "react";
import PersonalInfoBlock from "./PersonalInfoBlock";
import EditPersonalInfo from "./EditPersonalInfo";
import { IUser } from "@/types/userInterface";

const PersonalInfo = () => {
    const [showEdit, setShowEdit] = useState<boolean>(false);

    const editMockUser = (newUser: IUser) => {
        mockUser = newUser;
    };

    let mockUser: IUser = {
        name: "Юрий",
        lastname: "Герыш",
        surname: "Андреевич",
        birthDay: "06.01.2014",
        employmentDay: "15.05.2020",
        country: "Россия",
        city: "Красноярск",
        position: "UI/UX designer",
        email: "test@gmail.com",
    };

    return (
        <>
            {showEdit ? (
                <EditPersonalInfo
                    editMockUser={editMockUser}
                    setShowEdit={setShowEdit}
                    mockUser={mockUser}
                />
            ) : (
                <div className="bg-zinc-900 rounded p-4">
                    <div className="text-white w-full flex justify-between mb-4">
                        <p>Персональная информация</p>
                        <button
                            onClick={() => setShowEdit((prev) => !prev)}
                            className="text-xs text-zinc-500 hover:text-blue-500 transition delay-100">
                            Изменить
                        </button>
                    </div>

                    <div>
                        <div className="grid gap-6 mb-1 md:grid-cols-2">
                            <PersonalInfoBlock
                                title="Имя"
                                subTitle={mockUser.name}
                            />
                            <PersonalInfoBlock
                                title="Фамилия"
                                subTitle={mockUser.lastname}
                            />
                        </div>

                        <div className="mb-1">
                            <span className="block text-xs font-medium text-zinc-500">
                                Отчество
                            </span>
                            <p className="bg-gray-50 border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {mockUser.surname}
                            </p>
                        </div>

                        <div className="grid gap-6 mb-1 md:grid-cols-2">
                            <PersonalInfoBlock
                                title="Дата рождения"
                                subTitle={mockUser.birthDay}
                            />
                            <PersonalInfoBlock
                                title="Дата трудоустройства"
                                subTitle={mockUser.employmentDay}
                            />
                        </div>

                        <div className="grid gap-6 mb-1 md:grid-cols-2">
                            <PersonalInfoBlock
                                title="Страна"
                                subTitle={mockUser.country}
                            />
                            <PersonalInfoBlock
                                title="Город"
                                subTitle={mockUser.city}
                            />
                        </div>

                        <div className="grid gap-6 mb-1 md:grid-cols-2">
                            <PersonalInfoBlock
                                title="Должность"
                                subTitle={mockUser.position}
                            />
                            <PersonalInfoBlock
                                title="Электронная почта"
                                subTitle={mockUser.email}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonalInfo;
