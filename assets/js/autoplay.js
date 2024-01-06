function playVideo() {
    // Get the video container element
    var videoContainer = document.getElementById('video-container');

    // Show the video container
    videoContainer.style.display = 'block';

    // Create an iframe element for the YouTube video
    var iframe = document.createElement('iframe');
    iframe.src ='https://www.youtube.com/embed/pjsbX16n1y0?si=hKvCl52E1J5jb74N&autoplay=1';
     iframe.width = '560';
     iframe.height = '315';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    videoContainer.appendChild(iframe);

    // Hide the play button after clicking
    document.getElementById('play-button').style.display = 'none';

    // // Show the close button
    var closeButton = document.getElementById('close-button');
    closeButton.style.display = 'block';
  
}
  function closeVideo() {
    // Get the video container and close button elements
    var videoContainer = document.getElementById('video-container');
    var closeButton = document.getElementById('close-button');

    // Remove the iframe
    videoContainer.innerHTML = '';

    // Hide the video container
    videoContainer.style.display = 'none';

    // Show the play button
    document.getElementById('play-button').style.display = 'block';

    
    closeButton.style.display = 'none';
  }