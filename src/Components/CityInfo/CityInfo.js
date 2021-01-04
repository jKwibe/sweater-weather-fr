import React, {useEffect, useState} from "react";
import { PropTypes } from 'prop-types';
import {Row, Col} from "react-bootstrap";
import {countries} from "country-data"

// import project components
import SearchLocation from "../SearchLocation/searchLocation";

// import CSS
import "./CityInfo.scss"

// import the style component
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

const CityInfo = ({onChangeLoc, info}) =>{
    const [ toggleDisplay, setToggleDisplay] = useState(false)
    const [ time, setTime] = useState('')
    const [ date, setDate] = useState('')

    const onFormDisplay = ()=>{
        setToggleDisplay(!toggleDisplay)
    }

    const onHide =() =>{
        setToggleDisplay(false)
    }

    const getTime = ()=>{
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

    const setDateTime = () => {
        let interval =setInterval(()=>{
            let moment = getTime()
            setDate(moment.date)
            setTime(moment.time)
        }, 1000)
        return interval;
    }

    useEffect(()=>{
        let dateTimeResult = getTime()
        let inter = setDateTime()
        setTime(dateTimeResult.time)
        setDate(dateTimeResult.date)
        return () => {
            clearInterval(inter)
        }
        // eslint-disable-next-line
    }, [time, date])


    const { current, country, city, state } = info.data.attributes


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
                    { countries[country].name } <br/>
                    { time }, { date } <br/>

                    <div
                        className="btn btn-location "
                        style={{ color: "", fontWeight: "bold", textTransform: "capitalize"}}
                        onClick={onFormDisplay}
                    >Change favorite Location</div>{/* Change href route */}
                    { toggleDisplay && <SearchLocation hideForm={onHide} onSubmit={onChangeLoc}/>}

                </Col>
            </Row>
        </CoverBorder>
    )
}

CityInfo.prototype = {
    info: PropTypes.object.isRequired,
    onChangeLoc: PropTypes.func.isRequired
}

export default CityInfo;