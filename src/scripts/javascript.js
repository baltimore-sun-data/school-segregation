var app = app || {
	init: function(){
		app.readHash();
		app.mouseEvents();
		app.share();
		app.shareSplash();
		app.show_video();
		app.charts();
	},
	readHash: function() {
		var anchor = window.location.hash.substring(1);
		switch (anchor) {
			case "exposure":
				$(window).scrollTop($('#exposureGraphic').offset().top - 100);
				break;
			case "map":
				$(window).scrollTop($('#schoolsMap').offset().top - 100);
				break;
			default:
				break;
		};
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "The struggle to move past segregated schools."; //Tweet text
			var url = "http://data.baltimoresun.com/news/bridging-the-divide/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/bridging-the-divide/images/thumb-fb.png"; //Picture URL
			var title = "Bridging the Divide"; //Post title
			var description = "The struggle to move past segregated schools."; //Post description
			var url = "http://data.baltimoresun.com/news/bridging-the-divide/"; //Interactive URL
			var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	shareSplash: function(){
		$(".icon-twitter.splash").on("click", function(){
			var tweet = "The struggle to move past segregated schools."; //Tweet text
			var url = "http://data.baltimoresun.com/news/bridging-the-divide/splash.html"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook.splash").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/bridging-the-divide/images/thumb-fb.png"; //Picture URL
			var title = "Bridging the Divide"; //Post title
			var description = "The struggle to move past segregated schools."; //Post description
			var url = "http://data.baltimoresun.com/news/bridging-the-divide/splash.html"; //Interactive URL
			var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	show_video: function(){
		$("#featured-video").find(".fv__overlay, .fv__play-btn").on("click", function(){
			$(".fv__overlay, .fv__play-btn").addClass("is-hidden");
		});
	},
	mouseEvents: function(){
		var newWidth;
		var navToggle = 1.5 * ($(window).height());
		var navToggleBool = false;
		var scrollHeight = $(document).height();

		var scrollPosition = $(window).height() + $(window).scrollTop();

		var headerBg = $('.header__bg');
		var headerHeight = $('.header').height();
		var headerToggle = false;
		
		$(window).resize(function() {
			scrollHeight = $(document).height();
			headerHeight = $('.header').height();
		});

		$(window).scroll(function() {
			scrollPosition = $(window).height() + $(window).scrollTop();
			if (!navToggleBool && scrollPosition > navToggle) {
				$('.hideForIntro').fadeIn();
				navToggleBool = true;
			}
			newWidth = 100 - ((1 - ((scrollHeight - scrollPosition) / scrollHeight)) * 100);
			$('.colors').width(newWidth + '%');

			if (!headerToggle && scrollPosition > headerHeight) {
				if (!headerToggle) {
					headerBg.css('position', 'absolute');
					headerBg.css('opacity', '1');
					headerToggle = true;
				}
			} else {
				if (!headerToggle) {
					headerBg.css('opacity', (scrollPosition/headerHeight));
					headerBg.css('position', 'fixed');
				} else {
					headerToggle = false;
				}
			}

			// console.log('scrollPosition: ' + scrollPosition);

			// console.log($('.header').height());

		});
	},
	charts: function(){
			var ctx1 = document.getElementById("readChart");
			var ctx2 = document.getElementById("mathChart");
			var readChart = new Chart(ctx1, {
			    type: 'line',
			    data: {
			    labels: ["1975","1980","1984","1988","1990","1992","1994","1996","1999","2004*","2008","2012"],
			    datasets: [
			        {
			            label: "White",
			            fill: false,
			            lineTension: 0.1,
			            backgroundColor: "rgba(16,68,83,0.4)",
			            borderColor: "rgba(16,68,83,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(16,68,83,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(16,68,83,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [293,293,295,295,297,297,296,295,295,289,295,295],
			            spanGaps: false,
			        },
			        {
			            label: "Black",
			            fill: false,
			            lineTension: 0.1,
			            backgroundColor: "rgba(53,185,165,0.4)",
			            borderColor: "rgba(53,185,165,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(53,185,165,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(53,185,165,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [241,243,264,274,267,261,266,266,264,262,266,269],
			            spanGaps: false,
			        }
			    ]
			},
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:false
			                }
			            }]
			        }
			    }
			});
			var mathChart = new Chart(ctx2, {
			    type: 'line',
			    data: {
			    labels: ["1978","1982","1986","1990","1992","1994","1996","1999","2004*","2008","2012"],
			    datasets: [
			        {
			            label: "White",
			            fill: false,
			            lineTension: 0.1,
			            backgroundColor: "rgba(16,68,83,0.4)",
			            borderColor: "rgba(16,68,83,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(16,68,83,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(16,68,83,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [306,304,308,309,312,312,313,315,311,314,314],
			            spanGaps: false,
			        },
			        {
			            label: "Black",
			            fill: false,
			            lineTension: 0.1,
			            backgroundColor: "rgba(53,185,165,0.4)",
			            borderColor: "rgba(53,185,165,1)",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "rgba(53,185,165,1)",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 1,
			            pointHoverRadius: 5,
			            pointHoverBackgroundColor: "rgba(53,185,165,1)",
			            pointHoverBorderColor: "rgba(220,220,220,1)",
			            pointHoverBorderWidth: 2,
			            pointRadius: 1,
			            pointHitRadius: 10,
			            data: [268,272,279,289,286,286,286,283,284,287,288],
			            spanGaps: false,
			        }
			    ]
			},
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:false
			                }
			            }]
			        }
			    }
			});

	}
};

$(document).ready(function(){
	app.init();
});
$(window).load(function() {
	$('.animationToggle').addClass('animation');
});
