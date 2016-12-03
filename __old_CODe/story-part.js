AFRAME.registerComponent('story-part',
{
  schema: {
    //default: '',
    thistextEL: {type:'string'},
    longtextEL: {type:'string'},
    button: {type:'string'},
    head: {type:'string'},
    text: {type:'string'},
    eventlistener: {type:'string', default:'mouseenter'},
    duration: {type: 'number', default: 300}
  },

  init: function() {
    var headEL = d3.select(this.data.thistextEL);
    var textEL = d3.select(this.data.longtextEL);
    var buttonEL = d3.select(this.data.button);
    var isVisible = false;
    var isChanging = false;
    var data = this.data;
    var el = this.el;
    var textelement = document.querySelector(this.data.longtextEL);
    var buttonelement = document.querySelector(this.data.button);
    var head = data.head;
    var text = data.text + "; align: center";
    //fadeIn();

    function fadeOut()
    {
      isChanging = true;
      headEL.transition()
              .duration(3000)
              .delay(0)
              .attrTween('bmfont-text', function() {
                var start = 'opacity: 1; text: ' + head;
                var end = 'opacity: 0; text: ' + head;
                return d3.interpolate(start, end);
              });
      textEL.transition()
              .duration(3000)
              .delay(0)
              .attrTween('bmfont-text', function() {
                var start = 'opacity: 1; text: ' + text;
                var end = 'opacity: 0; text: ' + text;
                return d3.interpolate(start, end);
              }).on('end', didFadeOut);
    }
    function didFadeOut()
    {
      isChanging = false;
      isVisible = false;
    }
    function fadeIn()
    {
      isChanging = true;
      headEL.transition()
              .duration(3000)
              .delay(0)
              .attrTween('bmfont-text', function() {
                var start = 'opacity: 0.05; text: ' + head;
                var end = 'opacity: 1; text: ' + head;
                return d3.interpolate(start, end);
              });
      textEL.transition()
              .duration(3000)
              .delay(1000)
              .attrTween('bmfont-text', function() {
                var start = 'opacity: 0; text: ' + text;
                var end = 'opacity: 1; text: ' + text;
                return d3.interpolate(start, end);
              }).on('end', didFadeIn);
      buttonEL.transition()
              .duration(3000)
              .delay(1000)
              .attrTween('material', function() {
                var start = 'opacity: 0';
                var end = 'opacity: 1';
                return d3.interpolate(start, end);
              });
    }
    function didFadeIn()
    {
      isChanging = false;
      isVisible = true;
    }

    el.addEventListener(data.eventlistener, function() {
      setTimeout(function () {
        if(!isChanging)
        {
          if(isVisible)
          {
            //fadeOut();
          }
          else
          {
            fadeIn();
          }
        }
      }, data.duration);
    });

    buttonelement.addEventListener('click', function() {
      console.log("did choose " + head);
    });
  }
});
