import axios from "axios";

// Import configurations
import Configs from "../config";

const weatherForecast = async (location) => {
    const url = Configs().apiUrl
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