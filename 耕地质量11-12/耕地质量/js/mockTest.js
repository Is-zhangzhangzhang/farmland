/*
* @Author: 嘉怡吖
* @Date:   2017-11-09 17:45:32
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-11 19:23:53
*/

// Mock.mock('/FruitTree/LoadYear',
// 			{"2016:2017:2018:2019:2020:"}
// 	}
// );

// Mock.mock('/path/to/type',{
// 		"status": 0,
// 		"data":[
// 			"type1",
// 			"type2",
// 			"type3",
// 			"type4",
// 			"type5"
// 		]
// 	}
// );

// Mock.mock('/path/to/prov',{
// 		"status": 0,
// 		"data":[
// 			"清远市",
// 			"广州市",
// 			"北京市",
// 			"上海"
// 		]
// 	}
// );

// Mock.mock('/path/to/dist',{
// 		"status": 0,
// 		"data":[
// 			"清新区",
// 			"天河区",
// 			"白云区",
// 			"荔湾区"
// 		]
// 	}
// );

Mock.mock('/path/to/tree',
	     /* [
			{ id:1, pId:0, name:"父节点1 - 展开", open:true},
			{ id:11, pId:1, name:"父节点11 - 折叠",open:true},
			{ id:111, pId:11, name:"叶子节点111"},
			{ id:112, pId:11, name:"叶子节点112"},
			{ id:113, pId:11, name:"叶子节点113"},
			{ id:114, pId:11, name:"叶子节点114"},

			{ id:12, pId:1, name:"父节点12 - 折叠"},
			{ id:111, pId:12, name:"叶子节点121"},
			{ id:122, pId:12, name:"叶子节点122"},
			{ id:123, pId:12, name:"叶子节点123"},
			{ id:124, pId:12, name:"叶子节点124"},

			{ id:13, pId:1, name:"父节点13 - 没有子节点", isParent:true},

			{ id:2, pId:0, name:"父节点2 - 折叠"},
			{ id:21, pId:2, name:"父节点21 - 展开", open:true},
			{ id:211, pId:21, name:"叶子节点211"},
			{ id:212, pId:21, name:"叶子节点212"},
			{ id:213, pId:21, name:"叶子节点213"},
			{ id:214, pId:21, name:"叶子节点214"},
			{ id:22, pId:2, name:"父节点22 - 折叠"},
			{ id:221, pId:22, name:"叶子节点221"},
			{ id:222, pId:22, name:"叶子节点222"},
			{ id:223, pId:22, name:"叶子节点223"},
			{ id:224, pId:22, name:"叶子节点224"},
			{ id:23, pId:2, name:"父节点23 - 折叠"},
			{ id:231, pId:23, name:"叶子节点231"},
			{ id:232, pId:23, name:"叶子节点232"},
			{ id:233, pId:23, name:"叶子节点233"},
			{ id:234, pId:23, name:"叶子节点234"}
		],*/
		/*[	{ id:'year', pId:0, name:"2017",open:true},
			{ id:'result', pId:'year', name:"年度等别成果",path:"aaa"},
		    { id:'city',pId:'result', name:"清远市"},
		    { id:'dist',pId:'city',name:"清新区"},
		    { id:'db' ,pId:'dist',name:"数据库"},
		    { id:'dbsjk',pId:'db',name:"dbsjk.GDB"},
		    { id:'dbsjk.MXD',pId:'db',name:'dbsjk,MXD'}
		]*/
[ {id:"d83e9cd",pId:"",name:"年度更新成果",path:""},
{id:"38aa6e7",pId:"d83e9cd",name:"1县级成果",path:""},
{id:"ee25771",pId:"38aa6e7",name:"太原市",path:""},
{id:"ea69046",pId:"ee25771",name:"小店区",path:""},
{id:"f8832c0",pId:"ea69046",name:"1文字报告",path:""},
{id:"7a9aecb",pId:"f8832c0",name:"年度更新评价分析报告.DOC",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\1文字报告\小店区2014年度更新评价分析报告.doc"},
{id:"eecb7ad",pId:"f8832c0",name:"年度更新评价自查报告.DOC",path:""},
{id:"766d478",pId:"ea69046",name:"2年度更新数据包",path:""},
{id:"3ed9ab1",pId:"766d478",name:"NDGXB.MXD",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\2年度更新数据包\1401052014NDGXB.mxd"},
{id:"209b817",pId:"766d478",name:"NDGXB.MDB",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\2年度更新数据包\1401052014NDGXB.mdb"},
{id:"9676486",pId:"ea69046",name:"3数据表",path:""},
{id:"4f32c55",pId:"9676486",name:"年度减少耕地等别面积分类型统计表.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\3数据表\140105小店区2014年度减少耕地等别面积分类型统计表.xls"},
{id:"8ca5a90",pId:"9676486",name:"年度新增耕地等别面积分类型统计表.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\3数据表\140105小店区2014年度新增耕地等别面积分类型统计表.xls"},
{id:"1ab37e3",pId:"9676486",name:"年度质量建设耕地等别面积分类型统计表.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\3数据表\140105小店区2014年度质量建设耕地等别面积分类型统计表.xls"},
{id:"b07a1c3",pId:"9676486",name:"年度新增耕地与质量建设耕地项目清单.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度更新成果\1县级成果\1401太原市\140105小店区\3数据表\140105小店区2014年度新增耕地与质量建设耕地项目清单.xls"},
{id:"c0110f4",pId:"9676486",name:"年度耕地质量等别年度更新评价数据表.XLS",path:""},
{id:"dd6fc31",pId:"9676486",name:"年度新增与质量等别变化单元指定作物分等计算结果表.XLS",path:""},
{id:"fec9d47",pId:"9676486",name:"年度新增与质量等别变化单元多作物综合计算结果表.XLS",path:""},
{id:"05d233d",pId:"9676486",name:"年度减少耕地流向表.XLS",path:""},
{id:"0cce6dd",pId:"9676486",name:"年度新增耕地来源面积汇总表.XLS",path:""},
{id:"6823c92",pId:"9676486",name:"年度减少耕地等别面积分类型统计表（可调整耕地）.XLS",path:""},
{id:"aa8caa9",pId:"9676486",name:"年度新增耕地等别面积分类型统计表（可调整耕地）.XLS",path:""},
{id:"342143d",pId:"9676486",name:"年度质量建设耕地等别面积分类型统计表（可调整耕地）.XLS",path:""},
{id:"634e6a4",pId:"9676486",name:"年度“批而未用”耕地面积统计表.XLS",path:""}
],

[
{id:"e7579fd",pId:"",name:"年度等别成果",path:""},
{id:"4c0be4a",pId:"e7579fd",name:"1县级成果",path:""},
{id:"5678b35",pId:"4c0be4a",name:"太原市",path:""},
{id:"2140196",pId:"5678b35",name:"小店区",path:""},
{id:"74d7840",pId:"2140196",name:"1数据库",path:""},
{id:"f5fd690",pId:"74d7840",name:"DBSJK.MXD",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度等别成果\1县级成果\1401太原市\140105小店区\1数据库\1401052014DBSJK.mxd"},
{id:"b7daa08",pId:"74d7840",name:"DBSJK.MDB",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度等别成果\1县级成果\1401太原市\140105小店区\1数据库\1401052014DBSJK.mdb"},
{id:"86b7f2a",pId:"74d7840",name:"DBSJK.XML",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度等别成果\1县级成果\1401太原市\140105小店区\1数据库\1401052014DBSJK.xml"},
{id:"5726313",pId:"2140196",name:"2数据表",path:""},
{id:"a32a430",pId:"5726313",name:"年度耕地质量等别面积分乡镇统计表.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度等别成果\1县级成果\1401太原市\140105小店区\2数据表\140105小店区2014年度耕地质量等别面积分乡镇统计表.xls"},
{id:"3809443",pId:"5726313",name:"年度耕地质量等别面积分地类统计表.XLS",path:"Z:\山西数据成果\山西2014最终稿定2016.07.27（部中心最终确定）\14山西2014年度等别成果\1县级成果\1401太原市\140105小店区\2数据表\140105小店区2014年度耕地质量等别面积分地类统计表.xls"},
{id:"0535c65",pId:"5726313",name:"年度耕地质量等别年度更新评价分等单元原始属性数据表.XLS",path:""},
{id:"fd4adec",pId:"5726313",name:"年度耕地质量等别分等单元综合数据表.XLS",path:""},
{id:"77492cf",pId:"5726313",name:"年度耕地质量等别评定结果表（耕地）.XLS",path:""},
{id:"7ac7de1",pId:"5726313",name:"年度耕地质量等别评定结果表（可调整耕地）.XLS",path:""},
{id:"d635b51",pId:"5726313",name:"年度耕地质量等别面积分乡镇统计表（可调整耕地）.XLS",path:""},
{id:"ab6986d",pId:"5726313",name:"年度耕地质量等别面积分地类统计表（可调整耕地）.XLS",path:""},
{id:"7273cdb",pId:"2140196",name:"3成果图件",path:""},
{id:"d3fdd25",pId:"7273cdb",name:"1ARCGIS",path:""},
{id:"0bf1859",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价分等单元图.MXD",path:""},
{id:"e3ecb9c",pId:"d3fdd25",name:"年度土地利用系数等值区图.MXD",path:""},
{id:"8771ef0",pId:"d3fdd25",name:"年度土地经济系数等值区图.MXD",path:""},
{id:"49ccfd6",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价省自然质量等别图.MXD",path:""},
{id:"7e1e243",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价省利用等别图.MXD",path:""},
{id:"0c42edf",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价省经济等别图.MXD",path:""},
{id:"889a44d",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价国家自然质量等别图.MXD",path:""},
{id:"51ee35c",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价国家利用等别图.MXD",path:""},
{id:"e5374ce",pId:"d3fdd25",name:"年度耕地质量等别年度更新评价国家经济等别图.MXD",path:""},
{id:"3987a85",pId:"d3fdd25",name:"年度耕地质量等别年度更新图.MXD",path:""},
{id:"d0f3171",pId:"7273cdb",name:"2JPG",path:""},
{id:"db71fb0",pId:"d0f3171",name:"年度耕地质量等别年度更新评价分等单元图.JPG",path:""},
{id:"dfc029d",pId:"d0f3171",name:"年度土地利用系数等值区图.JPG",path:""},
{id:"d475fb6",pId:"d0f3171",name:"年度土地经济系数等值区图.JPG",path:""},
{id:"9e799c0",pId:"d0f3171",name:"年度耕地质量等别年度更新评价省自然质量等别图.JPG",path:""},
{id:"bf3cf1f",pId:"d0f3171",name:"年度耕地质量等别年度更新评价省利用等别图.JPG",path:""},
{id:"308e62d",pId:"d0f3171",name:"年度耕地质量等别年度更新评价省经济等别图.JPG",path:""},
{id:"5e0fbcc",pId:"d0f3171",name:"年度耕地质量等别年度更新评价国家自然质量等别图.JPG",path:""},
{id:"74ee1e8",pId:"d0f3171",name:"年度耕地质量等别年度更新评价国家利用等别图.JPG",path:""},
{id:"e9d8654",pId:"d0f3171",name:"年度耕地质量等别年度更新评价国家经济等别图.JPG",path:""},
{id:"3e94881",pId:"d0f3171",name:"年度耕地质量等别年度更新图.JPG",path:""},
{id:"ccab84d",pId:"2140196",name:"4基础资料汇编",path:""},
{id:"524a46b",pId:"ccab84d",name:"1原始调查数据与资料",path:""},
{id:"391a513",pId:"524a46b",name:"DLTB.MDB",path:""},
{id:"8575228",pId:"524a46b",name:"DLTBGXGC.MDB",path:""},
{id:"883062c",pId:"ccab84d",name:"2中间成果资料",path:""},
{id:"3efeca5",pId:"ccab84d",name:"3相关工作文件及技术文件",path:""},
{id:"70c4145",pId:"ccab84d",name:"4年度耕地更新单元景观照片",path:""}

]

);

/*
 * relate
 */

//YS1
/*Mock.mock('/data/getYS1.do',{
			"status": 0,
			"data":[
			"TRSJD"
			]
		}
);

//YS2
Mock.mock('/data/getYS2.do',{
	"status": 0,
"data":[
"DXPD",
"DBYSLTD",
"YZHCD",
"TMPD",
"YXTCHD",
"ZACJDBSD",
"BCTRZD",
"GGBZL"
]
}
);

Mock.mock('/data/getYsglTable.do',{
"status": 0,
"data":[
[null, "G1", "G2"],
["5.45", "265", "26"],
["5", "22", "60"]
]
}
);

Mock.mock('/algorithm/FPG.do',{
"status": 0,
"data":"./cp_data.txt"
}
);

Mock.mock('/data/checkFPG.do',{
"status": 0,
"data":20
}
);*/