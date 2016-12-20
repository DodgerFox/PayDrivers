var swre = true;
$(document).ready(function() {
	loading()
	switchLabel()
	scrolling()
	anchors()
	clickButton()	
	casesOpen()
	formBreefOpen()
	openSliderPhoto()
	closeSliderPhoto()
});



var screen;
var screen = -1,
	pages = $('.section'),
	inscroll = false,
	contacts = $('.contacts'),
	firstScreen = $('.firstScreenWrap'),
	anchor = $('.headerMenuLink'),
	arrowNext = $('.arrowNext'),
	cases = $('.casesItem'),
	casesDetail = $('.sectionDetail'),
	arrowBackCases = $('.arrowBackCases'),
	arrowBackPhotos = $('.arrowBackPhotos'),
	photoSlide = $('.sectionSliderPhoto');
				



function loading() {
	var label = $('.firstScreenLabel');
	var text = $('.firstScreenText.active');
	var button = $('.firstScreenButton');
	var mouse = $('.firstScreenWrapButton img');
	var header = $('.header');
    	setTimeout(function () {
    		$(label).css('opacity', 1);
    	}, 500);
    	setTimeout(function () {
    		$(text).css('opacity', 1);
    	}, 1500);
    	setTimeout(function () {
    		$(button).css('opacity', 1);
    	}, 2500);
    	setTimeout(function () {
    		$(mouse).css('opacity', 1);
    		$(mouse).css('bottom', 60+'px');
    	}, 2800);
    	setTimeout(function () {
    		$(header).css('opacity', 1);  
    	}, 3500);

}


function anchors(){

	console.log(anchor);
	var logo = $('.logo');
	$(logo).click(function() {
		$(pages).css('top', 100 + '%');
		$(contacts).css('opacity', 0);
	    $(firstScreen).css('opacity', 1);
	    screen = -1;
	});
	$(anchor).click(function() {
		index = anchor.index(this);
		console.log(index)
		i = -1;
		while (i < index) {
			i++;
			console.log('i = ' + i);
			screen = index;
			console.log(screen);
			$(pages[screen]).css('top', 0);	
			$(anchor).css('color', '#fff');
		    $(anchor[screen]).css('color', '#4A90E2');
		}
		if (index == pages.length) {
			$(pages).css('top', -100 + '%');
	    	$(pages).css('opacity', 0);
	    	$(contacts).css('opacity', 1);
	    	$(firstScreen).css('opacity', 0);
	    	$(anchor).css('color', '#fff');
		}
		

	});
}


function scrolling() {
				console.log(pages);
				$('body').on('mousewheel', function(event) {
					console.log(event.deltaX, event.deltaY, event.deltaFactor);
  					if (!inscroll) {
  						inscroll = true;
  						console.log(pages.length);
	    				if (event.deltaY > 0) {
	    					console.log('screen ' + screen)
	    					slideDown()
		    				
	    				} else {
	   						slideUp()
	    				}
	    		}
    			

    			setTimeout(function () {
    				inscroll = false
    			}, 1300);
			});	
}


function clickButton() {	
		$('html').keydown(function(eventObject){
	  if (event.keyCode == 40) {
	    slideUp()
	  }else if (event.keyCode == 38) {
	  	slideDown()
	  }
	});
}


function slideDown() {

	if (screen > -1 ) {
	    if (screen !== pages.length) {
		    screen--;
		    $(anchor).css('color', '#fff');
		    $(anchor[screen]).css('color', '#4A90E2');
		    $(pages[screen]).css('opacity', 1);
		    $(pages[screen+1]).css('top', 100 + '%');
		    	$(firstScreen).css('opacity', 1);
		    	$(contacts).css('opacity', 0);
		
		}else{
			$(anchor).css('color', '#fff');
			
		    $(pages).css('top', 0 + '%');
	    	$(pages).css('opacity', 1);
	    	screen--;
	    	$(anchor[screen]).css('color', '#4A90E2');
		    }			
	}
}


function slideUp() {

	if (screen < pages.length) {
	    if (screen !== pages.length-1) {
	    	$(pages[screen]).css('opacity', 0);
	    	screen++;
			$(pages[screen]).css('top', 0);
			$(anchor).css('color', '#fff');
		    $(anchor[screen]).css('color', '#4A90E2');
			console.log('screen ' + screen)		
	    }
	    else{
	    	$(pages).css('top', -100 + '%');
	    	$(pages).css('opacity', 0);
	    	$(anchor).css('color', '#fff');
	    	screen++;
	    	console.log('screen ' + screen)
	    	if (screen == pages.length) {
	    		$(anchor[screen]).css('color', '#4A90E2');
	    		$(contacts).css('opacity', 1);
	    		$(firstScreen).css('opacity', 0);
	    	}
	    						
							
	    }

	}
}


function switchLabel() {
	var textSwitch = $('.firstScreenText'),
		swither = false;
		if (swither == false) {
			setTimeout(function () {
    		$(textSwitch[0]).css('opacity', 0);
    		setTimeout(function () {
    			$(textSwitch[0]).css('position', 'absolute');
    			$(textSwitch[1]).css('opacity', 1);
    		}, 1500);
    		
    	}, 8000);
		}else{
		setTimeout(function () {
    		$(textSwitch[0]).css('opacity', 1);
    		setTimeout(function () {
    			$(textSwitch[0]).css('position', 'relative');
    			$(textSwitch[1]).css('opacity', 0);
    		}, 1500);
    		
    	}, 8000);
		}


}
function casesOpen() {

	arrowBackCases.click(function() {
		$(pages).css('left', '0%');
		$(casesDetail).css('left', '100%');
	});
	cases.click(function() {
		index = cases.index(this);
		console.log(index)
		$(pages).css('left', '-100%');
		$(casesDetail[index]).css('left', '0%');
	});
}

function formBreefOpen() {
	buttonCloseBreef = $('.formFeedbackClose');
	buttonOpenBreef = $('.buttonBreef');
	feedbackBreef = $('.formFeedback');

	$(buttonOpenBreef).click(function () {
		console.log('afse');
		$(feedbackBreef).css('top', 0);
		$(feedbackBreef).css('opacity', 1);
	})
	$(buttonCloseBreef).click(function () {		
		$(feedbackBreef).css('opacity', 0);
		setTimeout(function () {
			$(feedbackBreef).css('top', -100 + '%');
		}, 400);
	})
}

function openSliderPhoto() {
	arrowNext.click(function () {
		$(casesDetail[index]).css('left', '-100%');
		$(photoSlide[index]).css('left', '0%');
	})
}
function closeSliderPhoto() {
	arrowBackPhotos.click(function () {
		$(casesDetail[index]).css('left', '0%');
		$(photoSlide[index]).css('left', '100%');
	})
}