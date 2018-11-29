// JavaScript Document

/* ****�л� */
$(function(){
    $("div.classifyTitle").find("li").each(function () {
        $(this).parent().parent().find("li").each(function (index, item) {
            $(item).click(function () {
                if (!$(item).hasClass("now")) {
                    $(item).addClass("now");
                    $(item).siblings("li").removeClass("now");
                    var $showDiv = $(item).parent().parent().siblings("div:not(div.classifyTitle)").eq(index);
                    $showDiv.show();
                    $showDiv.siblings("div:not(div.classifyTitle)").hide();
                }
            })
        })
    });	
});
