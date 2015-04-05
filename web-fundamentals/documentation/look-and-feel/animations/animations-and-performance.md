# 08 Animations and Performance (60fps)

**TL;DR**

- Take care that your animations don’t cause performance issues; ensure you know the impact of animating a given CSS property.
- Animating properties that change the geometry of the page (layout) or cause painting are particularly expensive.
- Where you can, stick to changing transforms and opacity.
- Use `will-change` to ensure that the browser knows what you plan to animate.

For a full list of the work triggered by individual CSS properties can be found at [CSS Triggers](http://csstriggers.com/), and you can find a full guide on creating [High Performance Animations on HTML5 Rocks](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).

### Using the will-change property

CSS:

    .box {
      will-change: transform, opacity;
    }
