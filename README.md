# week-2-assign

Week 2 Assignment

//TODO; Create thunmbnail images, so the user can click on them and see them in a fullscreen format.

//STEP 1; Store Image Data - const imageData =- imgName/SRC/Alt, URL or ./Local.

//STEP 2; Create thumbnail images - function createThumbnails(){};
//Select the DOM element (thumbnail-container) to contain our thumbnails, --> for loop; (for, forEach()); loop task: create img element; update the src and alt attributes (properties) of the img element to match those in the array (parameters).
Give each img a className (img.className); add an event listenener to each image --> the event handler of this event is the function you write to create the fullscreen images.
//Append the created images to the thumnail-container.

//STEP 3; Create fullscreen images - function createFullscreenImages(){} - Event handler; select the fullscreen-container, delete the current full screen image - (fullscreenContainer.innerHTML = "" or null), create image, update it's values (properties), add className for styling (making the image full screen), append the image to the container.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

REFLECTIONS:
I had so much trouble with getting the Images from my html to link to anything with in the css / js, my webpage for soooo long kept displaying just a background colour, eventually got it to change to the images, but they were in a row below one another and nothing was inside the Thumbnail box, so then I swapped a few things around, and managed to get the thunmbnail images to appear in the box YAY!!, but then I was back to my background colour... DOH!!!... so then I tweaked a few things, got some help from Richard, tried to help Freya with her github issue and then went back to mine, and finally managed to get both images to work on the main screen and within the thumbnail box to change images, took me over 20 hours and almost my whole weekend of stressing lol, I may have developed a little bit from my first assignment, but would still like feed back on everything possible, What could I have improved? where did I go wrong with my currentDisplayimg not being full screen? did I do something wrong with the resolution with something not correctly being :absolute?, I kpt trying to change a few things to :absolute but kept losing the img on the background, so I stopped before I broke it again, I didn't stop... kept tweaking things as I'm typing this, lol, errm, I think I've completed all the goals... please be relentless and tell me what I didn't do, what would have made it much better... I can take it lol.
