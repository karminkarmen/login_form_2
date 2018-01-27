jQuery (document).ready(function($) {
    $(".toggle-button").on("click",function(){
        $(".frame-front").toggleClass("left");
        $(".signin-form, .signout-form").toggleClass("hidden");
    });
});

