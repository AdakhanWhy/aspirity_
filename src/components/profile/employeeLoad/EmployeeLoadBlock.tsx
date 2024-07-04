import React, { ReactElement } from "react";

const EmployeeLoadBlock = ({
    title,
    descr,
    img,
}: {
    title: string;
    descr?: string;
    img?: ReactElement;
}) => {
    return (
        <div className="text-xs text-white my-4">
            <h4 className="text-zinc-500 mb-1">{title}</h4>
            {descr ? descr : img}
        </div>
    );
};

export default EmployeeLoadBlock;
