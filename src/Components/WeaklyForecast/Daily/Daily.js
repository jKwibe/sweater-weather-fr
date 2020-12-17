import React, {Component} from "react";
import DailyRow from "../DailyRow/DailyRow";

import "./Daily.scss"

class Daily extends Component{

    render() {
        const { dailyData } = this.props
        let count =0;
        return(
            <section className="daily-row__group">
                <hr/>
                { dailyData.map((dailyInfo)=>(
                    <section key={count++}>
                        <DailyRow data = { dailyInfo }/>
                    </section>
                )) }
            </section>
        )
    }

}

export default Daily