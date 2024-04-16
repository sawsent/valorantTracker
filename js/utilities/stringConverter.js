function getNormal(string) {
    let out = string.replaceAll('%20', ' ');
    out = out.replaceAll('+', ' ');

    return out;
}

function getUrl(string) {
    return string;
}

export default { getNormal, getUrl }