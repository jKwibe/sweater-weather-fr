import React, {Component} from "react";

//Import CSS
import "./WeaklyForecast.scss"

// import components
import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";

class WeaklyForecast extends Component{
    render() {
        const { daily, hourly } = this.props.info.data.attributes

        return(
            <section style={{ marginTop: 20}}>
                <Hourly hourlyData = {hourly}/>
                <Daily dailyData = {daily}/>
            </section>
        )
    }
}

export default WeaklyForecast;