import React from "react";
import DailyRow from "../DailyRow/DailyRow";

import "./Daily.scss"

const Daily = ({ dailyData }) => {
    return(
        <section className="daily-row__group">
            <hr/>
            { dailyData.map((dailyInfo, index)=>(
                <section key={index}>
                    <DailyRow data = { dailyInfo }/>
                </section>
            )) }
        </section>
    )
}

export default Daily