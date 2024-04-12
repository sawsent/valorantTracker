function render(profile, matches) {
    
    const container = $('#container');
    container.empty();  // Clear the container before appending new content

    // Create card element with modern styling
    const card = $(`<div class="card mx-auto my-5 shadow" style="width: 20rem; border-radius: 15px; overflow: hidden;"></div>`);

    // Card body with internal padding and text content
    const cardBodyTop = $('<div class="card-body text-center"></div>');
    const name = $('<h5 class="card-title"></h5>').text(`${profile.name} #${profile.tag}`);
    const region = $('<p class="card-text text-muted"></p>').text(`Region: ${profile.region}`);
    const accountLevel = $('<p class="card-text px-3 py-1" style="border: 1px solid #ddd; border-radius: 10px; display: inline-block;"></p>').text(`Account Level: ${profile.account_level}`);

    // Append text elements to the top card body
    cardBodyTop.append(name);
    cardBodyTop.append(region);
    cardBodyTop.append(accountLevel);
    
    // Image with rounded corners
    const img = $(`<img src="${profile.card.large}" class="card-img-top" alt="Profile Card" style="border-radius: 15px object-fit: cover;">`);

    // Append the top card body and image to the card
    card.append(cardBodyTop);
    card.append(img);

    // Append the card to the container
    container.append(card);
};

function error(response, code, error) {

}

export default { render };