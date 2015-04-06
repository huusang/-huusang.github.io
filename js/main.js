$(document).ready(function() {
    var myskill = $('.skills').html();
    var contact = $('.contact').html();

    $('.navbar').on('click','.item',function(event) {
        event.preventDefault();

        $(this).css('display','none');
        $('.item-cancel').css('display','block');
        $('.boxdrop').animate({'opacity':'.98'}, 300, 'linear');
        $('.box').animate({'opacity':'1'}, 300, 'linear');
        $('.boxdrop').css('height', $(document).height()- 120);
        $('.boxdrop,.box').show();
        $('.box').addClass('hightclass');
        $('.box').append(contact);
        $('.box').append( myskill );


    });
    $('.navbar').on('click','.item-cancel',function(event) {
        event.preventDefault();
        $('.box').html('');
        $('.box').removeClass('.hightclass');
        $(this).css('display','none');
        $('.item').css('display','block');
        $('.boxdrop').animate({'opacity':'0'}, 300, 'linear');
        $('.box').animate({'opacity':0}, 300, 'linear');
        $('.boxdrop,.box').css('display','none');

    });
});