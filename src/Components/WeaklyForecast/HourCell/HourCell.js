import React, {Component} from "react";

import "./HourCell.scss"

class HourCell extends Component{
    render() {

        const {time, icon, temp} = this.props.data

        return(
            <section className="hourly-weather">
                <div>
                    { time }<br/>
                    <img src={ icon } alt="weather icon"/>
                    { Math.floor(temp) }  &#8457;
                </div>
            </section>
        )
    }
}

export default HourCell;