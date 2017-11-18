/*
* @Author: jiayi
* @Date:   2017-10-28 21:58:27
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-18 18:05:59
*/

jQuery(document).ready(function($) {

$(".nav-ul-div").click(function(event) {
	if($(this).next().is(':visible')== false)
	{
		$(".nav-ul ul").slideUp();
	}
    
    $('.nav-ul-div>i').not( $(this).find('.toggle-i') ).addClass('fa-chevron-right').removeClass('fa-chevron-down');
    $(this).find('.toggle-i').toggleClass('fa-chevron-right fa-chevron-down');

    $(this).next().slideToggle();

    $('.nav-ul-div').removeClass('activecolor');  
    $(this).addClass('activecolor');

    $('.div-inner-ul li').removeClass('inner-active'); 
    
    //设置主界面为none
    // $('#comment-relate').css('display', 'none');
});

$(".div-inner-ul li").click(function(event) {
	$('.div-inner-ul li').removeClass('inner-active');
	$(this).addClass('inner-active');
});

/*
 *关联js
*/
 
    $(".div-inner-ul li").click(function(event) {
        var id=$(this).attr("id");
        var path="../page/" + id +".html";
        setBread(id);
         $.ajax({
             url: path,
             cache: false,
             success: function(html){
                 $("#comment-relate").html(html);
             }
         });
        // $.get("../page/relate.html",function(data){  
        //     $("#comment-relate").html(data);//初始化加载界面  
        // }); 
    });

//点击主界面显示
   
//面包屑Js  
 function setBread(id)
 {
    $('#getbread').html('');
    id = "#"+ id;
    first = $(id).parent().siblings('.nav-ul-div').find('a').text();
    second = $(id).text();
    $('#getbread').html('<li>'+
        '<a href="#">'+first+'</a>'+
        '<span class="divider"></span></li>'+
        '<li><a href="#">'+second+'</a>'+
        '<span class="divider"></span></li>');
}

});
