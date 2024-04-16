function render() {
    $('#variable').attr("href", "./css/loading.css");
    const main = $('#main');

    main.empty();
    main.append($(`
        <div id=loading-box>
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    `))
}

export default { render }