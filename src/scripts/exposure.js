function swapDropdown(nav) {


	if (nav == "md-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").hide();
		$("#city-menu").hide();
		$("#carroll-menu").hide();
		$("#howard-menu").hide();
		$("#harford-menu").hide();
		$("#md-menu").show();
		load_exposure_data(mdAllData);
    }; 

	if (nav == "howard-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").hide();
		$("#city-menu").hide();
		$("#carroll-menu").hide();
		$("#howard-menu").show();
		$("#harford-menu").hide();
		$("#md-menu").hide();
		load_exposure_data(howardAllData);

    }; 

	if (nav == "aa-menu" ) {

		$("#aa-menu").show();
		$("#baltimore-menu").hide();
		$("#city-menu").hide();
		$("#carroll-menu").hide();
		$("#howard-menu").hide();
		$("#harford-menu").hide();
		$("#md-menu").hide();
		load_exposure_data(aaAllData);

    }; 

    if (nav == "baltimore-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").show();
		$("#city-menu").hide();
		$("#carroll-menu").hide();
		$("#howard-menu").hide();
		$("#harford-menu").hide();
		$("#md-menu").hide();
		load_exposure_data(baltimoreAllData);

    }; 

   	if (nav == "city-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").hide();
		$("#city-menu").show();
		$("#carroll-menu").hide();
		$("#howard-menu").hide();
		$("#harford-menu").hide();
		$("#md-menu").hide();
		load_exposure_data(cityAllData);

    }; 

   	if (nav == "carroll-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").hide();
		$("#city-menu").hide();
		$("#carroll-menu").show();
		$("#howard-menu").hide();
		$("#harford-menu").hide();
		$("#md-menu").hide();
		load_exposure_data(carrollAllData);

    }; 

   	if (nav == "harford-menu" ) {

		$("#aa-menu").hide();
		$("#baltimore-menu").hide();
		$("#city-menu").hide();
		$("#carroll-menu").hide();
		$("#howard-menu").hide();
		$("#harford-menu").show();
		$("#md-menu").hide();
		load_exposure_data(harfordAllData);

    }; 

};



function swapPovertyDropdown(nav) {


	if (nav == "md-poverty-menu" ) {

		$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").show();
		load_poverty_exposure_data(mdAllPovertyData);
    }; 

	if (nav == "howard-poverty-menu" ) {

	 	$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").show();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(howardAllPovertyData);

    }; 

    if (nav == "aa-poverty-menu" ) {

		$("#aa-poverty-menu").show();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(aaAllPovertyData);

    }; 

    if (nav == "baltimore-poverty-menu" ) {

		$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").show();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(baltimoreAllPovertyData);

    }; 

   	if (nav == "city-poverty-menu" ) {

		$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").show();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(cityAllPovertyData);

    }; 

   	if (nav == "carroll-poverty-menu" ) {

		$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").show();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").hide();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(carrollAllPovertyData);

    }; 

   	if (nav == "harford-poverty-menu" ) {

		$("#aa-poverty-menu").hide();
		$("#baltimore-poverty-menu").hide();
		$("#city-poverty-menu").hide();
		$("#carroll-poverty-menu").hide();
		$("#howard-poverty-menu").hide();
		$("#harford-poverty-menu").show();
		$("#md-poverty-menu").hide();
		load_poverty_exposure_data(harfordAllPovertyData);

    }; 

};







function swapTabs(currentTab) {

	if (currentTab == "nav-poverty" ) {

		$(".nav-race").css("background", "#0f4453");
		$(".nav-poverty").css("pointer-events", "none");
		$(".nav-poverty").css("background", "#35baa6");
		$(".nav-poverty").toggleClass("changed");
		$(".nav-race").toggleClass("changed");
		$(".nav-race").css("pointer-events", "auto")
   		$("#race-container").toggle();
		$("#poverty-container").toggle();
    
    } else {

		$(".nav-race").css("background", "#35baa6");
		$(".nav-poverty").css("background", "#0f4453");
		$(".nav-poverty").toggleClass("changed");
		$(".nav-race").toggleClass("changed");
		$(".nav-race").css("pointer-events", "none");
		$(".nav-poverty").css("pointer-events", "auto");
		$("#race-container").toggle();
		$("#poverty-container").toggle();

		
    }; 

};




function load_exposure_data_eval (race) {


//race =eval(race);

//eval alternative
race = ( new Function( 'return ' + race ) )();
load_exposure_data(race)

};


//this function is for debugging
function xxload_exposure_data(race) {


alert(race["race-dropdown"]); 

};



function load_exposure_data(race) {


	var raceText

	if (race["race-dropdown"] == "All") {
		chairColor = "grey";
		$("#student-text").addClass('displaynone');
		$("#student-text").removeClass('displayall');
		$("#district-text").addClass('displayall');
	};


	if (race["race-dropdown"] == "White") {
		raceText = "a white student";
		chairColor = "yellow";
		$("#student-text").addClass('displayall');
		$("#district-text").addClass('displaynone');
		$("#district-text").removeClass('displayall');
	};

	if (race["race-dropdown"] == "Hispanic") {
		raceText = "a hispanic student";
		chairColor = "blue";
		$("#student-text").addClass('displayall');
		$("#district-text").addClass('displaynone');
		$("#district-text").removeClass('displayall');
	};

	if (race["race-dropdown"] == "Black") {
		raceText = "a black student";
		chairColor = "red";
		$("#student-text").addClass('displayall');
		$("#district-text").addClass('displaynone');
		$("#district-text").removeClass('displayall');
	};

	if (race["race-dropdown"] == "Asian") {
		raceText = "an asian student";
		chairColor = "green";
		$("#student-text").addClass('displayall');
		$("#district-text").addClass('displaynone');
		$("#district-text").removeClass('displayall');
	};

	if (race["race-dropdown"] == "All") {
		exposureText = "the racial makeup of the average school";
	} else {
		exposureText = "the racial makeup of the average school";
	}

	//This formula calculates change in area
	var exposureWhite
	exposureWhite = Math.sqrt(((7854 * (race["exposure-white"]/100)) / 3.1416)) * 2;

	var exposureBlack
	exposureBlack = Math.sqrt(((7854 * (race["exposure-black"]/100)) / 3.1416)) * 2;

	var exposureHispanic
	exposureHispanic = Math.sqrt(((7854 * (race["exposure-hispanic"]/100)) / 3.1416)) * 2;

	var exposureAsian
	exposureAsian = Math.sqrt(((7854 * (race["exposure-asian"]/100)) / 3.1416)) * 2;

	var exposureOther
	exposureOther = Math.sqrt(((7854 * (race["exposure-other"]/100)) / 3.1416)) * 2;


	$("#text-exposure").html(exposureText);
	$("#text-district").html(race["district"]);
	$("#text-district2").html(race["district"]);
	$("#text-race").html(raceText);
	$("#chair-svg").removeClass();
	$("#chair-svg").addClass(chairColor);
	$("#chair-svg-bottom").removeClass();
	$("#chair-svg-bottom").addClass(chairColor);

	$("#asian-text").html(race["exposure-asian"] + "%");
	$("#asian-dif").html(race["asian-dif"] );
	$("#asian-circle").css( "width", exposureAsian );
	$("#asian-circle").css( "height", exposureAsian );

	$("#white-text").html(race["exposure-white"] + "%");
	$("#white-dif").html(race["white-dif"]);
	$("#white-circle").css( "width", exposureWhite );
	$("#white-circle").css( "height", exposureWhite );

	$("#black-text").html(race["exposure-black"] + "%");
	$("#black-dif").html(race["black-dif"] );
	$("#black-circle").css( "width", exposureBlack );
	$("#black-circle").css( "height", exposureBlack );

	$("#hispanic-text").html(race["exposure-hispanic"] + "%");
	$("#hispanic-dif").html(race["hispanic-dif"]);
	$("#hispanic-circle").css( "width", exposureHispanic );
	$("#hispanic-circle").css( "height", exposureHispanic );

	$("#other-text").html(race["exposure-other"] + "%");
	$("#other-dif").html(race["other-dif"] );
	$("#other-circle").css( "width", exposureOther );
	$("#other-circle").css( "height", exposureOther );

};


function load_poverty_exposure_data_eval (frmp) {


frmp = ( new Function( 'return ' + frmp ) )();
load_poverty_exposure_data(frmp)

};


function load_poverty_exposure_data(frmp) {

	if (frmp["poverty-dropdown"] == "All") {
		frmpChairColor = "grey";
		$("#student-text-poverty").addClass('displaynone');
		$("#student-text-poverty").removeClass('displayall');
		$("#district-text-poverty").addClass('displayall');
	};

	if (frmp["poverty-dropdown"] == "Reduced") {
		frmpText = "a reduced student";
		frmpChairColor = "red";
		$("#student-text-poverty").addClass('displayall');
		$("#district-text-poverty").addClass('displaynone');
		$("#district-text-poverty").removeClass('displayall');
	};

	if (frmp["poverty-dropdown"] == "Non-Reduced") {
		frmpText = "a non-reduced student";
		frmpChairColor = "blue";
		$("#student-text-poverty").addClass('displayall');
		$("#district-text-poverty").addClass('displaynone');
		$("#district-text-poverty").removeClass('displayall');
	};


	//This formula calculates change in area
	var exposurePovertyReduced
	exposurePovertyReduced = Math.sqrt(((7854 * (frmp["exposure-reduced"]/100)) / 3.1416)) * 2;

	var exposurePovertyNonReduced
	exposurePovertyNonReduced = Math.sqrt(((7854 * (frmp["exposure-non-reduced"]/100)) / 3.1416)) * 2;


	$("#text-poverty-district").html(frmp["district"]);
	$("#text-poverty-district2").html(frmp["district"]);
	$("#chair-svg-poverty").removeClass();
	$("#chair-svg-poverty").addClass( frmpChairColor );
	$("#chair-svg-poverty-bottom").removeClass();
	$("#chair-svg-poverty-bottom").addClass( frmpChairColor );

	$("#reduced-text").html(frmp["exposure-reduced"] + "%");
	$("#reduced-dif").html(frmp["reduced-dif"] );
	$("#reduced-circle").css( "width", exposurePovertyReduced );
	$("#reduced-circle").css( "height", exposurePovertyReduced );

	$("#non-reduced-text").html(frmp["exposure-non-reduced"] + "%");
	$("#non-reduced-dif").html(frmp["non-reduced-dif"] );
	$("#non-reduced-circle").css( "width", exposurePovertyNonReduced );
	$("#non-reduced-circle").css( "height", exposurePovertyNonReduced );

};




window.onload = load_exposure_data(mdAllData);load_poverty_exposure_data(mdAllPovertyData);
