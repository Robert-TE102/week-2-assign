# week-2-assign

Week 2 Assignment

//TODO; Create thunmbnail images, so the user can click on them and see them in a fullscreen format.

//STEP 1; Store Image Data - const imageData =- imgName/SRC/Alt, URL or ./Local.

//STEP 2; Create thumbnail images - function createThumbnails(){};
//Select the DOM element (thumbnail-container) to contain our thumbnails, --> for loop; (for, forEach()); loop task: create img element; update the src and alt attributes (properties) of the img element to match those in the array (parameters).
Give each img a className (img.className); add an event listenener to each image --> the event handler of this event is the function you write to create the fullscreen images.
//Append the created images to the thumnail-container.

//STEP 3; Create fullscreen images - function createFullscreenImages(){} - Event handler; select the fullscreen-container, delete the current full screen image - (fullscreenContainer.innerHTML = "" or null), create image, update it's values (properties), add className for styling (making the image full screen), append the image to the container.
