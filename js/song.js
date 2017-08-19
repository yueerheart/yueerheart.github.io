/**
 * Created by Administrator on 2017/7/16.
 */
/*欢迎文字打印*/
$(function(){
   function typeText(element,speed){
       var text = $(element).text();
       $(element).html("");
       var types = 0;
       var time = setInterval(function(){
           if(types<text.length){
               $(element).append(text.charAt(types));
               types++;
           }else{
               this.clearInterval(time);
           }
       },speed);
       return true;
   }
    var speed = 60;
    var p1text = $("#welcome-my .p1").text().length*speed+speed;  //让p标签里面的文字打印完的时间
    typeText($("#welcome-my .p1"),speed);
    var times = setTimeout(function(){
        $("#welcome-my .p2").show();
        if(typeText($("#welcome-my .p2"),speed)){
            $("#btn-my").show();
        }
    },p1text);

    /*关于我跳转*/
    $("#btn-my1").on("click",function(){
        var section_top = $(".section").eq(0).offset().top;
        $("body").animate({
            scrollTop:section_top
        },"show")
    });
    /*我的作品跳转*/
    $("#btn-my2").on("click",function(){
        var section_top = $(".section").eq(3).offset().top;
        $("body").animate({
            scrollTop:section_top
        },"show")
    });
});

$(function () {
    /*页面图片轮播*/
   $(".bj-img li:nth-child(4)").show();
   setInterval(function(){
       var random = Math.round(Math.random()*4);
       $(".bj-img li").eq(random).fadeIn().siblings().fadeOut();
   },5000);

    //导航条显示
    $("#more").bind("click",function () {
        $(".fix").stop().slideToggle(300);
    });
    window.onscroll = function () {
        var bdscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(bdscrollTop); //滚动条高度
        if(bdscrollTop > 700){
            $("#nav-fix").addClass("fixed-nav");
        }else{
            $("#nav-fix").removeClass("fixed-nav");
        }
        /*滚动相应DVI导航字体加颜色*/
        $(".section").each(function () {
            var section_top = $(this).offset().top-100;
            var section_index = $(this).index()-1;
            if(bdscrollTop > section_top){
                $(".ul-display li").eq(section_index).addClass("on").siblings().removeClass("on");
                $(".ul-display.fix li").eq(section_index).addClass("on").siblings().removeClass("on");
                $(".section").eq(section_index).addClass("active");
            }
           // console.log($(this).offset().top);
        })
    };
    /*点击导航跳转到相应的块*/
    $(".ul-display li").click(function () {
       // var bdscrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        var index = $(this).index();
        var section_top = $(".section").eq(index).offset().top-70;
        if(index==0){
            section_top+=65;
        }
        $("body").animate({
            scrollTop:section_top
        },"slow");
    });

    window.onresize = function () {
        var body = document.body.clientWidth;
        console.log(body);
        if(body>1000){
            $("#xx").hide();
        }else if(body < 800){
            $("#xx li").click(function () {
                $("#xx").hide();
            })
        }
    }
})