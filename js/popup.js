$(function(){
    $('form').submit(function (e) {
        var trueReturn = true;
        $('span').empty();       

        $(':text,#phone').each(function() {
            if ($(this).val().trim().length == 0) {
                $(this)
                .css('border', '2px solid red')
                .next()
                .html('<p>Обязательное поле</p>')
                
                trueReturn = false;
            }
            else {
                $(this).css('border-color', 'green');
            }
        });
    return trueReturn;
    });
})

$(document).ready(function() {
    $("#phone").mask("+375 99 999-99-99");
});
