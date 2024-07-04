import React from "react";
import { ITeamMember } from "@/types/teamInterface";
import Image from "next/image";

const TeamMember = ({ member }: { member: ITeamMember }) => {
    return (
        <li className="flex m-3 hover:opacity-75">
            <Image
                src={member.imgUrl}
                alt="team member"
                width={36}
                height={36}
            />

            <div className="ml-4 text-sm leading-4">
                <h4>{member.name}</h4>
                <p className="text-zinc-500 text-xs">{member.position}</p>
            </div>
        </li>
    );
};

export default TeamMember;
