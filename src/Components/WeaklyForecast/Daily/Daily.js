import React, {Component} from "react";
import DailyRow from "../DailyRow/DailyRow";

import "./Daily.css"

class Daily extends Component{

    render() {
        const { dailyData } = this.props
        let count =0;
        return(
            <section className="daily-row__group">
                <hr/>
                { dailyData && dailyData.map((dailyData)=>(
                    <section key={count++}>
                        <DailyRow data = { dailyData }/>
                    </section>
                )) }
            </section>
        )
    }

}

export default Daily