const serverless = require('serverless-http'); // Library for running Express apps on AWS Lambda
const strapi = require('@strapi/strapi');
// Import your Strapi app instance

// Initialize your Strapi app
const strapiApp = strapi({ dir: __dirname });

// Create an Express.js app and use Strapi as middleware
const app = serverless(strapiApp);

// Lambda handler function
exports.handler = async (event, context) => {
  // Forward the HTTP event to the Express.js app
  const response = await app(event, context);

  // Return the response
  return response;
};
