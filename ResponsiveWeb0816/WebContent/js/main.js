// When the DOM is ready
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();
  
  // Create Animation for 0.5s
  /// TweenMax.to( target:Object, duration:Number, vars:Object ) ;
  var tween = TweenMax.fromTo('#animation', 0.5,
		    {
		        backgroundColor: 'rgb(255, 39, 46)',
		        scale: 1,
		        
		    },
		    {
		        scale: 2,
		        rotation: 360,
		        repeat: -1, /* Aka an infinite amount of repeats */
		        yoyo: true /* Make it go back and forth or not */
		    }
		);
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 150 /* offset the trigger 150px below #scene's top */
/*    duration: 300  How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
});
