import axios from "axios";

// Import configurations
import config from "../config";

const weatherForecast = async (location) => {
    const url = config.apiUrl
    return await
                axios.get(`${url}/forecast`,
                    {
                        params:{
                            location
                        }
                    }
                );
}

export default weatherForecast