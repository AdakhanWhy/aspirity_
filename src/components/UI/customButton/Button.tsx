import React from "react";

const Button = ({
    title,
    save,
}: {
    title: string;
    save?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
    return (
        <button
            onClick={save}
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold mt-5 py-2 px-4 rounded">
            {title}
        </button>
    );
};

export default Button;
