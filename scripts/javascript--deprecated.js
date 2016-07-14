// @codekit-prepend "modernizr.js"
// @codekit-prepend "jquery-1.10.2.min.js"
// @codekit-prepend "jquery.scrollTo-1.4.3.1-min.js"

var app = app || {

	init: function(){

		//app.share();

	},

	share: function(){

		$(".icon-twitter").on("click", function(){

			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL

			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

		$(".icon-facebook").on("click", function(){

			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL

	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

	}
	
}


var video_grid = video_grid || {

	init: function(){
		video_grid.expand_portraits();
		video_grid.expand_spotlight();
	},

	expand_portraits: function(){

		$(".vg__expand-btn").on("click", function(){

			//Show all portraits
			$(".vg__portraits--rest").addClass("is-visible");

			//Hide "expand" button
			$(this).addClass("is-hidden");
		});

	},

	expand_spotlight: function(){

		$(".vg__portrait").on("click", function(){

			//Scroll back to video player if this is second click
			if (!$(".vg__spotlight").hasClass("is-visible") && $(".vg__portraits--rest").hasClass("is-visible")){
				// var scroll_position = $(".vg").offset().top;
				setTimeout(function(){					
					$.scrollTo(".vg", 800);
				}, 1000)
			} else if ($(".vg__spotlight").hasClass("is-visible") && $(".vg__portraits--rest").hasClass("is-visible")){
				$.scrollTo(".vg", 800);
			}

			//Make sure all portraits are shown
			$(".vg__portraits--rest").addClass("is-visible");

			//Reveal video player
			$(".vg__spotlight").addClass("is-visible");
			$(".vg__spotlight__content").addClass("is-visible");

			//Make sure "expand" button is hidden
			$(".vg__expand-btn").addClass("is-hidden");			
		

		});

	}

}


$(document).ready(function(){
	app.init();
	video_grid.init();
});
