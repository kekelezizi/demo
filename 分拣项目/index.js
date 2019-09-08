var personArr = [
	{name:'可乐',src:'./image/1.png',des:'刺激，好喝',types:'f',age:15},
	{name:'爆米花',src:'./image/2.png',des:'甜甜的，很好吃',types:'s',age:20},
	{name:'玉米',src:'./image/3.png',des:'可以减肥',types:'s',age:18},
	{name:'四季豆',src:'./image/4.png',des:'我最爱吃的蔬菜',types:'s',age:22},
	{name:'山竹',src:'./image/5.png',des:'紫色外皮的水果',types:'f',age:25},
];

// 初始化
var oUl = document.getElementsByTagName('ul')[0];
var oInput = document.getElementsByTagName('input')[0];
// 记录全局过滤条件
var filterText = '';
var filterTypes = 'a';

var state = {

}
;
// 数据渲染
function RenderPage(data) {
	// body...
	// 1.遍历
	var htmlStr = '';
	oUl.innerHTML = '';
	data.forEach(function (ele, index, sself) {
		console.log(ele);
		htmlStr = htmlStr + '<li><img src = "' + ele.src +'"></img><p class = "name">' + ele.name +'</p><p class = "des"> ' + ele.des + '</p></li>'
		console.log(htmlStr);
	});
	oUl.innerHTML = htmlStr;
}

RenderPage(personArr);

//点击事件
oInput.oninput = function(){
	filterText = this.value
	// var filtertext = this.value;
	// console.log(filtertext);
	var newArr = filterArrByText(personArr,filterText);
	var newArr1 = filterArrByTypes(newArr,filterTypes);
	RenderPage(newArr1);
}

// 根据文本来过滤
function filterArrByText (data, text) {
	if(!text){
		return data;
	}else{
		var newArr = data.filter(function (ele, index, self) {
			if( ele.name.indexOf(text) && ele.des.indexOf(text) != -1)
				return true;
		});
		return newArr;
	}
}

//btn 
var oBtn = [].slice.call( document.getElementsByClassName('btn'), 0);
var lastActiveBtn = oBtn[2];

oBtn.forEach( function (ele, index, self) {
	ele.onclick = function(){
		changeActive(this);
		filterTypes = this.getAttribute('types');
		var newArr = filterArrByTypes(personArr, filterTypes);
		var newArr1 = filterArrByText(newArr,filterText);
		RenderPage(newArr1);
	}
});

function changeActive (curActiveBtn) {
	curActiveBtn.className = 'btn active';
	lastActiveBtn.className = 'btn';
	lastActiveBtn = curActiveBtn;
}

//根据类型过滤
function filterArrByTypes (data, types){
	if(types == 'a'){
		return data;
	}else if(types == 's'){
		return data.filter(function(ele, index, self){
			return ele.types == 's';
		});
	}else if(types == 'f'){
		return data.filter(function(ele, index, self){
			return ele.types == 'f';
		})
	}
}
