import React, {Component, Fragment} from "react";

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

import weatherForecast from "../../API/ForecastApi";
import backgroundImage from "../../API/BackgroundApi";

import "./MainCanvas.css"


class MainCanvas extends Component{
        state = {
            forecast: null,
            isLoaded: false,
            location: "denver,co",
            bgImage: ""
        }

        onLocationChange = (location)=> {
            this.setState({
                location: location
            })
        }

    async componentDidMount() {
        let res = await weatherForecast(this.state.location)
        let bgImage = await backgroundImage(this.state.location)
        this.setState({
            forecast: res.data,
            isLoaded: true,
            bgImage: bgImage.data.data.attributes.image_url
        })

        console.log(bgImage)

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.location !== prevState.location){
            let res = await weatherForecast(this.state.location)
            let bgImage = await backgroundImage(this.state.location)
            this.setState({
                forecast: res.data,
                bgImage: bgImage.data.data.attributes.image_url
            })
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {

        const { forecast, isLoaded } = this.state;
        console.log(this.state.bgImage)
        const backgroundStyle = {
            backgroundImage: `url(${this.state.bgImage})` ,
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
                                <CityInfo onChangeLoc={this.onLocationChange} info={forecast}/>
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
            <Fragment>
                <section>
                    <p>Loading...</p>
                </section>
            </Fragment>
        )
    }
}

export default MainCanvas;