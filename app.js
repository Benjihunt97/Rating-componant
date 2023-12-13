$(document).ready(() => {

    let rating = undefined;

    $('.rate').click((e) => {
        $(e.target).addClass('bg-orange-500');
        $(e.target).siblings().removeClass('bg-orange-500');
        $(e.target).addClass('text-white');
        $(e.target).siblings().removeClass('text-white');

        rating = $(e.target).val();
    });

    // hide the thank you msg
    $('.rate-sub').slideUp();

    let sendRating = () => {
        $('.user-rate').html(rating);
        $('.rate-box').slideUp(300);
        $('.rate-sub').slideDown(300);
    };

    $('.send').click(() => {
        sendRating();
    });

    // refresh page
    $('.fa-refresh').click(() => {
        location.reload();
    });

});
