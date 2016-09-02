function startStrategy(){
	disableds = $(".viewer");
	disableds.addClass("disabled");
	disableds.removeClass("removable");
	fifth = $(".fifth-st");
	fourth = $(".fourth-st");
	sixty = $(".sixty-st");
	ninety = $(".ninety-st");
	tenth = $(".tenth-st");
	eleventh = $(".eleventh-st");
	$(".title-maps-white").css({"opacity": "0"}, 500);
	$(".title-maps-orange").css({"opacity": "0"}, 500);
	$(".seventy-st-title-orange").css({"opacity": "0"}, 500);
	$(".seventy-st-title-white").css({"opacity": "0"}, 500);
	$(".seventy-st-text").css({"opacity": "0"}, 500);
	$("seventy-st-background").css({"opacity": "0"}, 500);

	$(".lines-composer").css({"width":"0px"});
	fourth.css({"right":"-100%", "left":"100%"});
	fifth.css({"opacity":"0"});
	ninety.css({"right":"-100%"});
	tenth.css({"right":"-100%"});
	eleventh.css({"right":"-100%"});
	$(".baloon-market-map").css({"right":"-100%", "left":"100%","width":"1165px","background-size":"390px"},1000);

	$(".gps-maps").css({"right":"-100%", "left":"100%"});
	$(".gps-visao").css({"opacity":"0"});
	$(".tenth-st-text").css({"opacity":"0"});
	$(".gps-white").css({"right":"-100%", "left":"100%"})
	$(".gps-maps-white").css({"opacity":"0"});
	$(".gps-maps-orange").css({"opacity":"0"});
	$(".strategy-area").css({"right":"0%"})
	$(".first-st").css({"left":"0%"});
	$(".ninety-st-title-orange").css({"opacity":"0"});
	$(".ninety-st-title-white").css({"opacity":"0"});
	$(".strategy-cover").css({"right":"-100%"});
	$(".strategy-text").css({"right":"-100%", "left":"100%"});
	$(".third-st").css({"right":"-100%"});
	$(".baloon").css({"right":"-100%"});
	$("div.baloon-2, div.title-2, div.text-2").css({"right":"-100%"});
	$("div.baloon-3, div.title-3, div.text-3").css({"right":"-100%"});
	$("div.baloon-4, div.title-4, div.text-4").css({"right":"-100%"});
	$(".results").css({"bottom":"-100%"});
	$(".background").css({"bottom":"-100%"});
	$(".background-black").css({"bottom":"-100%"});
	$(".background-orange").css({"bottom":"-100%"});
	$(".gps-composer2").css({"background-position-x":"4%"});
	$(".gps-composer3").css({"background-position-x":"2%"});
	$(".gps-map-text").addClass('disabled');
	$(".eleventh-st-size").css({"height":"0px"});
	$(".eleventh-st-comunica").css({"height":"0px"});
	$(".eleventh-st").css({"background-size":"223px"});
	$(".central-gps").css({"right":"-100%", "left":"100%"})
	$(".eleventh-st-2").css({"background-size":"135px"});
	$(".eleventh-st-3").css({"background-size":"135px"});
	$(".eleventh-st-4").css({"background-size":"135px"});
	$(".eleventh-st-5").css({"background-size":"135px"});
	$(".gps-text-map-2").css({"background-position-x":"9%"});
	$(".gps-text-map-3").css({"background-position-x":"9%"});
	$(".gps-text-map-4").css({"background-position-x":"9%"});
	$(".gps-map-2").css({"background-position-x":"9%"});
	$(".gps-map-3").css({"background-position-x":"9%"});
	$(".gps-map-4").css({"background-position-x":"9%"});
	$(".gps-map-text").addClass('disabled');
	$(".gps-visao-2").css({"background-position-y":"100%"});
	$(".gps-visao-3").css({"background-position-y":"100%"});
	$(".gps-visao-4").css({"background-position-y":"100%"});
	$(".gps-visao-text").addClass('disabled');

}

function setNextST() {
	console.log("setNextST");
	$(".first-st").animate({"left":"-100%"},1000);
	$(".strategy-cover").animate({"right":"0%"},1000);
	$(".strategy-text").animate({"right":"0", "left":"0"},1000);
	$(".next.right").attr("onclick", "setNext2ST()");
};

function setNext2ST(){
	console.log("setNext2ST");
	seccond = $(".seccond-st")
	disableds = $(".viewer");
	console.log(disableds);
	$(".strategy-cover").animate({"right":"100%"},1000);
	$(".strategy-text").animate({"right":"100%", "left":"-100%"},1000);
	fourth = $(".fourth-st")

	fourth.animate({right: "-100%"}, 1000);
	$(".gps-white").animate({"right":"100%", "left":"-100%"},1000)
	$(".strategy-area").animate({"right":"100%"},1000)
	$(".gps-maps").animate({"right":"0%", "left":"0%"},1000, function(){
		$(".gps-maps-white").animate({"opacity":"1"},1000);
	});
	$(".third-st").animate({"right":"0%"},1000, function(i){
		$(".third-st").promise().done(function(){
			$(".baloon").animate({"right":"100%"},1000, function() {
				if ($(".baloon:animated").length === 0) {
					$("div.baloon-2, div.title-2, div.text-2").animate({"right":"80%"},1000);
					$("div.baloon-3, div.title-3, div.text-3").animate({"right":"60%"},1000);
					$("div.baloon-4, div.title-4, div.text-4").animate({"right":"30%"},1000);
					$(".results").animate({"bottom":"0%"},1000);
					console.log("click!");
					disableds.removeClass("disabled");
					disableds.addClass("removable");
					$(".background").animate({"bottom":"0%"},1000);
					$(".background-black").animate({"bottom":"0%"},1000);
					$(".background-orange").animate({"bottom":"0%"},1000);
				};
			});
		});
	});
	$(".next.right").attr("onclick", "setNext3ST()");
};

function back2(){
	seccond = $(".seccond-st")
	disableds = $(".viewer");
	console.log(disableds);

	$(".background").animate({"bottom":"-100%"},1000);
	$(".background-black").animate({"bottom":"-100%"},1000);
	$(".background-orange").animate({"bottom":"-100%"},1000, function(){
		$(".background-orange").promise().done(function(){
			$("div.baloon-2, div.title-2, div.text-2").animate({"right":"-100%"},1000);
			$("div.baloon-3, div.title-3, div.text-3").animate({"right":"-100%"},1000);
			$("div.baloon-4, div.title-4, div.text-4").animate({"right":"-100%"},1000);
			$(".baloon").animate({"right":"-100%"},1000, function(i) {
				if ($(".baloon:animated").length === 0) {
					disableds.removeClass("removable");
					disableds.addClass("disabled");
					$(".third-st").animate({"right":"-100%"},1000);
					seccond.animate({"right":"0%"},1000);
					$(".strategy-area").animate({"right":"0%"},1000);
					console.log("click!");
				};
			});
		});
	});
	$(".next.right").attr("onclick", "setNext2ST()");
}


function setNext3ST(){
	console.log("setNext3ST");
	fourth = $(".fourth-st")
	disableds = $(".viewer");
	console.log(disableds);

	$(".background").animate({"bottom":"-100%"},500);
	$(".background-black").animate({"bottom":"-100%"},500);
	$(".background-orange").animate({"bottom":"-100%"},500, function(){
		$(".background-orange").promise().done(function(){
			$("div.baloon-2, div.title-2, div.text-2").animate({"right":"200%"},500);
			$("div.baloon-3, div.title-3, div.text-3").animate({"right":"200%"},500);
			$("div.baloon-4, div.title-4, div.text-4").animate({"right":"200%"},500);
			$(".results").animate({"bottom":"-200%"},500);
			$(".baloon").animate({"right":"200%"},100, function(i) {
				if ($(".baloon:animated").length === 0) {
					$(".gps-maps-white").animate({"opacity":"0"},1000);
					$(".gps-maps-orange").animate({"opacity":"1"},1000);
					disableds.removeClass("removable");
					disableds.addClass("disabled");
					$(".third-st").animate({"right":"200%"},100);
					fourth.animate({"right":"0", "left":"0"},1000, function(i) {
						if ($(".fourth-st:animated").length === 0) {
							$(".gps-composer2").animate({"background-position-x":"55%"}, 1000);
							$(".gps-composer3").animate({"background-position-x":"100%"}, 1000, function(){
								$(".lines-composer").animate({"width":"595px"}, 1000)
							});
						};
					});
					console.log("click!");
				};
			});
		});
	});
	$(".next.right").attr("onclick", "setNext4ST()");
};

function setNext4ST(){
	console.log("setNext4ST");
	fourth = $(".fourth-st");
	fifth = $(".fifth-st.bg");
	fifth_text = $(".fifth-st.text");

	fourth.animate({"right":"100%", "left":"-100%"},1000);
	$('.gps-piece').animate({"background-position-x":"0%"}, 100, function(){
		if ($(".gps-piece:animated").length === 0) {
			$(".gps-maps-white").animate({"opacity":"1"},1000);
			$(".gps-maps-orange").animate({"opacity":"0"},1000);
			fifth.animate({"opacity":"1"},1000);

			

			$("div.baloon-market-map, div.title-maps").animate({"right":"0%", "left":"0%"},1000, function() {
				fifth_text.animate({"opacity":"1"},1000);
			});
			$(".title-maps-white").animate({"opacity":"1"},500);
			$(".lines-composer").animate({"width":"0px"}, 1000);
			$(".gps-map-text").addClass('disabled');
		};
	});
	
	$(".next.right").attr("onclick", "setNext5ST()");
};

function setNext5ST(){
	console.log("setNext5ST");
	sixty = $(".gps-mapping");
	fifth = $(".fifth-st");
	fifth_text = $(".fifth-st.text");

	fifth.animate({"opacity":"0"},1000);

	$(".gps-maps-white").animate({"opacity":"0"},500);
	$(".gps-maps-orange").animate({"opacity":"1"},500);
	$(".title-maps-white").animate({"opacity":"0"},500);
	$(".title-maps-orange").animate({"opacity":"1"},500);
	$(".the-texts").animate({"opacity":"1"},1000, function(){

		sixty.animate({"opacity":"1"},500, function(){
			if ($(".sixty-st:animated").length === 0) {
				$(".gps-text-map-2").animate({"background-position-x":"41%"},500);
				$(".gps-text-map-3").animate({"background-position-x":"69%"},500);
				$(".gps-text-map-4").animate({"background-position-x":"98%"},500);
				$(".gps-map-2").animate({"background-position-x":"41%"},500);
				$(".gps-map-3").animate({"background-position-x":"70%"},500);
				$(".gps-map-4").animate({"background-position-x":"100%"},500, function(){
					$(".gps-map-1").animate({"opacity":"1"}, 500);
					$(".gps-map-text").removeClass('disabled');
				});
			};
		});
	});
	
	$(".next.right").attr("onclick", "setNext6ST()");
};


function setNext6ST(){
	console.log("setNext6ST");
	sixty = $(".sixty-st");
	seventy = $(".seventy-st-background");

	$(".title-maps-white").animate({"opacity":"1"},500);
	$(".title-maps-orange").animate({"opacity":"0"},500);
	
	$(".gps-maps-white").animate({"opacity":"1"},500);
	$(".gps-maps-orange").animate({"opacity":"0"},500);
	$(".gps-text-map-2").animate({"background-position-x":"9%"},500);
	$(".gps-text-map-3").animate({"background-position-x":"9%"},500);
	$(".gps-text-map-4").animate({"background-position-x":"9%"},500);
	$(".gps-map-2").animate({"background-position-x":"8%"},500);
	$(".gps-map-3").animate({"background-position-x":"8%"},500);
	$(".gps-map-4").animate({"background-position-x":"8%"},500, function(){
		sixty.animate({"opacity":"0"},500)
		$(".baloon-market-map").animate({"width":"1075px","background-size":"350px"}, 500);
		$(".gps-map-text").addClass('disabled');
		seventy.animate({"opacity":"1"}, 500);
		
		$(".title-maps-white").animate({"opacity":"0"},500);
		$(".title-maps-orange").animate({"opacity":"0"},500);
		$(".seventy-st-title-white").animate({"opacity": "1"}, 500);
		$(".seventy-st-text").animate({"opacity": "1"}, 1000);
	});
	
	$(".next.right").attr("onclick", "setNext7ST()");
};

function setNext7ST(){
	console.log("setNext7ST");
	eighty = $(".eighty-st");
	seventy = $(".seventy-st");
	
	$(".seventy-st-text").animate({"opacity": "0"}, 500);
	$(".seventy-st-title-orange").animate({"opacity": "1"}, 500);
	$(".seventy-st-title-white").animate({"opacity": "0"}, 500);
	seventy.animate({"opacity":"0"}, 1000, function(){
		eighty.animate({"opacity":"1"},1000, function(){
			if ($(".eighty-st:animated").length === 0) {
				$(".gps-maps-white").animate({"opacity":"0"},500);
				$(".gps-maps-orange").animate({"opacity":"0"},500);
				$(".gps-visao-2").animate({"background-position-y":"0%"},1000);
				$(".gps-visao-3").animate({"background-position-y":"50%"},1000);
				$(".gps-visao-4").animate({"background-position-y":"100%"},1000, function(){
					$(".gps-visao-1").animate({'opacity':"1"},500);
					$(".gps-visao-text").removeClass('disabled');
				});
			};
		});	
	});
	
	
	$(".next.right").attr("onclick", "setNext8ST()");
};

function setNext8ST(){
	console.log("setNext8ST");
	eighty = $(".eighty-st");
	ninety = $(".ninety-st");
	console.log("si")

	
	$(".seventy-st-title-orange").animate({"opacity": "0"}, 500);
	$(".seventy-st-title-white").animate({"opacity": "0"}, 500);
	eighty.animate({"opacity":"0"},1000, function(){
		if ($(".eighty-st:animated").length === 0) {
			$(".gps-maps-white").animate({"opacity":"1"},500);
			$(".gps-visao-2").animate({"background-position-y":"100%"},100);
			$(".gps-visao-3").animate({"background-position-y":"100%"},100);
			$(".gps-visao-4").animate({"background-position-y":"100%"},100, function(){
				$(".gps-visao-text").removeClass('disabled');
				$(".baloon-market-map").animate({"width":"1155px","background-size":"285px"}, 500);
				ninety.animate({"right":"0%"}, 1000);
				$(".ninety-st-title-white").animate({"opacity":"1"}, 500);
				$(".ninety-st-text").animate({"opacity":"1"}, 500);
			});
		};
	});
	
	$(".next.right").attr("onclick", "setNext9ST()");
};

function setNext9ST(){
	console.log("setNext9ST");
	eighty = $(".eighty-st");
	ninety = $(".ninety-st");
	tenth = $(".tenth-st");

	$(".ninety-st-title-white").animate({"opacity":"0"}, 1000);
	$(".ninety-st-title-orange").animate({"opacity":"1"}, 1000);
	$(".ninety-st-text").animate({"opacity":"0"}, 500);
	$(".gps-maps-white").animate({"opacity":"0"},500);
	$(".gps-maps-orange").animate({"opacity":"1"},500);
	ninety.animate({"right":"100%"}, 1000);
	tenth.animate({"right":"0%"}, 1000);
	$(".tenth-st-text").animate({"opacity":"1"}, 1000);
	
	$(".next.right").attr("onclick", "setNext10ST()");
};

function setNext10ST(){
	console.log("setNext10ST");
	eleventh = $(".eleventh-st");
	ninety = $(".ninety-st");
	tenth = $(".tenth-st");

	$(".ninety-st-title-white").animate({"opacity":"0"}, 500);
	$(".ninety-st-title-orange").animate({"opacity":"0"}, 500);
	$(".baloon-market-map").animate({"right":"100%", "left":"-100%"},500);
	tenth.animate({"right":"100%"}, 500);
	eleventh.animate({"right":"0%"}, 500);
	$(".eleventh-st-size").animate({"opacity":"1"}, 500);
	$(".eleventh-st-comunica").animate({"opacity":"1"}, 500);
	$(".central-gps").animate({"right":"0%", "left":"0%"}, 500, function(){
		if ($(".central-gps:animated").length === 0) {
			$(".eleventh-st-size").animate({"height":"660px"}, 1000);
			$(".eleventh-st-comunica").animate({"height":"655px"}, 1000);
			$(".eleventh-st-2").animate({"background-size":"223px"},250);
			$(".eleventh-st-3").animate({"background-size":"336px"},550);
			$(".eleventh-st-4").animate({"background-size":"448px"},750);
			$(".eleventh-st-5").animate({"background-size":"545px"},1050);
		};
	});
	
	$(".next.right").attr("onclick", "setNext11ST()");
};



function setNext11ST() {
	console.log("setNext11ST");
	$(".container-strategy").addClass("disabled");
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




