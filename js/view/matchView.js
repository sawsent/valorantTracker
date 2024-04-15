function render() {

    $('#variable').attr("href", "./css/match.css");
    const root = $('#main');

    root.empty();
    root.append($('<h1 style="margin=100px">MATCH VIEW</h1>'))

}

export default { render }