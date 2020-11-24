import React, {Component} from "react";
import "./CityInfo.css"

class CityInfo extends Component{

    render() {

        const { info } = this.props

        const unixTime = Date.now()
        let formattedDate = new Date(unixTime)
        let date = formattedDate.toLocaleString('en-US', {
            weekday: 'short',
            month: '2-digit',
            year: '2-digit'
        })

        let time = formattedDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        })

        return(
            <section className="city-info">
                <ul>
                    <li>
                        { info !== null && info.data.attributes.city }
                    </li>

                    <li>
                        { info !== null && info.data.attributes.state }
                    </li>

                    <li>
                        { info !== null && info.data.attributes.country }
                    </li>

                    <li>
                        { info !== null && info.data.attributes.current.temp }
                    </li>

                    <li>
                        { info !== null && info.data.attributes.current.weather_description }
                    </li>

                    <li>
                        <img src={ info === null? "" : info.data.attributes.current.icon } alt="weather icon"/>

                    </li>

                    <li>
                        { date }
                    </li>

                    <li>
                        { time }
                    </li>

                </ul>
            </section>
        )
    }
}

export default CityInfo;