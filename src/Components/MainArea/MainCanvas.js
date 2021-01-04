import React, {useEffect, useState} from "react";

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

import weatherForecast from "../../API/ForecastApi";
import backgroundImage from "../../API/BackgroundApi";

import "./MainCanvas.scss"


const MainCanvas = () => {
    const [forecast, setForecast] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [location, setLocation] = useState('denver,co')
    const [bgImage, setBgImage] = useState('')

    const onLocationChange = (location) => {
        setLocation(location)
    }

    useEffect(() => {
        let data = async () => {
            let forecastData = await weatherForecast(location);
            let bgImage = await backgroundImage(location);

            if(forecast){
                setIsLoaded(true)
            }

            setForecast(forecastData.data)
            setBgImage(bgImage.data.data.attributes.image_url);
        }
        data()
    }, [location, forecast])

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