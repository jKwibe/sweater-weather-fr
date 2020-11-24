import React, {Component} from "react";
import "./CityInfo.css"

class CityInfo extends Component{

    render() {
        let unixTime = Date.now()
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
                        { this.props.info !== null && this.props.info.data.attributes.city }
                    </li>

                    <li>
                        { this.props.info !== null && this.props.info.data.attributes.state }
                    </li>

                    <li>
                        { this.props.info !== null && this.props.info.data.attributes.country }
                    </li>

                    <li>
                        { this.props.info !== null && this.props.info.data.attributes.current.temp }
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