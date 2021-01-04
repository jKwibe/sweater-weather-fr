import React, {useEffect, useState} from "react";

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

import weatherForecast from "../../API/ForecastApi";
import backgroundImage from "../../API/BackgroundApi";

import "./MainCanvas.scss"


const MainCanvas = ({ forecast, setForecast, bgImage, setBgImage, location, setLocation}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLocationChange = (location) => {
        setLocation(location)
    }
    useEffect(()=>{
        Promise.all([weatherForecast(location), backgroundImage(location)])
            .then(res => {
                setForecast(res[0].data)
                setBgImage(res[1].data.data.attributes.image_url)
            })
        // eslint-disable-next-line
    }, [location])

    useEffect(() => {
        if(forecast){
            setIsLoaded(true)
        }
    }, [forecast])

    const backgroundStyle = {
        backgroundImage: `url(${bgImage})` ,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }

    if(isLoaded) {
        return (
            <main className="main-section " style={backgroundStyle}>
                <div className="container-fluid">
                    <section className="top-city-info row">
                        <article className="left-city-info col-6">
                            <CityInfo onChangeLoc={onLocationChange} info={forecast}/>
                        </article>

                        <article className="right-city-info col-6">
                            <TopWeather  info={forecast}/>
                        </article>
                    </section>
                    <CoverBorder className="row">
                        <section className="col-12">
                            <WeaklyForecast info={forecast}/>
                        </section>
                    </CoverBorder>
                </div>
            </main>
        )
    }

    return (
        <>
            <section>
                <p>Loading...</p>
            </section>
        </>
    )
}

export default MainCanvas;