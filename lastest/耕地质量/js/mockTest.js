/*
* @Author: 嘉怡吖
* @Date:   2017-11-09 17:45:32
* @Last Modified by:   嘉怡吖
* @Last Modified time: 2017-11-18 15:32:11
*/

// Mock.mock('/FruitTree/LoadYear',
// 	"2016:2017:2018:2019:2020:"
// );

// Mock.mock('/FruitTree/LoadType',
//     "type1:type2:type3:type4:type5:"
// );

// Mock.mock('/FruitTree/LoadCity',
// 			"清远市:广州市:北京市:上海"	
// );

// Mock.mock('/FruitTree/LoadCountry',
// 			"清新区:天河区:白云区:荔湾区"
// );
/*Mock.mock('/FruitTree/LoadYear',
		["2016","2017","2018","2019","2020"]
);

Mock.mock('/FruitTree/LoadJson',
	      [
			/*{ id:1, pId:0, name:"父节点1 - 展开", open:true},
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
			{ id:234, pId:23, name:"叶子节点234"},*/

		/*	{ id:'year', pId:0, name:"2017"},
		   // { id:year,pId:0, name:"2017",open:true},
			{ id:'result', pId:'year', name:"年度等别成果"},
		    { id:'city',pId:'result', name:"清远市"},
		    { id:'dist',pId:'city',name:"清新区"},
		    { id:'db' ,pId:'dist',name:"数据库"},
		    { id:'dbsjk',pId:'db',name:"dbsjk.GDB"},
		    { id:'dbsjk.MXD',pId:'db',name:'dbsjk,MXD'}
		]
);*/

/*
 * relate
 */

//YS1
Mock.mock('/data/getYS1.do',{
			"status": 0,
			"data":[
			"TRSJD","DXPD"
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
);