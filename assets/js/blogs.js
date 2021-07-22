// lightGallery(document.getElementById('animated-gallery'), {
//     thumbnail: true,
//   });

  var buttons = document.getElementsByClassName("image-container");
  for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i])
    lightGallery(buttons[i]);
  }
