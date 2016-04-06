(function () {
  var windowHeight = window.document.documentElement.clientHeight;
  var windowWidth = window.document.documentElement.clientWidth;
  
  var imgs = Array.prototype.slice.call(document.querySelectorAll('img.lazyload'));

  var load = function () {
    Array.prototype.forEach.call(imgs, function (img) {
      if (!img.dataset['src']) {
        return;
      }

      var rect = img.getBoundingClientRect();
      console.log(rect);
      if (rect.top >= 0 && rect.left >= 0 && rect.top < windowHeight && rect.left < windowWidth) {
        img.setAttribute('src', img.dataset['src']);
        imgs.splice(imgs.indexOf(img), 1);
      }
    });  
  };

  var tid = null;
  window.addEventListener('scroll', function (argument) {
    clearTimeout(tid);
    tid = setTimeout(function () {
      load();
    }, 200);
  }, false);
  load();
  
})();
