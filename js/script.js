

//PAGETOP
$(document).ready(function(){
    $("#pageTop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#pageTop").fadeIn("fast");
        } else {
            $("#pageTop").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pageTop").css({
                "position":"fixed", 
                "bottom": footHeight + 20
            });
        } else { 
            $("#pageTop").css({
                "position":"fixed",
                "bottom": "120px" 
            });
        }
    });
    $('#pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

$(function(){
	$('.tokyo .areaName').click(function(){
		$('.tokyo .accordion a').toggleClass('on');
	});
    $(".area").hide();

    $(".tokyo .areaName").click(function(){
        $(".tokyo .area").slideToggle();
    });

    $(".kanagawa .areaName").click(function(){
        $(".kanagawa .area").slideToggle();
    });

    $(".saitama .areaName").click(function(){
        $(".saitama .area").slideToggle();
    });

});
$(function(){
	$('.kanagawa .areaName').click(function(){
		$('.kanagawa .accordion a').toggleClass('on');
	});
});
$(function(){
	$('.saitama .areaName').click(function(){
		$('.saitama .accordion a').toggleClass('on');
	});
});



