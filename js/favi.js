var favicon_images = [
                    'favicon0.ico',
                    'favicon1.ico',
                    'favicon2.ico',
                    'favicon3.ico',
                    'favicon4.ico',
                    'favicon5.ico',
                    'favicon6.ico'
                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
	// If last image then goto first image
	// Else go to next image    
	if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 200);