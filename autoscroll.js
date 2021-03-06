// autoscroll current page at a specific speed

// one liner for bookmarklet
var s = prompt("Set autoscroll speed (press ESC to stop):"); (function(window, document) { var isScrolling, scrollTimeout; var defaultScrollSpeed = 50; var scrollSpeed = 50; var adjustIncrement = 2; var jumpIncrement = 50; function start() { window.addEventListener('keydown', keyPressed); window.addEventListener('keyup', keyReleased, false); autoScroll(); } function autoScroll() { if(scrollTimeout) { clearTimeout(scrollTimeout); } window.scrollBy(0,s); scrollTimeout = setTimeout(autoScroll, scrollSpeed); isScrolling = true; } var keysPressed = []; function keyPressed(event) { keysPressed[event.keyCode] = true; console.log(keysPressed); var commandKey = (keysPressed[91] || keysPressed[93]); var leftArrow = keysPressed[37]; var rightArrow = keysPressed[39]; var upArrow = keysPressed[38]; var downArrow = keysPressed[40]; var escKey = keysPressed[27]; if (escKey) { if (isScrolling){ turnOff(); } else { autoScroll(); } } if (downArrow) { event.preventDefault(); window.scrollBy(0, jumpIncrement); autoScroll(); } if (upArrow) { event.preventDefault(); window.scrollBy(0, -jumpIncrement); autoScroll(); } if (rightArrow) { event.preventDefault(); scrollSpeed -= adjustIncrement; autoScroll(); } if (leftArrow) { event.preventDefault(); scrollSpeed += adjustIncrement; autoScroll(); } } function keyReleased(event) { delete keysPressed[event.keyCode]; } function turnOff() { clearTimeout(scrollTimeout); isScrolling = false; } start(); })(window, document);

// formatted function
javascript: var s = prompt("Set autoscroll speed (press ESC to stop):");
(function (window, document) {
  var isScrolling, scrollTimeout;
  var defaultScrollSpeed = 50;
  var scrollSpeed = 50;
  var adjustIncrement = 2;
  var jumpIncrement = 50;
  function start() {
    window.addEventListener("keydown", keyPressed);
    window.addEventListener("keyup", keyReleased, false);
    autoScroll();
  }
  function autoScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    window.scrollBy(0, s);
    scrollTimeout = setTimeout(autoScroll, scrollSpeed);
    isScrolling = true;
  }
  var keysPressed = [];
  function keyPressed(event) {
    keysPressed[event.keyCode] = true;
    console.log(keysPressed);
    var commandKey = keysPressed[91] || keysPressed[93];
    var leftArrow = keysPressed[37];
    var rightArrow = keysPressed[39];
    var upArrow = keysPressed[38];
    var downArrow = keysPressed[40];
    var escKey = keysPressed[27];
    if (escKey) {
      if (isScrolling) {
        turnOff();
      } else {
        autoScroll();
      }
    }
    if (downArrow) {
      event.preventDefault();
      window.scrollBy(0, jumpIncrement);
      autoScroll();
    }
    if (upArrow) {
      event.preventDefault();
      window.scrollBy(0, -jumpIncrement);
      autoScroll();
    }
    if (rightArrow) {
      event.preventDefault();
      scrollSpeed -= adjustIncrement;
      autoScroll();
    }
    if (leftArrow) {
      event.preventDefault();
      scrollSpeed += adjustIncrement;
      autoScroll();
    }
  }
  function keyReleased(event) {
    delete keysPressed[event.keyCode];
  }
  function turnOff() {
    clearTimeout(scrollTimeout);
    isScrolling = false;
  }
  start();
})(window, document);
