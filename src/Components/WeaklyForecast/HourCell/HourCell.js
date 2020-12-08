import React, {Component} from "react";

import "./HourCell.css"

class HourCell extends Component{
    render() {
        return(
            <section className="hourly-weather">
                <div>
                    { this.props.data.time }<br/>
                    <img src={ this.props.data=== null? "" : this.props.data.icon } alt="weather icon"/>
                    { Math.floor(this.props.data.temp) }  &#8457;
                </div>
            </section>
        )
    }
}

export default HourCell;