function render(error) {
    $('#variable').attr("href", "./css/error.css");
    console.log(error);
    const main = $('#main');
    main.empty();
    
    const errorDiv = $('<div id="error-container"></div>');
    const heading = $('<h1>Error Occurred.</h1>');  // Create and set text for the heading
    const details = $('<p id="error-msg"></p>');

    details.html(error.data ? `Error ${error.data.status}: ${error.data.errors.map(err => `${err.message} (Code: ${err.code}, Global: ${err.global})`).join(", ")} <br> Location: ${error.location}` : JSON.stringify(error));
    
    errorDiv.append(heading); // Append the heading to the errorDiv
    errorDiv.append(details); // Append the details <p> to the errorDiv
    main.append(errorDiv); // Append the errorDiv to main
}

export default { render }
