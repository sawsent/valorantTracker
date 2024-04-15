import verify from "./verify.js";

export default async function getVerified(location, url, verifier) {
    const response = await fetch(url);
    const responseJson = await response.json();
    if (!verifier) {
        verify(location, responseJson);
    } else {
        verifier(location, responseJson);
    }
    
    return responseJson;
}