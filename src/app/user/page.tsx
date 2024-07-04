import HomeLink from "@/components/backButton/HomeLink";
import EmployeeLoad from "@/components/profile/employeeLoad/EmployeeLoad";
import PersonalInfo from "@/components/profile/personalInfo/PersonalInfo";
import React from "react";

export default function page() {
    return (
        <div>
            <HomeLink />

            <div className="grid grid-cols-2 gap-5 mt-5">
                <PersonalInfo />
                <EmployeeLoad />
            </div>
        </div>
    );
}
