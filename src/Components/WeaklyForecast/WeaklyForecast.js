import React, {Component} from "react";

//Import CSS
import "./WeaklyForecast.css"

// import components
import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";

// Import Styled Components
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

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