import axios from "axios";

const weatherForecast = async (location) => {
    let res = await
    axios.get("https://sweater-weather-api-rails.herokuapp.com/api/v1/forecast",
        {
            params:{
                location
            }
        }
    );

    return res
}

export default weatherForecast