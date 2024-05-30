$(document).ready(function() {
    // Initialize the Cropme plugin
    var $cropContainer = $('#image-crop-container').cropme({
      container: {
        width: '100%',
        height: '100%'
      },
      viewport: {
        width: 250,
        height: 250,
        type: 'circle' // You can change to 'square' if you want a square crop area
      },
      zoom: {
        enabled: true,
        min: 0.5,
        max: 2
      }
    });
  
    // Handle image upload
    $('#upload-image').on('change', function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $cropContainer.cropme('bind', {
            url: e.target.result
          });
        }
        reader.readAsDataURL(input.files[0]);
      }
    });
  
    // Handle crop button click
    $('#crop-button').on('click', function() {
      $cropContainer.cropme('crop').then(function(output) {
        $('#cropped-result').html('<img src="' + output + '" alt="Cropped Image">');
      });
    });
  });
  