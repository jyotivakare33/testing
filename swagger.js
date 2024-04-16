const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'Your API Description',
        },
        servers: [
            { url: 'http://localhost:3011' }, // Adjust the URL based on your server setup
        ],
    },
    apis: ['./index.js'], // Path to your API route files (adjust as needed)
};

const specs = swaggerJsdoc(options);

module.exports = specs;