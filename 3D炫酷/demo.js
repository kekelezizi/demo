window.onload = function(){
	var $img = $('img');
	var len = $img.length;
	var deg = 360 / len;
	for(var i = 0; i < len; i++){
		// 得到jquery对象
		$('img').eq(i).css({
			// 默认绕中心转
			'transform' : 'rotateY(' + i * deg + 'deg) translateZ(300px)',
			'transition' : 'transform 0.5s linear ' + (len - i - 1) * 0.1 + 's'

		});
	}
	bindEvent();
}

function bindEvent(){
	var box = $('.box');
	var body = $('body');
	var lastX,lastY,nowX,nowY,disX,disY;
	var roX = 0;
	var roY = 0;
	var timer;
	// 水平移动，roY，竖直移动，roX
	body.on('mousedown',function(e){
		clearInterval(timer);
		lastX = e.clientX;
		lastY = e.clientY;

		console.log(lastX,lastY);
		body.on('mousemove',function(e){

			// 旋转
			nowX = e.clientX;
			nowY = e.clientY;

			disX = nowX - lastX;
			disY = nowY - lastY;

			roY -= disY * 0.2;
			roX += disX * 0.2;

			roX = roX % 360;
			roY = roY % 360;

			box.css({
				// 'transform':'rotateX'
				'transform':'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)',			
			});
			lastX = nowX;
			lastY = nowY;
		});
		return false;
	}).on('mouseup',function(){
		body.off('mousemove');
		// 缓冲
		timer = setInterval(function(){
			disX *= 0.95;
			disY *= 0.95;
			roY += disY * 0.5;
			roX -= disX * 0.5;
			roX = roX % 360;
			roY = roY % 360;

			box.css({
				'transform' : 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)'
			});
			if (Math.abs(disX) < 0.01 && Math.abs(disY) < 0.01) {
				clearInterval(timer);
			}
		},20);
	});
}