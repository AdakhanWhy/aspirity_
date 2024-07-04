import React, { useState } from "react";
import Button from "../../UI/customButton/Button";
import { IUser } from "@/types/userInterface";
import EditPersonalInfoBlock from "./EditPersonalInfoBlock";
import { useForm } from "react-hook-form";

const EditPersonalInfo = ({
    editMockUser,
    setShowEdit,
    mockUser,
}: {
    editMockUser: (newUser: IUser) => void;
    setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
    mockUser: IUser;
}) => {
    const [inpVal, setInpVal] = useState<string>("");
    const save = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowEdit((prev) => !prev);

        const newUser: IUser = {
            name: inpVal,
            lastname: inpVal,
            surname: inpVal,
            birthDay: inpVal,
            employmentDay: inpVal,
            email: inpVal,
            position: inpVal,
            city: inpVal,
            country: inpVal,
        };
        editMockUser(newUser);
    };
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <div className="w-screen h-screen backdrop-blur-sm bg-zinc-800/70 mx-auto absolute top-0 right-0 flex justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-zinc-900 rounded p-4 top-36 w-3/6">
                <div>
                    <div className="grid gap-6 mb-1 md:grid-cols-2">
                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Имя"
                            value={mockUser.name}
                            register={register}
                            field="name"
                            errors={errors}
                        />

                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Фамилия"
                            value={mockUser.lastname}
                            register={register}
                            field="lastname"
                            errors={errors}
                        />
                    </div>

                    <div className="mb-1">
                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Отчество"
                            value={mockUser.surname}
                            register={register}
                            field="surname"
                            errors={errors}
                        />
                    </div>

                    <div className="grid gap-6 mb-1 md:grid-cols-2">
                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Дата рождения"
                            value={mockUser.birthDay}
                            register={register}
                            field="birthDay"
                            errors={errors}
                        />

                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Дата трудоустройства"
                            value={mockUser.employmentDay}
                            register={register}
                            field="employmentDay"
                            errors={errors}
                        />
                    </div>

                    <div className="grid gap-6 mb-1 md:grid-cols-2">
                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Страна"
                            value={mockUser.country}
                            register={register}
                            field="country"
                            errors={errors}
                        />

                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Город"
                            value={mockUser.city}
                            register={register}
                            field="city"
                            errors={errors}
                        />
                    </div>
                    <div className="grid gap-6 mb-1 md:grid-cols-2">
                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Должность"
                            value={mockUser.position}
                            register={register}
                            field="position"
                            errors={errors}
                        />

                        <EditPersonalInfoBlock
                            setInpVal={setInpVal}
                            title="Электронная почта"
                            value={mockUser.email}
                            register={register}
                            field="email"
                            errors={errors}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="Сохранить"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold mt-5 py-2 px-4 rounded"
                />

                {/* <button
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold mt-5 py-2 px-4 rounded"
                    onClick={save}>
                    Сохранить
                </button> */}
            </form>
        </div>
    );
};

export default EditPersonalInfo;
