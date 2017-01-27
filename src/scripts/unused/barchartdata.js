

	//Life ex lowest
	var barChartData3 = {
		labels : ["1900","1910","1920","1930","1940","1950","1960","1970","1980","1990","2000","2010"],
		datasets : [
			{
				scale : "250",
				fillColor : "#26466D",
				strokeColor : "rgb(38,70,109)",
				highlightFill: "#3d5d7d",
				highlightStroke: "rgba(220,220,220,1)",
				data : [14.7,13.2,11.6,8.8,6.9,5.4,4.7,6.2,7.9,11.1,12.9,13.0]
			}
		]
	}

	//Life ex highest
	var barChartData4 = {
		labels : ["1900","1910","1920","1930","1940","1950","1960","1970","1980","1990","2000","2010"],
		datasets : [
			{
				fillColor : "#26466D",
				strokeColor : "rgb(38,70,109)",
				highlightFill: "#3d5d7d",
				highlightStroke: "rgba(220,220,220,1)",
				data : [68600,77662,84809,75448,61698,52645,39687,28710,24667,23467,29638,44449]
			},
		]

	}
		
	window.onload = function(){
			if(Modernizr.canvas){
				/*For some reason, this chart does not work with our canvas shim, while the other one does.*/
				/*Our fallback in older browsers is to just show one chart.*/
				var ctx4 = document.getElementById("canvas4").getContext("2d");
				window.myBar = new Chart(ctx4).Bar(barChartData4, {
					responsive : true,
					barShowStroke : false,
					scaleShowLabels: true,
					scaleLineColor: "#e2e2e2",
					scaleShowGridLines :true,
					scaleLabel:"<%=parseInt(value).toLocaleString()%>"
				});
			}else{
				$('.pop-chart--bmore').hide();
			}
		var ctx3 = document.getElementById("canvas3").getContext("2d");
		window.myBar = new Chart(ctx3).Bar(barChartData3, {
			responsive : true,
			barShowStroke : false,
			scaleShowLabels: true,
			scaleLineColor: "#e2e2e2",
			scaleShowGridLines :true
		});
		
	}


$(document).ready(function(){

	$(".pop-charts__tab").on("click", function(){

		if (!$(this).hasClass("is-selected")){

			//Update styles
			$(".pop-charts__tab").removeClass("is-selected");
			$(this).addClass("is-selected");

			//Update visible chart
			var chart_id = $(this).data("chart");
			$(".pop-chart").removeClass("is-visible");
			$(".pop-chart").eq(chart_id).addClass("is-visible");

		}

	});

});

