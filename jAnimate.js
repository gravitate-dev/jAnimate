$(function() {
$.fn.callBackAnimate = function(){
		var animations = $(this).data("animateAnimations").split(/\s+/);
		
		while (animations[0].length < 2)
			animations.shift();
		if (animations.lenght == 0)
			return;
		$(this).removeClass("animate-"+animations[0]);
		
		animations.shift();
		
		//write back to the data
		$(this).offset($(this).offset());
		
		$(this).data("animateAnimations",animations.join(' '));
		if (animations.length > 0)
		{
			$(this).addClass("animate-"+animations[0]);
		} else { //this is the end of the animations
			$(this).removeData("animateAnimations"); 	
			if ($(this).data("jAnimate-hideAtEnd")==1)$(this).hide();
			if ($(this).data("jAnimate-removeAtEnd")==1)$(this).remove();
		}
		};

$.fn.jAnimate = function(options) {

 var settings = $.extend({
// These are the defaults.
animations: "fade",
hideAtEnd: 3,
removeAtEnd: 3
}, options );

//setup the end settings as well here
if ($(this).data('jAnimateEventListener')!="1") {
$(this).data('jAnimateEventListener','1');
	if (settings.hideAtEnd!=3) $(this).data("jAnimate-hideAtEnd",settings.hideAtEnd);
	if (settings.removeAtEnd!=3) $(this).data("jAnimate-removeAtEnd",settings.removeAtEnd);
	$(this).on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function() {
	$(this).callBackAnimate();
	}
);
}
		
//accept animations seperated by a space
//get old animations to add to it
var animations = $(this).data("animateAnimations");
if (typeof animations === "undefined")
	animations = settings.animations;
else 
	animations = animations+" "+settings.animations;


$(this).data("animateAnimations",animations);
var animations = $(this).data("animateAnimations").split(/\s+/);
$(this).addClass("animate-"+animations[0]);
	
return this;
};
	function init()
	{
			//unused placeholder for init of jAnimate
		
	}
	
	init();
	
	
	return { init : init };
});