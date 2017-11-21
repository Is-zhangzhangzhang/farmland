/*
* @Author: jiayi
* @Date:   2017-11-04 12:23:39
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-21 19:56:18
*/
jQuery(document).ready(function($) {
	//点击运行 执行算法 成功后获得path
$("#FPG-execute").click(function(event) {
    $.ajax({
        url: 'http://111.230.226.150/algorithm/FPG.do',
        type: 'POST',
        dataType: 'jsonp',
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
        url: 'http://111.230.226.150/data/checkFPG.do',
        type: 'POST',
        async : true,
        dataType: 'jsonp',
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
// 
function addOption(result,id)
{
    for (var index in result.data)
    {
        var sel =  $(id);
        var opt = document.createElement('option');
        opt.innerHTML=result.data[index];
        sel.append(opt);
    }
}
//请求因素一数组
function getYS1(){
//$("#sel-ys1").click(function(event) {
    $.ajax({
        url: 'http://111.230.226.150/data/getYS1.do',
        type: 'POST',
        async : true,
        dataType: 'jsonp',
        success: function(result) {
            //result因素一的数组 成功后插入元素
             if(!result.status)
             {
                $('#sel-ys1').html('<option selected="true" disabled="true" value="0">请选择</option>');
                addOption(result,"#sel-ys1");
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
$("#sel-ys1").change(function(event){
     var YS1 = $("#sel-ys1 option:selected").text();
     getSY2(YS1);
})


function getSY2(YS1){
    $.ajax({
        url: 'http://111.230.226.150/data/getYS2.do',
        type: 'POST',
        async : true,
        dataType: 'jsonp',
        data: {YS1: YS1},
        //result 因素二数组
        success:function(result)
        {
            if(!result.status)
             {
                $('#sel-ys2').html('<option selected="true" disabled="true" value="0">请选择</option>');
                addOption(result,"#sel-ys2");
             }
             else{
                  alert(result.msg);
             }

             //若含有与因素一相同的内容则不能再选 
            $("#sel-ys2 option").each(function() {
                var unClick = $(this).text();
                if (YS1 == unClick) 
                {
                    $(this).attr('disabled', 'true');
                }   
             })

            //请求因素二
            $("#sel-ys2").change(function(event){
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                YS2 = $("#sel-ys2 option:selected").text();
                setTable(YS1,YS2);
            })

        },
         error:function() {
            alert("因素2获取失败");
        }

    })
}

function setTable(YS1,YS2){
    $.ajax(
        {
            url:'http://111.230.226.150/data/getYsglTable.do',
            type: 'POST',
            async : true,
            dataType:'jsonp',
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
        rTable.innerHTML="";
        for (i in result.data)
        {   
            var tr = rTable.insertRow(i);
            for(j in result.data[i])
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
                    td.innerHTML=result.data[i][j];
                }
            }
        }
}

});