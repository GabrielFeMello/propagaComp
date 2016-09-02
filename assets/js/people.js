function returnToArea() {
	startStrategy();
	startComunicate();
	startVM();
	$(".container-contable").removeClass("disabled").animate({"bottom":"0%"}, 500);
	$(".container-people").animate({"bottom":"-100%"}, 500, function(){$(".container-people").addClass("disabled");});
	$(".container-strategy").addClass("disabled").animate({"bottom":"0%"}, 500);
	$(".container-comunicate").addClass("disabled").animate({"bottom":"0%"}, 500);
	$(".container-vm").addClass("disabled").animate({"bottom":"0%"}, 500);
	$(".next.top").attr("onclick", "CAtop2()");
	$(".next.down").removeClass("disabled");
	$(".next.right").addClass("disabled");
	$("div.slc-st,  div.slc-vd").css({"width":"35%"});
	$("div.slc-co").css({"width":"30%"});
	$(".comunicando").animate({"width":"400px"}, 100);
	$(".visuando").animate({"width":"auto"}, 100);
	$(".strategindo").animate({"width":"auto"}, 100);
	$(".stronger.circles").animate({'right':"0%"}, 500);
	$("div.strategy,div.visual-m, div.communication, img.title-for-ob").animate({"right":"0"}, 500);
	$(".first-po").animate({"left":"0%"},1000);
	$(".seccond-po").animate({"right":"-100%"},1000);
	$(".third-po").animate({"right":"-100%"},1000);
	$(".fourth-po").animate({"right":"-100%"},1000);
};


function setNextPP() {
	$(".first-po").animate({"left":"-100%"},1000);
	$(".seccond-po").animate({"right":"0%"},1000);
	$(".next.right").attr("onclick", "setNext2PP()");
};

function setNext2PP() {
	$(".seccond-po").animate({"right":"100%"},1000);
	$(".third-po").animate({"right":"0%"},1000);
	$(".next.right").attr("onclick", "setNext3PP()");
};

function setNext3PP() {
	$(".third-po").animate({"right":"100%"},1000);
	$(".fourth-po").animate({"right":"0%"},1000);
	$(".next.right").attr("onclick", "reborn()");
};

function reborn(){
	startStrategy();
	startComunicate();
	startVM();
	$(".next.right").attr("onclick","setNextPP()");
	$("div.slc-st,  div.slc-vd").css({"width":"35%"});
	$("div.slc-co").css({"width":"30%"});
	$("div.strategy,div.visual-m, div.communication, img.title-for-ob").animate({"right":"0"}, 500);
	$(".first-po").animate({"left":"0%"},1000);
	$(".seccond-po").animate({"right":"-100%"},1000);
	$(".third-po").animate({"right":"-100%"},1000);
	$(".fourth-po").animate({"right":"-100%"},1000);
};