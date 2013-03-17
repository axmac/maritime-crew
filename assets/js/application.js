/*
 * Application functions.
 *
 * @author Alex McClennan
 */

(function($) {
	// Add function to jQuery namespace
	$.extend({
 
		galleriaConstrainToImageHeight: function(image) {
			var imgHeight = image.height;
			// Change the container height to match the image height.
			$(".galleria-container").css("height", imgHeight);
			// Removes the img spacing; have to reset this every time as galleria sets the top value in code.
			$(".galleria-image img").css("top", 0);
		}
	});

	$.extend({
		getFacebookPhotoGridArray: function(data, size) {
			// Break the single array into a matrix, so that the elements can be grouped into rows and columns.
			var gridArray = [];
			for (var i = 0; i < data.length ; ) {
				// Create a sub-array with the supplied size.
				var subArray = [];
				for (var j = 0; j < size; j++, i++) {
					if (i < data.length) {
						if (data[i].type == "normal") 
							subArray.push(data[i]);
						else
							j--;
					} else {
						// Push a blank array element, so that the number of sub-array elements stays the same, and the html is correct.
						// The 'blank' item is used to apply blank (i.e. no) styling to the empty panels.
						subArray.push({blank: "i-am-a-blank-box"});
					}
				}
				// Push the newly built array into the parent array container.
				gridArray.push({sub: subArray});
			}
			
			return gridArray;
		}
	});

	$.extend({
		getLocalPhotoGridArray: function(data, size) {
			// Break the single array into a matrix, so that the elements can be grouped into rows and columns.
			var gridArray = [];
			for ( var i = 0; i < data.length ; ) {
				// Create a sub-array with the supplied size.
				var subArray = [];
				for ( var j = 0; j < size; j++, i++ ) {
					if ( i < data.length ) {
						if ( data[i].status == "current" ) 
							subArray.push(data[i]);
						else
							j--;
					} else {
						// Push a blank array element, so that the number of sub-array elements stays the same, and the html is correct.
						// The 'blank' item is used to apply blank (i.e. no) styling to the empty panels.
						subArray.push({blank: "i-am-a-blank-box"});
					}
				}
				// Push the newly built array into the parent array container.
				gridArray.push({sub: subArray});
				
				// Drop the index counter as the inner array loop has upped it by an extra one.
//				i--;
			}
			
			return gridArray;
		}
	});

	$.extend({
		galleriaCaptionAtBottom: function(image) {
			// Calculate the left position of the image, to align the tooltip against.
			var galleryWidth = parseInt($(".galleria-container").css("width"), 10);
			var imageWidth = image.width;
			var textLeft = (galleryWidth - imageWidth) / 2;
			
			// Calculate the bottom lift for the tooltip.
			var stageBottom = parseInt($(".galleria-stage").css("bottom"), 10);
			// Bottom isn't set, but we can use top because the image is centered,
			// hence top and bottom are equal.
			var imageTop = parseInt(image.style.top, 10);
			var textBottom = stageBottom + imageTop;
			
			$(".galleria-info").css("bottom", textBottom);
			$(".galleria-info").css("left", textLeft);
			$(".galleria-info").css("width", imageWidth);
		}
	}); // extend $

	$.extend({
		getURLParameter: function(name) {
			return decodeURI(
				(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
			);
		}
	}); // extend $

})(jQuery);
