function render(profile) {
    console.log(profile);
    const container = $('#container');
    container.empty();  // Clear the container before appending new content

    // Create card element with modern styling
    const card = $(`<div class="card mx-auto my-5 shadow" style="width: 20rem; border-radius: 15px; overflow: hidden;"></div>`);

    // Image with top-rounded corners
    const img = $(`<img src="${profile.data.card.large}" class="card-img-top" alt="Profile Card" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">`);

    // Card body with internal padding and text content
    const cardBody = $('<div class="card-body text-center"></div>');
    const name = $('<h5 class="card-title"></h5>').text(`${profile.data.name} #${profile.data.tag}`);
    const region = $('<p class="card-text text-muted"></p>').text(`Region: ${profile.data.region}`);

    // Append elements to the card
    card.append(img);
    cardBody.append(name);
    cardBody.append(region);
    card.append(cardBody);

    // Append the card to the container
    container.append(card);
};



function error(response, code, error) {

}

export default { render };