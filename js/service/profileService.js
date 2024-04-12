async function getProfile(name, tag, render, error) {
    $.ajax({
        url: `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`,
        type: 'GET',
        data: null,
        async: true,
        contentType: 'application/json',
        success: render,
        error: error,
    });
}

export default { getProfile }