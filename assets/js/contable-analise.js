function CAtop1() {
	$(".next.down").attr('onclick', "setDownCA();");
	$('.next.top').attr('onclick', "setTop4();");

	$(".cover").animate({"bottom":"0%"}, 500);
	$(".cover-02").animate({"bottom":"-100%"}, 500);
	console.log("CAtop2");
}

function CAtop2() {
	console.log("CAtop2");
	$(".cover").animate({"bottom":"100%"}, 500);
	$(".next.down").attr('onclick', "setDown2CA();");
	startStrategy();
	startComunicate();
	startVM();
	$('.next.top').attr('onclick', "CAtop1();");
	$(".cover-02").animate({"bottom":"0%"}, 500);
	$(".stronger").animate({"bottom":"-100%"}, 500);
	$(".services").animate({"bottom":"-100%"}, 500);
	$(".container-vm").addClass("disabled");
	$(".next.top").attr("onclick", "CAtop1()");
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
	$(".container-comunicate").addClass("disabled");
	$(".container-strategy").addClass("disabled")
	$(".container-contable").removeClass("disabled");
	$(".naming-services").animate({"bottom":"-100%", "top":"100"}, 500);
}

function CAtop3() {
	
}

function setDownCA() {
	console.log("1");
	$(".cover").animate({"bottom":"100%"}, 500);
	$(".cover-02").animate({"bottom":"0%"}, 500);
	$(".next.down").attr('onclick', "setDown2CA();");
	$('.next.top').attr('onclick', "CAtop1();");
 };
 function setDown2CA() {
	$(".cover-02").animate({"bottom":"100%"}, 500);
	$(".stronger").animate({"bottom":"0%"}, 500);
	$(".services").animate({"bottom":"0%"}, 500);
	$(".naming-services").animate({"bottom":"0%", "top":"0"}, 500);
	$(".next.down").attr('onclick', "goToPeople();");
	$('.next.top').attr('onclick', "CAtop2();");
 };

 function setDown3CA() {
	$(".next.down").attr('onclick', "window.location.href = 'analise_execucao.html';");
 };

function goToPeople() {
	$(".container-vm").animate({"bottom":"100%"}, 500);
	$(".container-comunicate").animate({"bottom":"100%"}, 500);
	$(".container-strategy").animate({"bottom":"100%"}, 500, function(){
		startStrategy();
		startComunicate();
		startVM();
		$(".container-vm").addClass("disabled");
		$(".container-comunicate").addClass("disabled");
		$(".container-strategy").addClass("disabled");
	})
	$(".container-contable").animate({"bottom":"100%"}, 500);
	$(".container-people").removeClass("disabled").animate({"bottom":"0%"}, 500);
	$(".next.down").addClass("disabled");
	$(".next.top").attr("onclick", "returnToArea()");
	$(".next.right").removeClass("disabled");
	$(".next.right").attr("onclick", "setNextPP()");
}

function setDown4CA() {
	$(".container-main-01").animate({"height":"70%", "background-size":"2300px"}, 1000);
	$(".container-main-02").animate({"height":"30%", "background-size":"1920px", "background-position-y":"0px"}, 1000);
	

  	$( ".clients-table" ).animate({bottom: "-100%"
  	}, 250, "linear", function() {
	    $( ".exit-comunica-3" ).animate({bottom: "-100%"
	  	}, 250, "linear", function() {
		    $( ".exit-comunica-2" ).animate({bottom: "-100%"
		  	}, 250, "linear", function() {
			    $( ".exit-comunica" ).animate({top: "0%"}, 250, "linear");
		  	});
	  	});
  	});
	$(".next.down").attr('onclick', "setDownCA();");
 };

function bigSt() {
	$(".strategindo").animate({"width":"600px"}, 100);
	$(".comunicando").animate({"width":"300px"}, 100);
	$(".visuando").animate({"width":"300px"}, 100);
};

function bigCom() {
	$(".comunicando").animate({"width":"600px"}, 100);
	$(".visuando").animate({"width":"300px"}, 100);
	$(".strategindo").animate({"width":"300px"}, 100);
};

function bigVm() {
	$(".visuando").animate({"width":"600px"}, 100);
	$(".strategindo").animate({"width":"300px"}, 100);
	$(".comunicando").animate({"width":"300px"}, 100);
};

function setVisual() {
	$("div.slc-st, div.slc-co, div.slc-vd").css("width","0%");
	$(".visuando").animate({"width":"100%", "background-size":"1900px"}, 500, function() {
		$("div.strategindo, div.comunicando, img.title-for-ob").animate({"width": "0%"},500);
		circleCenter("vm", $(".visuando"));
	});
};


function setEst() {
	$("div.slc-st, div.slc-co, div.slc-vd").css("width","0%");
	$(".strategindo").animate({"width":"100%", "background-size":"1900px"}, 500, function() {
		$("div.visuando, div.comunicando, img.title-for-ob").animate({"width": "0%"},500);
		circleCenter("st");
	});
};

function setCom() {
	$("div.slc-st, div.slc-co, div.slc-vd").css("width","0%");
	$(".comunicando").animate({"width":"100%","background-size":"1900px"}, 500, function() {
		$("div.visuando, div.strategy, img.title-for-ob").animate({"width": "0%"},500);
		circleCenter("co");
	});
};

function circleCenter(type) {
	$(".stronger.circles").animate({'right':"200%"}, 500);
	if (type == "vm"){
		$(".container-vm").removeClass("disabled");
		$(".container-contable").addClass("disabled");
		startVM();
		$(".next.right").attr('onclick', "setNextVM();");
		$(".next.right").removeClass("disabled");
		
	};
	if (type == "st") {
		$(".container-contable").addClass("disabled");
		$(".container-strategy").removeClass("disabled");
		startStrategy();
		$(".next.right").attr('onclick', "setNextST();");
		$(".next.right").removeClass("disabled");
		
	};
	if (type == "co") {
		$(".container-contable").addClass("disabled");
		$(".container-comunicate").removeClass("disabled");
		startComunicate();
		$(".next.right").attr('onclick', "setNextCO();");
		$(".next.right").removeClass("disabled");
		
	};
}
