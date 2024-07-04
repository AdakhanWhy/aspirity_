import React from "react";

const VacationTDate = ({
    icon,
    title,
    days,
}: {
    days: number;
    title: string;
    icon: any;
}) => {
    return (
        <tr className="border-b-2 border-zinc-500">
            <td className="p-2">{title}</td>
            <td className="p-2 flex items-center">
                03 марта 2023
                {icon}
                23 марта 2023
            </td>
            <td className="p-2">{days}</td>
        </tr>
    );
};

export default VacationTDate;
