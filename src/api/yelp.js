import axios from 'axios'

const Axios = async (location, term) => {
    const response = await axios({
        method : 'get',
        url : `https://yelp-backend.netlify.app/.netlify/functions/search?location=${location}&term=${term}`
    })

    return response
}

export default Axios







