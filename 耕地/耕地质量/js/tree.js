/*
* @Author: jiayi
* @Date:   2017-11-05 14:25:18
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-12 13:38:43
*/
jQuery(document).ready(function($) {

    /*
     * 范围选择js
     */
    function addOption(result,id)
    {
        result = eval('('+result+')');
        result = result.split(':');
        for(var i=0; i< result.length-1 ; i++)
        {
            var sel = $(id);
            var opt = document.createElement('option');
            opt.innerHTML = result[i];
            sel.append(opt);
        }
    }

    function getSelectText(id)
    {
       var text =$("#id").find('option:selected').text();
       if(text == "请选择")
       {
            alert("年份/类型/省市/区县 选择不能为空");
       }
       return text;
    }
    
    //年份选择
    $.ajax({
    url: '/FruitTree/LoadYear',
    type: 'POST',
    })
    .done(function(year) {
        addOption(year,"#select-year");
    })
    .fail(function() {
        console.log("年份获取失败");
    })

      //点击获取下拉框的值
    $("#select-year").change(function(event) {
       //点击的时候type prov dist 3个下拉框全部清空
       $('.aChoose select:gt(0)').html('<option selected="true" disabled="true" value="0">请选择</option>');
       //清空树
       $('#treeView').html("");
       //取值
       var text = getSelectText("#select-year");
       getType(text);
   }); 


    //类型选择
function getType(year)
{
    $.ajax({
        url: '/FruitTree/LoadType',
        type: 'POST',
        data: {year : year}
    })
    .done(function(type) {
        addOption(type,"#select-type");
        $("#select-type").change(function(event) {
                $('.aChoose select:gt(1)').html('<option selected="true" disabled="true" value="0">请选择</option>');
               var text = getSelectText("#select-type");
               //获取省/市
               getProv(year,text);
           }); 
    })
    .fail(function() {
        console.log("类型获取失败");
    });
}


    //省/市 选择
function getProv(year,type)
{
     $.ajax({
        url: '/FruitTree/LoadCity',
        type: 'POST',
        data:{
            year: year,
            type: type
        }
    })
    .done(function(prov) {
        console.log("success");
        addOption(prov,"#select-prov");
        $("#select-prov").change(function (event) {
                $("#select-dist").html('<option selected="true" disabled="true" value="0">请选择</option>');
               var text = getSelectText("#select-prov");
               getDist(year, type, text);
           }); 
    })
    .fail(function() {
        console.log("省/市 获取失败");
    });
}
   

    //区/县 选择
function getDist(year,type,cityname){
        $.ajax({
        url: '/FruitTree/LoadCountry',
        type: 'POST',
        data: {
            year: year,
            type: type,
            cityname: cityname
        }
    })
    .done(function(dist) {
        addOption(dist,"#select-dist")
        $("#select-dist").change(function (event) {
               var text = getSelectText("#select-dist");
               getTree(year,type,text);
           }); 
    })
    .fail(function() {
        console.log("区/县 获取失败");
    });
}

    /*
      * tree 的js
      */
var setting = {
    data: {
        simpleData: {
            enable: true
        }
    }
};
function getTree(year,type,countryname)
{
     $.ajax({
         url: '/FruitTree/LoadJson',
        type: 'POST',
        //dataType: 'var',
        data:{
            year: year,
            type: type,
            countryname:countryname
        }
    })
    .done(function (zNodes) {
        var znode = eval('(' + zNodes + ')');
        $.fn.zTree.init($("#treeView"), setting, znode);
    })
    .fail(function() {
        console.log("Tree");
    });
}

});