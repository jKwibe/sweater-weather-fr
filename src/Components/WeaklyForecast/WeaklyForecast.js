import React, {Component} from "react";
import "./WeaklyForecast.css"

import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";

class WeaklyForecast extends Component{
    render() {
        const { daily, hourly } = this.props.info.data.attributes

        return(
            <section className="weakly-forecast">
                <Hourly hourlyData = {hourly}/>
                <Daily dailyData = {daily}/>
            </section>
        )
    }
}

export default WeaklyForecast;