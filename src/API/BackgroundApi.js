import axios from "axios";

// Import configurations
import Configs from "../config";

const backgroundImage = async (location) => {
    const url = Configs().apiUrl
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