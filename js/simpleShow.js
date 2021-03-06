/*
 *  simpleShow
 *  Copyright (c) 2013 Jason Rodgers
 *  very simple jquery lightbox plugin 
 *  Licensed under the MIT license
 *
 */	
function simpleShow(){	
	//set up the sizing on the img and container
	function simpleShowbgCss(){
		$("#simpleShow , #sSCenter").css({'height': + $(window).height() + 'px','width': + $(window).width() + 'px'});};
	function imgCss(){
		$("#simpleShow img").css({'max-height': + ($(window).height()-80) + 'px','max-width': + ($(window).width()-40) + 'px'});
		$("#simpleInfo").delay(200).animate({'top':'0px'},200);
		};
	//function to use later to display image and style it
	function imgDisplay(){$("#simpleShow").fadeIn(100, function(){$("#sSCenter").html("<div id='simpleInfo'>"+title+"<div id='simpleClose'>x</div></div><img src='"+href+"'>");
	imgCss();
		});};	
	//if the window sizechanges change the img size
	$(window).resize(function(){simpleShowbgCss();imgCss();});
	//start everyhting with a click				
	$("a.viewThumb").click(function(){
		//grab the link and title
			href = $(this).attr("href");
			title = $(this).attr("title");
		//hide the scrollbar
			$("body").css({'overflow': 'hidden'});
		//add the html to the doc
			$("body").prepend("<div id='simpleShow'><div id='sSCenter'><img src='#'></div></div>");
		//style the outer container	
			simpleShowbgCss();
		//preload the iimage then show it once it's loaded
			var simpleShowImg = new Image();
			$(simpleShowImg).bind('load',imgDisplay());
			simpleShowImg.url= href;		
		//make it go away	
			$("#simpleShow").click(function(){
			//visibly hide it
				$("#simpleShow").fadeOut(100);
			//remove the actual html
				setTimeout(function() {$("#simpleShow").remove();}, 105);
			//put the scroll bar back
				$("body").delay(105).css({'overflow': 'auto'});
			});
		return false;
	});
};
	$(simpleShow);	
