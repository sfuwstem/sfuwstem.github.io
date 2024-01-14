//Adjusts height of the executive cards so they all look the same
$(document).ready(function() {
    // Find the maximum height among all cards
    var maxHeight = 0;
    $('.card').each(function() {
        var cardHeight = $(this).height();
        maxHeight = Math.max(maxHeight, cardHeight);
    });
    // Set the height of all cards to the maximum height
    $('.card').height(maxHeight);
});