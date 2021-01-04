import axios from "axios";

// Import configurations
import config from "../config";

const backgroundImage = async (location) => {
    const url = config.apiUrl
    return await
        axios.get(`${url}/background`,
            {
                params:{
                    location
                }
            }
        );
}

export default backgroundImage