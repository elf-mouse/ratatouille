# 02 Device motion

**TL;DR**

- Use device motion for when the current motion of the device is needed.
- `rotationRate` is provided in °/sec.
- `acceleration` and `accelerationWithGravity` is provided in m/sec2.
- Be aware of differences between browser implementations.

## When to use device motion events

- Shake gesture to refresh data.
- In games to cause characters to jump or move.
- For health and fitness apps

## Check for support and listen for events

    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", deviceMotionHandler);
      setTimeout(stopJump, 3*1000);
    }

[sample](samples/jump-test.html)

## Handle the device motion events

For example, let’s take a look at a phone, lying on a flat table, with its screen facing up.

State | Rotation | Acceleration (m/s2) | Acceleration with gravity (m/s2)
----- | -------- | ------------------- | --------------------------------
Not moving | [0, 0, 0] | [0, 0, 0] | [0, 0, 9.8]
Moving up towards the sky | [0, 0, 0] | [0, 0, 5] | [0, 0, 14.81]
Moving only to the right | [0, 0, 0] | [3, 0, 0] | [3, 0, 9.81]
Moving up & to the right | [0, 0, 0] | [5, 0, 5] | [5, 0, 14.81]

Conversely, if the phone were held so the screen was perpendicular to the ground, and was directly visible to the viewer:

State | Rotation | Acceleration (m/s2) | Acceleration with gravity (m/s2)
----- | -------- | ------------------- | --------------------------------
Not moving | [0, 0, 0] | [0, 0, 0] | [0, 9.81, 0]
Moving up towards the sky | [0, 0, 0] | [0, 5, 0] | [0, 14.81, 0]
Moving only to the right | [0, 0, 0] | [3, 0, 0] | [3, 9.81, 0]
Moving up & to the right | [0, 0, 0] | [5, 5, 0] | [5, 14.81, 0]

### Sample: Calculating the maximum acceleration of an object

    if (evt.acceleration.x > jumpMax.x) {
      jumpMax.x = evt.acceleration.x;
    }
    if (evt.acceleration.y > jumpMax.y) {
      jumpMax.y = evt.acceleration.y;
    }
    if (evt.acceleration.z > jumpMax.z) {
      jumpMax.z = evt.acceleration.z;
    }
