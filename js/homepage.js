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
    $("div.pro-title").find("li").each(function () {
        $(this).parent().parent().find("li").each(function (index, item) {
            $(item).click(function () {
                if (!$(item).hasClass("now")) {
                    $(item).addClass("now");
                    $(item).siblings("li").removeClass("now");
                    var $showDiv = $(item).parent().parent().siblings("div:not(div.pro-title)").eq(index);
                    $showDiv.show();
                    $showDiv.siblings("div:not(div.pro-title)").hide();
                }
            })
        })
    });	
    $("div.peKnowledge-t").find("li").each(function () {
        $(this).parent().parent().find("li").each(function (index, item) {
            $(item).click(function () {
                if (!$(item).hasClass("now")) {
                    $(item).addClass("now");
                    $(item).siblings("li").removeClass("now");
                    var $showDiv = $(item).parent().parent().siblings("div:not(div.peKnowledge-t)").eq(index);
                    $showDiv.show();
                    $showDiv.siblings("div:not(div.peKnowledge-t)").hide();
                }
            })
        })
    });	
});

//鼠标移动选中
/*$(function(){
    $("#selected li").click(function(){
      $(this).addClass("now").siblings().removeClass("now");
    });
  })*/



