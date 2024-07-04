import React from "react";

const PersonalInfoBlock = ({
    title,
    subTitle,
}: {
    title: string;
    subTitle: string;
}) => {
    return (
        <div>
            <span className="block text-xs font-medium text-zinc-500">
                {title}
            </span>
            <p className="bg-gray-50 border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {subTitle}
            </p>
        </div>
    );
};

export default PersonalInfoBlock;
