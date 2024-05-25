import verify from "./verify.js";

export default async function getVerified(location, url, verifier) {
    const response = await fetch(url + `${url.contains('?') ? '&' : '?'}api_key=HDEV-e3a9be99-1ce4-4f3f-a052-1a83b52c3da5`);
    const responseJson = await response.json();
    if (!verifier) {
        verify(location, responseJson);
    } else {
        verifier(location, responseJson);
    }
    
    return responseJson;
}