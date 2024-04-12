import router from '/js/router.js';

$(document).ready(function() {
    $('#button').click(router.init);
    
})

function testRequest() {
    console.log("btn clicked")
    
}