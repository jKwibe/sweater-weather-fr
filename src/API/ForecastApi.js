import axios from "axios";

// Import configurations
import config from "../config";

const weatherForecast = async (location) => {
    const url = config.apiUrl
    console.log('API called');
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