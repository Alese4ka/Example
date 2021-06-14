$(function () {
    $('#consult_btn').click(function () {
      $('#modal-1').addClass('modal_active');
      $('body').addClass('hidden');
    });
   
    $('.consult_form_end').click(function () {
      $('#modal-1').removeClass('modal_active');
      $('body').removeClass('hidden');
    });

    $('#modal-1').mouseup(function (e) {
        let modalContent = $(".modal_content");
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
          $(this).removeClass('modal_active');
          $('body').removeClass('hidden');
        }
      });
});

