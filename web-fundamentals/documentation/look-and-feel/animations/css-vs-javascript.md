# 01 CSS vs JavaScript Animations

**TL;DR**

- Use CSS animations for simpler “one-shot” transitions, like toggling UI element states.
- Use JavaScript animations when you want to have advanced effects like bouncing, stop, pause, rewind or slow-down.
- If you choose to animate with JavaScript, go with [TweenMax](http://greensock.com/tweenmax) or, if you want a lighter-weight solution, [TweenLite](http://greensock.com/tweenlite).

### Animate with CSS

CSS:

    .box {
      -webkit-transform: translate(0, 0);
      -webkit-transition: -webkit-transform 500ms;

      transform: translate(0, 0);
      transition: transform 500ms;
    }

    .box.move {
      -webkit-transform: translate(100px, 100px);
      transform: translate(100px, 100px);
    }

JS:

    box.classList.add('move');

JS:

    var box = document.querySelector('.box');
    box.addEventListener('transitionend', onTransitionEnd, false);

    function onTransitionEnd() {
      // Handle the transition finishing.
    }

[See sample](samples/box-move-simple.html)

CSS:

    /**
     * This is a simplified version without
     * vendor prefixes. With them included
     * (which you will need) things get far
     * more verbose!
     */
    .box {
      /* Choose the animation */
      animation-name: movingBox;

      /* The animation’s duration */
      animation-duration: 1300ms;

      /* The number of times we want
          the animation to run */
      animation-iteration-count: infinite;

      /* Causes the animation to reverse
          on every odd iteration */
      animation-direction: alternate;
    }

    @keyframes movingBox {
      0% {
        transform: translate(0, 0);
        opacity: 0.3;
      }

      25% {
        opacity: 0.9;
      }

      50% {
        transform: translate(100px, 100px);
        opacity: 0.2;
      }

      100% {
        transform: translate(30px, 30px);
        opacity: 0.8;
      }
    }

[See sample](samples/box-move-keyframes.html)

### Animate with JavaScript

JS:

    function Box () {

      var animationStartTime = 0;
      var animationDuration = 500;
      var target = document.querySelector('.box');

      this.startAnimation = function() {
        animationStartTime = Date.now();
        requestAnimationFrame(update);
      };

      function update() {
        var currentTime = Date.now();
        var positionInAnimation = (currentTime - animationStartTime) / animationDuration;

        var xPosition = positionInAnimation * 100;
        var yPosition = positionInAnimation * 100;

        target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';

        if (positionInAnimation <= 1)
          requestAnimationFrame(update);
      }
    }

    var box = new Box();
    box.startAnimation();

[See sample](samples/box-move-js.html)
