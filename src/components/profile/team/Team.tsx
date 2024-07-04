"use client";

import React from "react";
import TeamMember from "./TeamMember";
import Image from "next/image";
import { ITeamMember } from "@/types/teamInterface";
import { IoMdClose } from "react-icons/io";

const teamMembers: ITeamMember[] = [
    {
        id: 2,
        name: "John Smith",
        imgUrl: "assets/team_members/Avatar.svg",
        position: "junior software developer",
    },
    {
        id: 3,
        name: "Sarah Brown",
        imgUrl: "assets/team_members/Avatar-2.svg",
        position: "junior software developer",
    },
    {
        id: 4,
        name: "David Taylor",
        imgUrl: "assets/team_members/Avatar-3.svg",
        position: "junior software developer",
    },
    {
        id: 5,
        name: "Ann Williams",
        imgUrl: "assets/team_members/Avatar-4.svg",
        position: "junior software developer",
    },
    {
        id: 6,
        name: "James Miller",
        imgUrl: "assets/team_members/Avatar-5.svg",
        position: "junior software developer",
    },
    {
        id: 7,
        name: "Henry Jones",
        imgUrl: "assets/team_members/Avatar-6.svg",
        position: "junior software developer",
    },
    {
        id: 8,
        name: "Charles Williams",
        imgUrl: "assets/team_members/Avatar-7.svg",
        position: "junior software developer",
    },
    {
        id: 9,
        name: "Jane Miller",
        imgUrl: "assets/team_members/Avatar-8.svg",
        position: "junior software developer",
    },
    {
        id: 10,
        name: "Sam Clark",
        imgUrl: "assets/team_members/Avatar-9.svg",
        position: "junior software developer",
    },
];

const Team = ({
    setShow,
}: {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="w-screen h-screen backdrop-blur-sm bg-zinc-800/70 mx-auto absolute top-0 right-0 flex justify-center items-center">
            <div className="bg-zinc-900 rounded text-white p-5 w-1/3">
                <div className="flex justify-between mb-5">
                    <h3 className="text-3xl">Команда</h3>

                    <Image
                        onClick={() => setShow((prev) => !prev)}
                        src={"exit.svg"}
                        alt="exit"
                        width={24}
                        height={24}
                    />
                </div>

                <ul className="text-white">
                    {teamMembers.map((member, idx) => (
                        <TeamMember key={idx} member={member} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Team;
