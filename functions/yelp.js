const axios = require('axios')

exports.handler = async (events) => {


    return {
        statusCode : 200, 
        body : JSON.stringify({"message" : "hello world"})
    }
}