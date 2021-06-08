$(function(){
    $('form').submit(function(e) {
        var trueReturn = true;
        $('span').empty();
        
        $(':text').each(function() {
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

        $('#phone').each(function() {
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

/*$('[name="login"]').on("click keyup change blur", function() {
    if($(this).val().length >= 1 && $(this).val().length <= 12) { 
        $(this).html('<p>Осталось 3</p>'); } 
    else { $(this).attr('style', 'border: 1px solid red;'); 
    }
});*/
