function startComunicate(){
	$(".first").css({"right":"0%"});
	$(".comunicacao-area").css({"right":"0%"})
	$(".comunicacao-caller").css({"right":"0%"})
	$(".seccond-co").css({"right":"-100%"});
	$(".third-co").css({"width":"100%", "right":"-100%", "left":"100%"})
	$(".third-o-co").css({"width":"0%"});

}

function setNextCO() {
	$(".first").animate({"right":"100%"},1000);
	$(".seccond-co").animate({"right":"0%"},1000);
	$(".comunicacao-caller").animate({"right":"200%"},1000)
	$(".next.right").attr("onclick", "setNext2CO()");
}

function setNext2CO() {
	$(".comunicacao-area").animate({"right":"100%"},1000)
	$(".comunicacao-text").animate({"right":"100%"},1000);
	$(".comunicacao-white").animate({"opacity":"0"},500);
	$(".comunicacao-orange").animate({"opacity":"1"},500);
	$(".seccond-co.comunicacao-cover").animate({"right":"100%"},1000);
	$(".third-co").animate({"right":"0%", "left":"0%"},1000, function(){
		if ($(".third-co:animated").length === 0) {
			$(".comunicacao-white").animate({"opacity":"1"},500);
			$(".comunicacao-orange").animate({"opacity":"0"},500);
			$(".third-co").animate({"width":"50%", "left":"0","right":"50%"},1000);
			$(".third-o-co").animate({"width":"50%"},1000);
		};
	});
	$(".next.right").attr("onclick", "setNext3CO()");
}

function setNext3CO() {
	$(".container-comunicate").addClass("disabled");
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