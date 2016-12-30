/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.4bf7aafc177f4bbfabd7ea02cf3b5ffd',
    clientSecret: '0c59f4e90218fa073abf5c2eb4f309379dc943b191cbe57ace77abfd2e0aaba0',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/skoppula/biometrics/alexa-app/samples/javaclient/certs/server/node.key',
    sslCert: '/home/skoppula/biometrics/alexa-app/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/skoppula/biometrics/alexa-app/samples/javaclient/certs/ca/ca.crt',
    products: {
        "skoppula_linux_box": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
