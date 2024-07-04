import Statistic from "@/components/vacation/Statistic";
import VacationHistory from "@/components/vacation/VacationHistory";
import React from "react";

export default function page() {
    return (
        <div className="grid grid-cols-3 gap-3">
            <Statistic />
            <VacationHistory />
        </div>
    );
}
