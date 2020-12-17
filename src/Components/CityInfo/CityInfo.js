import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

// import project components
import SearchLocation from "../SearchLocation/searchLocation";

// import CSS
import "./CityInfo.css"

// import the style component
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

class CityInfo extends Component{
    state = {
        toggleDisplay: false,
        time: "",
        date:""
    }

    onFormDisplay = ()=>{
        this.setState({
            toggleDisplay: !this.state.toggleDisplay
        })
    }

    onHide =() =>{
        this.setState({
            toggleDisplay: false
        })
    }

    getTime = ()=>{
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

        return {
            time,
            date
        }
    }

    setTime = () => {
        setInterval(()=>{
            let moment = this.getTime()

            this.setState({
                time: moment.time,
                date: moment.date
            })
        }, 1000)
    }


    componentDidMount() {
        let dateTimeResult = this.getTime()
        this.setTime()

        this.setState({
            time: dateTimeResult.time,
            date:dateTimeResult.date
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.time !== this.state.time){
            this.setState({
                time: this.state.time,
                date: this.state.date
            })
        }
    }

    render() {
        const { current, country, city, state } = this.props.info.data.attributes

        return(
            <CoverBorder>
                <Row>
                    <Col>
                        <img src={ current.icon } alt="weather icon"/>
                        {  current.weather_description } <br/>
                        { Math.floor(current.temp) } &#8457;
                    </Col>
                    <Col>
                        { city },
                        { state } <br/>
                        { country } <br/>
                        { this.state.time }, { this.state.date } <br/>

                        <p
                            style={{ color: "blue"}}
                            onClick={this.onFormDisplay}
                        >Change favorite Location</p>{/* Change href route */}
                        { this.state.toggleDisplay && <SearchLocation hideForm={this.onHide} onSubmit={this.props.onChangeLoc}/>}

                    </Col>
                </Row>
            </CoverBorder>
        )
    }
}

export default CityInfo;