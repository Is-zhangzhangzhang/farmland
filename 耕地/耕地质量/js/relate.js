/*
* @Author: jiayi
* @Date:   2017-11-04 12:23:39
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-11 14:30:08
*/
jQuery(document).ready(function($) {
	//点击运行 执行算法 成功后获得path
$("#FPG-execute").click(function(event) {
    $.ajax({
        url: '/algorithm/FPG.do',
        type: 'GET',
        dataType: 'json',
        async : true,
        success:function(path)
        {
            if (!path.status)
            {
                polling(path.data);
            }
            else
            {
                alert(path.msg);
            }
        },
        error:function()
        {
            alert("出错");
        }
    })
   
    
});

//轮询检测算法是否完成
function polling(path){
    $.ajax({
        url: '/data/checkFPG.do',
        type: 'POST',
        async : true,
        dataType: 'json',
        data: {path: path},
        success:function(result)
        {
            //成功
            if(!result.status)
            {
                alert(result.data);
                getYS1();//成功后就获取YS1的值
            }
            //不成功 轮询
            else
            {
                window.setInterval(function(){
                    polling(path)},3000);
            }
        },
        error:(function() {
            alert("轮询出错");
        })
    })
    
}

// $("#sel-ys1").click(function(event) {
//    getYS1();
// });
//请求因素一数组
function getYS1(){
//$("#sel-ys1").click(function(event) {
    $.ajax({
        url: '/data/getYS1.do',
        type: 'GET',
        async : true,
        dataType: 'json',
        success: function(result) {
            //result因素一的数组 成功后插入元素
             if(!result.status)
             {
                for (var index in result.data)
                {
                    var sel =  $('#sel-ys1');
                    var opt = document.createElement('option');
                    opt.innerHTML=result.data[index];
                    sel.append(opt);
                }
             }
             else{
                  alert(result.msg);
             }   
         },
        error:function() {
            alert("因素1获取失败");
        }
    })
};


//获得因素一下拉框中选择的内容dataYS1
//option改变的时候才能post值，不变的时候没有值post！！！！
$("#sel-sy1").change(function(event){
    YS1 = $("#sel-sy1 option:selected").text();
    getSY2(YS1);
})

function getSY2(YS1){
    $.ajax({
        url: '/data/getYS2.do',
        type: 'POST',
        async : true,
        dataType: 'json',
        data: {YS1: YS1},
        //result 因素二数组
        success:function(result)
        {
            if(!result.status)
             {
                for (var index in result.data)
                {
                    var sel =  $('#sel-ys2');
                    var opt = document.createElement('option');
                    opt.innerHTML=result.data[index];
                    sel.append(opt);
                }
             }
             else{
                  alert(result.msg);
             }

             //若含有与因素一相同的内容则不能再选 
            $("#sel-ys2 option").each(function() {

                var unClick = $(this).text();
                if (dataYS1 == unClick) 
                {
                    $(this).attr('disabled', 'disable');
                }   
             })

            //请求因素二
            $("#sel-sy2").change(function(event){
                YS2 = $("#sel-sy1 option:selected").text();
                setTable(YS1,YS2);
            })

        },
         error:function() {
            alert("因素2获取失败");
        }

    })
}

function setTable(){
    $.ajax(
        {
            url:'/data/getYsglTable.do',
            type: 'POST',
            async : true,
            dataType:'json',
            data: {
                YS1: YS1,
                YS2: YS2
        },
        success:function(result)
        {
            if(!result.status)
            {
                createTable(result);
            }
            else
            {
                alert(result.msg);
            }
        },
        error:function()
        {
            alert("表格失败!");
        }
    })
}

function createTable(result)
{
    var i,j;
        var rTable = document.getElementById("relate-table");
        for (i in result)
        {   
             var tr = rTable.insertRow(i);
            for(j in result[i])
            {
                var td = tr.insertCell(j);
                if(i == 0 && j==0)
                {
                    td.innerHTML='<div class="cause-table-line">'+
                                        '<table class="inner-table">'+
                                                '<tr>'+
                                                    '<th></th>'+
                                                    '<th>因素二</th>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<th>因素一</th>'+
                                                    '<th></th>'+
                                                '</tr>'+
                                        '</table>'+
                                    '</div>';
                }
                else
                {
                    td.innerHTML=result[i][j];
                }
            }
        }
}

});