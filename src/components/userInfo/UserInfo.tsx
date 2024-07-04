import React from "react";
import Image from "next/image";
import InfoButton from "./InfoButton";

const UserInfo = () => {
    return (
        <div className="text-white bg-zinc-900 rounded-xl w-full max-w-screen-lg mx-auto">
            <div className="flex flex-col lg:flex-row items-center p-5 lg:p-10">
                <Image
                    src={"/AvatarInfo.png"}
                    alt="avatar"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full"
                />

                <div className="lg:ml-10 mt-5 lg:mt-0 text-center lg:text-left">
                    <div className="text-3xl mb-3">
                        <p>Иванов</p>
                        <p>Иван Иванович</p>
                    </div>
                    <div className="text-xs text-zinc-500">
                        <p>UI/UX designer</p>
                        <p>Россия, Красноярск</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:justify-start lg:ml-10 pb-5">
                <InfoButton link="/user" title="Основная информация" />
                <InfoButton link="/vacation" title="Отпуск" />
            </div>
        </div>
    );
};

export default UserInfo;
