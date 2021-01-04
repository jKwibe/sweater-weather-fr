//Import CSS
import "./WeaklyForecast.scss"

// import components
import Hourly from "./Hourly/Hourly";
import Daily from "./Daily/Daily";

const WeaklyForecast = ({ info }) => {
    const { daily, hourly } = info.data.attributes
    return(
        <section style={{ marginTop: 20}}>
            <Hourly hourlyData = {hourly}/>
            <Daily dailyData = {daily}/>
        </section>
    )
}

export default WeaklyForecast;