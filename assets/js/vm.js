function startVM() {
	$(".first-vm").css({"left":"0%"});
	$(".seccond-vm").css({"right":"-100%"});
	$(".visual-area").css({"right":"0%"});
	$(".visual-white").animate({"opacity":"1"},500);
	$(".visual-orange").animate({"opacity":"0"},500);
	$(".visual-caller").css({"right":"0%"});
	$(".third-vm").css({"right":"-100%"});

}

function setNextVM() {
	$(".first-vm").animate({"left":"-100%"},1000);
	$(".seccond-vm").animate({"right":"0%"},1000);
	$(".visual-caller").animate({"right":"100%"},1000);
	$(".next.right").attr("onclick", "setNext2VM()");
}

function setNext2VM() {
	$(".visual-white").animate({"opacity":"0"},500);
	$(".visual-orange").animate({"opacity":"1"},500);
	$(".visual-area").animate({"right":"100%"},1000);
	$(".visual-white").animate({"right":"100%"},1000);
	$(".third-vm").animate({"right":"0%"},1000);
	$(".next.right").attr("onclick", "setNext3VM()");
}
function setNext3VM() {
	$(".container-vm").addClass("disabled");
	$("div.slc-st,  div.slc-vd").css({"width":"35%"});
	$("div.slc-co").css({"width":"30%"});
	$(".comunicando").animate({"width":"400px"}, 100);
	$(".visuando").animate({"width":"auto"}, 100);
	$(".strategindo").animate({"width":"auto"}, 100);
	$(".stronger.circles").animate({'right':"0%"}, 500);
	$("div.strategy,div.visual-m, div.communication, img.title-for-ob").animate({"right":"0"}, 500);
	$(".container-contable").removeClass("disabled");
	$(".container-people").addClass("disabled");
	$(".first-po").animate({"left":"0%"},1000);
	$(".seccond-po").animate({"right":"-100%"},1000);
	$(".third-po").animate({"right":"-100%"},1000);
	$(".fourth-po").animate({"right":"-100%"},1000);
}