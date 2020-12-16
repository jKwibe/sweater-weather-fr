import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

// import CSS
import "./CityInfo.css"

// import the style component
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

class CityInfo extends Component{

    render() {

        const { info } = this.props
        console.log(info)

        const unixTime = Date.now()
        let formattedDate = new Date(unixTime)
        let date = formattedDate.toLocaleString('en-US', {
            day: '2-digit',
            month: 'long'
        })

        let time = formattedDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        })

        return(
            <CoverBorder>
                <Row>
                    <Col>
                        <img src={ info.data.attributes.current.icon } alt="weather icon"/>
                        {  info.data.attributes.current.weather_description } <br/>
                        { Math.floor(info.data.attributes.current.temp) } &#8457;
                    </Col>
                    <Col>
                        { info.data.attributes.city },
                        { info.data.attributes.state } <br/>
                        { info.data.attributes.country } <br/>
                        { time }, { date } <br/>

                        <a href="#c" rel="noreferrer">Change favorite Location</a>{/* Change href route */}

                    </Col>
                </Row>
            </CoverBorder>
        )
    }
}

export default CityInfo;