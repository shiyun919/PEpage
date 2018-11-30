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

//鼠标移动选中
/*$(function(){
    $("#selected li").click(function(){
      $(this).addClass("now").siblings().removeClass("now");
    });
  })*/


//鼠标移动选中，下方的内容也跟着切换
<script>
    $(document).ready(function(){
    // tab
        var $tab_li = $('.tab_menu li');
            $tab_li.hover(function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            var index = $(this).index();
            var childer = $(this).parents('.modular').find('.tab_info');
            console.log()
            childer.eq(index).show().siblings().hide();
        });
    });
</script>
