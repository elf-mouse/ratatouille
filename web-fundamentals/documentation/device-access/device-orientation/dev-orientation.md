# 01 Device orientation

**TL;DR**

- Use sparingly.
- Test for support.
- Don't update the UI on every orientation event; instead sync to requestAnimationFrame.

## When to use device orientation events

- Update a map as the user moves.
- Subtle UI tweaks, for example adding paralax effects.
- Combined with GeoLocation, can be used for turn by turn navigation.

## Check for support and listen for events

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler, false);
      document.getElementById("doeSupported").innerText = "";
    }

[sample](samples/dev-orientation.html)

## Handle the device orientation events

The device orientation event fires when the device moves, or changes orientation. It returns data about the difference between the device in its current position in relation to the [Earth coordinate frame](https://developers.google.com/web/fundamentals/device-access/device-orientation/index.html#earth-coordinate-frame).

The event typically returns three properties, `alpha`, `beta`, and `gamma`. On Mobile Safari, and additional parameter [webkitCompassHeading](https://developer.apple.com/library/safari/documentation/SafariDOMAdditions/Reference/DeviceOrientationEventClassRef/DeviceOrientationEvent/DeviceOrientationEvent.html) is returned with the compass heading.
