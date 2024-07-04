import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const EditPersonalInfoBlock = ({
    title,
    value,
    setInpVal,
    register,
    field,
    errors,
}: {
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    value: string;
    register: UseFormRegister<FieldValues>;
    field: string;
    errors: any;
}) => {
    const [inp, setInp] = useState<string>("");
    const inpHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInp(e.target.value);
        setInpVal(inp);
    }; // NOT WORKED!!! JUST TRIED ;-]

    return (
        <div>
            <label className="block text-xs font-medium text-zinc-500">
                {title}
            </label>
            <input
                {...register(field, {
                    required: "Обязательно",
                    minLength: { value: 3, message: "3 символа мин." },
                })}
                onChange={(e) => inpHandler(e)}
                value={inp || value}
                type="text"
                className="bg-gray-50 border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            />
            <div>
                {errors?.field && <p>{errors?.field?.message || "Error!"}</p>}
            </div>
        </div>
    );
};

export default EditPersonalInfoBlock;
