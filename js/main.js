$(document).ready(function() {

    $(".navigation ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".select-btn").click(function(){
        $(".select-block").toggleClass("show");
        $(".select").toggleClass("up");
    });
    $(".select-block ul li").click(function(){
        $(".select-block").removeClass("show");
        var year = $(this).text();
        $(".select").removeClass("up");
        $(".select-btn span").text(year)
    });



    $(".input-label input").focus(function(){
        $(this).siblings("span").addClass("toup");
        $(this).parent(".input-label").addClass("act");
        $(this).keypress(function(){
            $(this).siblings("span").addClass("purpure");
        })
    })
    $(".input-label input").focusout(function(){
        $(this).parent(".input-label").removeClass("act");
        $(this).siblings("span").removeClass("purpure");
        if(!$(this).val()) {
            $(this).siblings("span").removeClass("toup");
        }
    });
    $(".fakecheckbox, .skill span").click(function(){
        if($(this).hasClass("fakecheckbox")){
            $(this).toggleClass("checked");
        } else {
            $(this).siblings(".fakecheckbox").toggleClass("checked");
        }
        
    });
    $(".hamburger").click(function(event){
        $(".navigation ul").toggleClass("mobile");
    });
    $(".navigation ul li a").click(function(event){
        $(".navigation ul").removeClass("mobile");
    });
    (function($){
        $(window).on("load",function(){
            $(".mCustomScrollbar").mCustomScrollbar({
                theme: "dark"
            });
        });
    })(jQuery);

});


$(function() {
    var range = $('input[type="range"]');
    range.on('mouseenter', function() {
      var param = range.val();
      range.on('click', function() {
        param = range.val();
        bg(param);
      });
      range.on('mousemove', function() {
        param = range.val();
        bg(param);
      });
    });
  
    function bg(n) {
    range.css({
        'background-image': '-webkit-linear-gradient(left ,#ceb8ee 0%,#8a86c3 ' + n + '%,#e8e8e8 ' + n + '%, #e8e8e8 100%)'
      });
    }
  });