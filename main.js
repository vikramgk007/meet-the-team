function adjustIframeHeight() {
  const iframe = document.getElementById("my-iframe");
  if (iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }
}

// Adjust the iframe height when the content is loaded and when the window is resized
window.addEventListener("load", adjustIframeHeight);
window.addEventListener("resize", adjustIframeHeight);
