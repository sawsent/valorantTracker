import router from '/js/router.js';



$(document).ready(function() {
    router.init()
    $('#navSearch').click(() => window.location.hash = `/profile/${$('#username').val()}#${$('#tag').val()}`);
})



