$(document).ready(function () {
    var mainHeight = $("body").height() - ($("header").height() + $("nav").height() + $("footer").height()*2 +5);
    $("main").css({'height':mainHeight,'min-height':'380px'});
});