export default function verify(location, response) {
    if (response.status && response.status != '200') {
        console.log(location, response);
        throw {
            location: location,
            data: response,
        }
    }
}