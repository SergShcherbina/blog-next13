const contentfulManagement = require('contentful-management');
require('dotenv').config();

const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env;

module.exports = function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
    });

    return contentfulClient
        .getSpace(CONTENTFUL_SPACE_ID)
        .then((space: { getEnvironment: (arg0: string) => any }) => space.getEnvironment(CONTENTFUL_ENVIRONMENT!));
};
