/*
* @Author: jiayi
* @Date:   2017-11-05 14:25:18
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-11 20:00:49
*/
jQuery(document).ready(function($) {

    /*
     * 范围选择js
     */
    
    //年份选择
   /* $.ajax({
        url: '/FruitTree/LoadYear',
        type: 'POST',
        })
        .done(function(temp) {
            var year = temp.split(':');
            for(var i=0; i< year.length-1 ; i++)
            {
                    var sel = $("#select-year");
                    var opt = document.createElement('option');
                    opt.innerHTML = year[i];
                    sel.append(opt);
            }
        })
        .fail(function() {
            console.log("年份获取失败");
        })


     $("#select-year").change(function(event) {
           var text =$(this).find('option:selected').text();
           getType(text);
          // treeOperation(text);
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
        type = type.split(':');
            for(var i=0; i< type.length-1 ; i++)
            {
                var sel = $("#select-type");
                var opt = document.createElement('option');
                opt.innerHTML = type[i];
                sel.append(opt);
                $("#select-type").change(function(event) {
                   var text =$(this).find('option:selected').text();
                   getProv(year,text);
                   //treeOperation(text);
               }); 
            }
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
        type: 'GET',
        data:{
            year: year,
            type: type
        }
    })
    .done(function(prov) {
        prov = prov.split(":");
        for(var i=0; i< prov.length-1 ; i++)
        {
            var sel = $("#select-prov");
            var opt = document.createElement('option');
            opt.innerHTML = prov[i];
            sel.append(opt); 
        }
        $("#select-prov").change(function(event) {
               var text =$(this).find('option:selected').text();
               getDist(year,type,text);
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
        type: 'GET',
        data: {
            year: year,
            type: type,
            cityname: cityname
        }
    })
    .done(function(dist) {
        dist = dist.split(':');
        for(var i=0; i< dist.length-1 ; i++)
        {
            var sel = $("#select-dist");
            var opt = document.createElement('option');
            opt.innerHTML = dist[i];
            sel.append(opt);
        }
        $("#select-dist").change(function(event) {
               var text =$(this).find('option:selected').text();
               getTree(year,type,text);
           }); 
    })
    .fail(function() {
        console.log("区/县 获取失败");
    });
}*/

/*function getTree(year,type,countryname)
{
     $.ajax({
        url: '/FruitTree/Json',
        type: 'POST',
       // dataType: 'json',
        data:{
            year: year,
            type: type,
            countryname:countryname
        }
    })
    .done(function(zNodes) {
         //console.log("success");
        //树的初始化
        $.fn.zTree.init($("#treeView"), setting, zNodes);
    })
    .fail(function() {
        console.log("TreeFail");
    });
}*/

    /*
     * tree 的js
     */
    /* var setting = {
        data: {
            simpleData: {
                enable: true
            }
        }
    };*/

    var str = '[{id:"d83e9cd",pId:"",name:"年度更新成果",path:""},'+
'{id:"38aa6e7",pId:"d83e9cd",name:"1县级成果",path:""},'+
'{id:"ee25771",pId:"38aa6e7",name:"太原市",path:""},'+
'{id:"ea69046",pId:"ee25771",name:"小店区",path:""},'+
'{id:"f8832c0",pId:"ea69046",name:"1文字报告",path:""}],['+
'{id:"e7579fd",pId:"",name:"年度等别成果",path:""},'+
'{id:"4c0be4a",pId:"e7579fd",name:"1县级成果",path:""},'+
'{id:"5678b35",pId:"4c0be4a",name:"太原市",path:""},'+
'{id:"2140196",pId:"5678b35",name:"小店区",path:""},'+
'{id:"74d7840",pId:"2140196",name:"1数据库",path:""}'+']'; 
    var obj = eval('(' + str + ')'); 
    alert(JSON.stringify(obj)); 



    $.ajax({
        url: '/path/to/tree',
        type: 'POST',
        //dataType: 'json',
    })
    .done(function(zNodes) {
        console.log("success");
        //树的初始化
       
           // $.fn.zTree.init($("#treeView"), setting, zNodes);


       // treeOperation();
    })
    .fail(function() {
        console.log("error");
    });
    //要打开目录树的文件夹name
   // $(".rankSelect").change(function(event) {
   //     var text =$(this).find('option:selected').text();
   //     treeOperation(text);
   // }); 


    /*function treeOperation(){
         var treeObj = $.fn.zTree.getZTreeObj("treeView");
         var nodes = treeObj.getNodeByParam("name", "年度等别成果", null);
         //treeObj.expandNode(nodes, "", false,true, true);
         console.log(nodes.path);
    };*/


});