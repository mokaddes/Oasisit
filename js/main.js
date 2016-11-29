$(function(){
    $("#search").click(function(){
        $(".search").fadeIn();
    });
});

$(function(){
    $(".btn-close").click(function(){
        $(".search").fadeOut();
    });
});