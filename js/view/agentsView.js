function render() {

    $('#variable').attr("href", "./css/agents.css");
    const root = $('#main');

    root.empty();
    root.append($('<h1 style="margin=100px">AGENTS VIEW</h1>'))

}

export default { render }