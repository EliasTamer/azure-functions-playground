// FetchEndpointApp/index.js
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing request.');

    try {
        const generatedGuid = uuidv4();
        
        context.res = {
            status: 200,
            body: {
                guid: generatedGuid,
                timestamp: new Date().toISOString()
            }
        };
    } catch (error) {
        context.log.error('Error:', error);
        context.res = {
            status: 500,
            body: "Error generating GUID: " + error.message
        };
    }
}