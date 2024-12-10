$(function(){
	let searchwords=["【金坷垃】 Kela Fly","pop醒和pipi凡的吔常","【梦想三巨头】灌醉baby","【鬼畜全明星】双♂人♂舞"];
	let calc=0;
	setInterval(function(){
		$(".searchtext").attr("placeholder",searchwords[calc]);
		calc++;
		if(calc===searchwords.length+1){
			calc=0;
		}
	},6000);//搜索框内容改变
	$(".searchtext").click(function(){
		$(".rank").css("display","flex");
	})//热搜榜
	$(".search_and_rank").focusout(function(){
		$(".rank").css("display","none");
	})//热搜榜
	let rotpics=["rotpic1.jpg","rotpic2.jpg","rotpic3.jpg","rotpic4.jpg","rotpic5.jpg","rotpic6.jpg"];//轮播图的图片
	let rotpics_title=["《赛博朋克2077》我爱发明特供预告片","【王境泽】乱世巨星","鬼畜区决战！33的奇妙冒险（渣作警告）","【日非的逆袭】坷垃陆战队-immortals","【茄子】iPhone 来电铃声白给加强版","【全明星rap】黑喂狗！"];//轮播图的字
	let j=0;
	for(j=0;j<rotpics.length;j++){
		$(".rotate_dots").append("<span class='iconfont' index="+j+">&#xe833;&nbsp;</span>")
	}
	$(".rotate_dots span").click(function(){
		let index=$(this).attr("index");
		for(j=0;j<rotpics.length;j++){
			$(".rotate_dots span").html("<span class='iconfont' index="+j+">&#xe833;&nbsp;</span>")
		}
		$(this).html("<span class='iconfont'>&#xe751;&nbsp;</span>")
		$(".rotate_graphs").css("background-image","url('" +"./images/covers/rotate/"+rotpics[index]+ "')");
		$(".rotate_graphs_title").text(rotpics_title[index]);
	})//圆点
	let m=0;
	$(".left_pic").click(function(){
		m=m-1;
		if(m==-1){
			m=rotpics.length-1;
		}
		$(".rotate_graphs").css("background-image","url('" +"./images/covers/rotate/"+rotpics[m]+ "')");
		$(".rotate_graphs_title").text(rotpics_title[m]);
		for(j=0;j<rotpics.length;j++){
			$(".rotate_dots span").html("<span class='iconfont' index="+j+">&#xe833;&nbsp;</span>")
		}
	})//左切换
	$(".right_pic").click(function(){
		m++;
		if(m==rotpics.length){
			m=0;
		}
		$(".rotate_graphs").css("background-image","url('" +"./images/covers/rotate/"+rotpics[m]+ "')");
		$(".rotate_graphs_title").text(rotpics_title[m]);
		for(j=0;j<rotpics.length;j++){
			$(".rotate_dots span").html("<span class='iconfont' index="+j+">&#xe833;&nbsp;</span>")
		}
	})//右切换
	setInterval(function(){
		$(".rotate_graphs").css("background-image","url('" +"./images/covers/rotate/"+rotpics[m]+ "')");
		$(".rotate_graphs_title").text(rotpics_title[m]);
		m++;
		if(m==rotpics.length){
			m=0;
		}
		for(j=0;j<rotpics.length;j++){
			$(".rotate_dots span").html("<span class='iconfont' index="+j+">&#xe833;&nbsp;</span>")
		}
	},5000)//自动切换
	$(".center_channel").mouseover(function(){
		$(".main_part").css("z-index","-1");
	});//解决下拉菜单与链接冲突问题
	$(".center_channel").mouseout(function(){
		$(".main_part").css("z-index","0");
	});//同上
	$(window).scroll(function(){
		if($(document).scrollTop()>=$(".headpart_top").height()+$(".headchannel").height()){
			$(".side_buttons").show();
		}
		else{
			$(".side_buttons").hide();
		}
	});//小按钮的定位
	$(".refresh_button").click(function(){
		location.reload();
	});//刷新功能
	$(".service_button").mouseover(function(){
		$(".feedback_button").css("display","flex");
		$(this).html("<span class='iconfont'>&#xe649;</span>");
	});//一个变成两个
	$(".service_button").mouseout(function(){
		$(".feedback_button").css("display","none");
		$(this).html("<span>···</span>");
	});//两个变回一个
	$(".backtotop_button").click(function(){
		$(window).scrollTop("0rem");
	});//返回顶部
})