import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/auth/realm/Rest-api/client/react-auth/",
    realm: "Restapi-app",
    clientId: "react-auth",

});

export default keycloak;
