import React, {Component} from "react";
import "./WeaklyForecast.css"

import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";

class WeaklyForecast extends Component{
    render() {
        let hourlyData ;
        let dailyData;
        if(this.props.info !== null){
            hourlyData = this.props.info.data.attributes.hourly
            dailyData = this.props.info.data.attributes.daily
        }
        return(
            <section className="weakly-forecast">
                <Hourly hourlyData = {hourlyData}/>
                <Daily dailyData = {dailyData}/>
            </section>
        )
    }
}

export default WeaklyForecast;