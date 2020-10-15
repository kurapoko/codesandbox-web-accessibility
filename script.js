(function () {
  var preTag = document.querySelectorAll("pre");
  for (var i = 0; i < preTag.length; i++) {
    var after = preTag[i].innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    preTag[i].innerHTML = after;
  }
})();
