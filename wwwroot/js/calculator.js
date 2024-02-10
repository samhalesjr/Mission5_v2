
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val();
        var rate = $('#rate').val();
        var total = hours * rate;
        $('#total').text(total.toFixed(2));
    });
});