import React, {Component} from "react";
import "./TopWeather.css";

class TopWeather extends Component{
    render() {
        const { info } = this.props

        return(
            <section className="top-weather-info">
                <ul>
                    <li>
                        weather description:{ info !== null && info.data.attributes.current.weather_description }
                    </li>

                    <li>
                        <img src={ info === null? "" : info.data.attributes.current.icon } alt="weather icon"/>
                    </li>

                    <li>
                      sunrise:   { info !== null && info.data.attributes.current.sunrise }
                    </li>

                    <li>
                       sunset:  { info !== null && info.data.attributes.current.sunset }
                    </li>

                    <li>
                      feels like:  { info !== null && info.data.attributes.current.feels_like }
                    </li>

                    <li>
                       uvi: { info !== null && info.data.attributes.current.uvi }
                    </li>

                    <li>
                       visibility: { info !== null && info.data.attributes.current.visibility }
                    </li>

                    <li>
                       humidity: { info !== null && info.data.attributes.current.humidity }
                    </li>
                </ul>

            </section>
        )
    }
}

export default TopWeather;