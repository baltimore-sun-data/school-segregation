var app = app || {
	init: function(){
		app.readHash();
		app.mouseEvents();
		app.share();
		app.show_video();
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
	}
};

$(document).ready(function(){
	app.init();
});
$(window).load(function() {
	$('.animationToggle').addClass('animation');
});
