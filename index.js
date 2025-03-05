$(function() {
    function randomNum(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    }
    
    function heartAnimation() {
      $this = $('.effect-text');
      var heartCount = ($this.width()/100)*20;
      for (var i = 0; i< heartCount; i++) {
        var heartSize = (randomNum(60, 120) / 10);
        $this.append('<span class="tiny-heart" style="top: '+ randomNum(0, 1100) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 3) +'s; animation-duration: '+ randomNum(2, 5) +'s"></span>')
      }
    }
    
    heartAnimation();
  })