$(function () {
    $('#submit').click(function () {
      $('#modal-2').addClass('modal_active');
      $('body').addClass('hidden');
    });
   
    $('.thnx_end').click(function () {
      $('#modal-2').removeClass('modal_active');
      $('body').removeClass('hidden');
    });

    $('#modal-2').mouseup(function (e) {
        let modalContent = $(".form_thnx");
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
          $(this).removeClass('form_thnx');
          $('body').removeClass('hidden');
        }
      });
});
