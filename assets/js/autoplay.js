function playVideo() {
  var videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "block";

  var closeButton = document.getElementById("close-button");
  closeButton.style.display = "block";

  var iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/pjsbX16n1y0?si=hKvCl52E1J5jb74N&autoplay=1";
  iframe.frameBorder = "0";
  iframe.width="560";
  iframe.height="315";
  iframe.allow = "autoplay; encrypted-media";
  videoContainer.appendChild(iframe);

  document.getElementById("play-button").style.display = "none";
}

function closeVideo() {
  var videoContainer = document.getElementById("video-container");
  var closeButton = document.getElementById("close-button");

  videoContainer.innerHTML = "";
  videoContainer.style.display = "none";

  document.getElementById("play-button").style.display = "block";
  closeButton.style.display = "none";
}
