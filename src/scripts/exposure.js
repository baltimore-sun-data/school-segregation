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
		raceText = "an average school";
		chairColor = "grey";
	};


	if (race["race-dropdown"] == "White") {
		raceText = "a white student";
		chairColor = "yellow";
	};

	if (race["race-dropdown"] == "Hispanic") {
		raceText = "a hispanic student";
		chairColor = "blue";
	};

	if (race["race-dropdown"] == "Black") {
		raceText = "a black student";
		chairColor = "red";
	};

	if (race["race-dropdown"] == "Asian") {
		raceText = "an asian student";
		chairColor = "green";
	};

	if (race["race-dropdown"] == "All") {
		exposureText = "racial makeup";
	} else {
		exposureText = "exposure rate";
	}



	$("#text-exposure").html(exposureText);
	$("#text-district").html(race["district"]);
	$("#text-race").html(raceText);
	$("#chair-svg").removeClass();
	$("#chair-svg").addClass(chairColor);
	$("#chair-svg-bottom").removeClass();
	$("#chair-svg-bottom").addClass(chairColor);

	$("#asian-text").html(race["exposure-asian"] + "%");
	$("#asian-dif").html(race["asian-dif"] );
	$("#asian-circle").css( "width", race["exposure-asian"] );
	$("#asian-circle").css( "height", race["exposure-asian"] );

	$("#white-text").html(race["exposure-white"] + "%");
	$("#white-dif").html(race["white-dif"]);
	$("#white-circle").css( "width", race["exposure-white"] );
	$("#white-circle").css( "height", race["exposure-white"] );

	$("#black-text").html(race["exposure-black"] + "%");
	$("#black-dif").html(race["black-dif"] );
	$("#black-circle").css( "width", race["exposure-black"] );
	$("#black-circle").css( "height", race["exposure-black"] );

	$("#hispanic-text").html(race["exposure-hispanic"] + "%");
	$("#hispanic-dif").html(race["hispanic-dif"]);
	$("#hispanic-circle").css( "width", race["exposure-hispanic"] );
	$("#hispanic-circle").css( "height", race["exposure-hispanic"] );

	$("#other-text").html(race["exposure-other"] + "%");
	$("#other-dif").html(race["other-dif"] );
	$("#other-circle").css( "width", race["exposure-other"] );
	$("#other-circle").css( "height", race["exposure-other"] );

};


function load_poverty_exposure_data_eval (frmp) {


frmp = ( new Function( 'return ' + frmp ) )();
load_poverty_exposure_data(frmp)

};


function load_poverty_exposure_data(frmp) {

	if (frmp["poverty-dropdown"] == "All") {
		frmpText = "an average school";
		frmpChairColor = "grey";
	};

	if (frmp["poverty-dropdown"] == "Reduced") {
		frmpText = "a reduced student";
		frmpChairColor = "red";
	};

	if (frmp["poverty-dropdown"] == "Non-Reduced") {
		frmpText = "a non-reduced student";
		frmpChairColor = "blue";
	};

	if (frmp["poverty-dropdown"] == "All") {
		frmpExposureText = "poverty makeup";
	} else {
		frmpExposureText = "poverty exposure";
	};	


	$("#text-poverty-exposure").html(frmpExposureText);
	$("#text-poverty-district").html(frmp["district"]);
	$("#text-poverty-rate").html(frmpText);
	$("#chair-svg-poverty").removeClass();
	$("#chair-svg-poverty").addClass( frmpChairColor );
	$("#chair-svg-poverty-bottom").removeClass();
	$("#chair-svg-poverty-bottom").addClass( frmpChairColor );

	$("#reduced-text").html(frmp["exposure-reduced"] + "%");
	$("#reduced-dif").html(frmp["reduced-dif"] );
	$("#reduced-circle").css( "width", frmp["exposure-reduced"] );
	$("#reduced-circle").css( "height", frmp["exposure-reduced"] );

	$("#non-reduced-text").html(frmp["exposure-non-reduced"] + "%");
	$("#non-reduced-dif").html(frmp["non-reduced-dif"] );
	$("#non-reduced-circle").css( "width", frmp["exposure-non-reduced"] );
	$("#non-reduced-circle").css( "height", frmp["exposure-non-reduced"] );

};




window.onload = load_exposure_data(mdAllData);load_poverty_exposure_data(mdAllPovertyData);
