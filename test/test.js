$(document).ready(function() {
    $('.filter-label').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('#filter-form').submit(function(e) {
        e.preventDefault();
        // Logic to apply filters goes here
    });
});

function toggleVisibility(id) {
    var element = document.getElementById(id);
    var parentDiv = element.previousElementSibling;  // This targets the .filter-label div
    parentDiv.parentNode.classList.toggle('expanded');  // Toggle the .expanded class on the .filter-group
}

