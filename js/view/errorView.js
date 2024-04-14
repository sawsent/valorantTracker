function render(error) {
    const root = $('#main');
    root.empty();
    root.append($('<p style="margin=100px"></p>').text((JSON.stringify(error))));
}

export default { render }