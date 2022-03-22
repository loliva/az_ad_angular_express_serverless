const authenticationMiddleware = require("./authn");
const corsMiddleware = require("./cors");

module.exports = {
    azureAuth: authenticationMiddleware,
    cors: corsMiddleware
}
