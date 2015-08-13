/* mb_img_swap function
// file: mb_img_swap.js
// Contributor: bizzymonkai

Simple Rollover image object function
(no JQuery, no Dreamweaver spagetti code)

Description: simple, fast img rollovers that makes html markup extremely easy, forget the INSERT > Image Object > Rollover Image spagetti code from Dreamweaver! Works for an unlimited about of rollover image objects using the correct attributes and class definition. 
~Bizzy Monkai

Instructions: 
1) place function below in <HEAD> or include in head src
2) DONT FORGET: Invoke addSwaps(); on content refresh and page load
   simplest way: 
   
   <body onLoad="addSwaps()"> OR, if you already have an onLoad function:
   add the line "addSwaps();" to it.
   
   If you are refresh content that might have new img_swap HTML in it via AJAX:
   invoke the addSwaps(); function again.
   
3) Sample HTML markup:

One Simple tag with new atttributes:
<img class="mb_img_swap" height="64" width="64" src="img/ting.png" uber_src="img/_tingMO.png" />

in this example: ting.png is the displayed default img
timgMO.png is the rollover img. it is a good idea to use the same dimensions for the different images, obviously.

4) This completely frees the <a> tag from the equation. you can encapsulate rollovers in a link, or not, it doesn't matter. the rollover behavoir is now associated with the img class, and not the link's event behavoir. Rolls back instantly to original image. delete the obj.onmouseout = function() if you don't want it to rollback.

5) test page and images are in this repository as 'img_swap_test.html'

6) DELETE ALL THESE INSTRUCTIONS IF YOU WANT
*/

function addSwaps(){
  var swaps = document.getElementsByClassName('mb_img_swap');
// if you have already included jQuery: replace the above line with: var swaps = $('.mb_img_swap');
 var imgLoad = [];
	function attachBehavior(obj, iter) {
			var origSrc = obj.getAttribute("src");
			var uberSrc = obj.getAttribute("uber_src");
			// preLoad over states
			imgLoad[iter] = new Image();
			imgLoad[iter].src = uberSrc;
 						// use event listeners
						obj.onmouseover = function(){
						obj.setAttribute("src", uberSrc);
		   				}
						obj.onmouseout = function(){
						obj.setAttribute("src", origSrc);
						}
			}
	for(var i = 0; i < swaps.length; i++) {
			attachBehavior(swaps[i], i);		
			}	
}
