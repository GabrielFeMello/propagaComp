function setTop1() {
	$(".container-main-01").animate({"height":"70%", "background-size":"2300px", }, 500);
	$(".container-main-02").animate({"height":"30%", "background-size":"1920px","margin-top":"0%"}, 500);
	$(".call.exit-comunica").animate({"top":"0%"}, 500);
	$(".exit-comunica-2").animate({"bottom":"-100%"}, 500);
	$(".clients-table").animate({"bottom":"-100%"}, 500);
	$(".exit-comunica-3").animate({"bottom":"-100%"}, 500);
	$(".next.down").attr('onclick', "setDownCT();");
	$('.next.top').addClass('disabled');
}

function setTop2() {
	$(".container-main-01").animate({"height":"50%", "background-size":"2000px", }, 500);
	$(".container-main-02").animate({"height":"50%", "background-size":"1500px","margin-top":"0%"}, 500);
	$(".call.exit-comunica").animate({"top":"-100%"}, 500);
	$(".exit-comunica-2").animate({"bottom":"0px"}, 500);
	$(".clients-table").animate({"bottom":"-100%"}, 500);
	$(".exit-comunica-3").animate({"bottom":"-100%"}, 500);
	$(".next.down").attr('onclick', "setDown2CT();");
	$('.next.top').attr('onclick', "setTop1();").removeClass('disabled');
}

function setTop3() {
	$(".container-main-01").animate({"height":"0%"}, 500);
	$(".container-main-02").animate({"height":"100%"}, 500);
	$(".exit-comunica-2").animate({"bottom":"200%"}, 500);
	$(".exit-comunica-3").animate({"bottom":"0%"}, 500);
	$(".clients-table").animate({"bottom":"-100%"}, 500);
	$(".next.down").attr('onclick', "setDown3CT();");
	$('.next.top').attr('onclick', "setTop2();");
}

function setTop4() {
	console.log("setTop4");
	$(".container-main-02").animate({"height":"100%", "bottom":" 0px", "background-position-y":"-100px"}, 500);
	$(".exit-comunica-3").animate({"bottom":"200%"}, 500);
	$(".clients-table").animate({"bottom":"0px"}, 500);
	$(".cover").animate({"bottom":"-100%"}, 500);
	$(".next.down").attr('onclick', "setWindow();");
	$('.next.top').attr('onclick', "setTop3();");
}


function setDownCT() {
	$(".container-main-01").animate({"height":"50%", "background-size":"2000px", }, 500);
	$(".container-main-02").animate({"height":"50%", "background-size":"1500px","margin-top":"0%"}, 500);
	$(".call.exit-comunica").animate({"top":"-100%"}, 500);
	$(".exit-comunica-2").animate({"bottom":"0px"}, 500);
	$(".clients-table").animate({"bottom":"-100%"}, 500);
	$(".exit-comunica-3").animate({"bottom":"-100%"}, 500);
	$(".next.down").attr('onclick', "setDown2CT();");
	$('.next.top').attr('onclick', "setTop1();").removeClass('disabled');
 };

 function setDown2CT() {
	$(".container-main-01").animate({"height":"0%"}, 500);
	$(".container-main-02").animate({"height":"100%"}, 500);
	$(".exit-comunica-2").animate({"bottom":"200%"}, 500);
	$(".exit-comunica-3").animate({"bottom":"0%"}, 500);
	$(".next.down").attr('onclick', "setDown3CT();");
	$('.next.top').attr('onclick', "setTop2();");
 };

 function setDown3CT() {
	$(".container-main-02").animate({ "bottom":" 0px", "background-position-y":"-100px"}, 500);
	$(".exit-comunica-3").animate({"bottom":"200%"}, 500);
	$(".clients-table").animate({"bottom":"0px"}, 500);
	$(".next.down").attr('onclick', "setWindow();");
	$('.next.top').attr('onclick', "setTop3();");

 };


 function setNextCT() {
	$(".container-main-02").animate({ "right":"100%", "background-position-y":"-100px", "width":"0%"}, 500);
	$(".exit-comunica-3").animate({"right":"100%", "width":"0%"}, 500);
	$(".clients-table").animate({"right":"100%", "width":"0%"}, 500);
	$(".index-first").animate({"right":"0%"}, 500, function(){
		setWindow();
	});
 };

function setWindow() {
	$(".container-main-02").animate({"height":"0"}, 500);

	$(".cover").animate({"bottom":"0%"}, 500);
	$(".clients-table").animate({"bottom":"100%"}, 500);
	$(".next.down").attr('onclick', "setDownCA();");
	$('.next.top').attr('onclick', "setTop4();");
}

function backBegin() {
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
	$(".next.down").attr('onclick', "setDownCT();");
 };

$( document ).ready(function() {

	$("body").on('mouseleave', function() {
		$(".comunicando").animate({"width":"30%"}, 100);
		$(".visuando").animate({"width":"35%"}, 100);
		$(".strategindo").animate({"width":"35%"}, 100);
	});

	function animateMe() {
		$('.next.down').animate({"margin-bottom":"5px"}, 500, function(){
			$('.next.down').animate({"margin-bottom":"-5px"}, 1000);	
		});
		
		$('.next.right').animate({"margin-right":"5px"}, 500, function(){
			$('.next.right').animate({"margin-right":"-5px"}, 1000, animateMe());
		});

		
		$('.next.top').animate({"margin-top":"5px"}, 500, function(){
			$('.next.top').animate({"margin-top":"-5px"}, 1000, animateMe());
		});
	};


	$(document).keydown(function(e){
		if(e.wich == 40 || e.keyCode == 40){
			if(!$('.next.down').hasClass('disabled')){
				$('.next.down').click();
			};
		};
		if(e.wich == 39 || e.keyCode == 39){
			if(!$('.next.right').hasClass('disabled')){
				$('.next.right').click();
			};
		};
		if(e.wich == 38 || e.keyCode == 38){
			if(!$('.next.top').hasClass('disabled')){
				$('.next.top').click();
			};
		};
	});
	
	window.on('scroll resize load', animateMe());
});