
	function opacity() {
	    $(".gps-white-test").animate({"opacity":"0"}, 500);
		$(".gps-orange-test").animate({"opacity":"1"}, 500);
		$(".clique-aqui").attr("onclick", "opacity2()");
	};

	function opacity2() {
	    $(".gps-white-test").animate({"opacity":"1"}, 500);
		$(".gps-orange-test").animate({"opacity":"0"}, 500);
		$(".clique-aqui").attr("onclick", "opacity()");
	};
