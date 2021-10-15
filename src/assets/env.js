//These  variables can now be overwritten in your CI/CD pipeline
// or Docker image with the envsubst command.
//This command can create a new env.js file
//based one the template and replace the placeholders with environment variables.

/*
exple:
# Set environment variable
export API_ENDPOINT="https://new-api.myapp.com";

# Replace variables in env.js
envsubst < assets/env.template.js > assets/env.js

OR:
dockerfile:
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

docker run --env API_ENDPOINT="https://demo-api.myapp.com" my-container:latest
 */
(function(window) {
  window["EnvVar"] = window["EnvVar"] || {};

  // Environment variables
  window.EnvVar["productionMode"] = false;
  window.EnvVar["apiEndpoint"] = "http://localhost:5000";
  window.EnvVar["keycloackAuthUrl"] ='http://localhost:8080/auth';
  window.EnvVar["keycloackRealm"] ='Demo-Realm';
  window.EnvVar["keycloackClientId"] ='allure-ui';
  window.EnvVar["debug"]  = "";
})(this);
