# 02 Monitor the user's location

**TL;DR**

- Check for Compatibility before you use the API.
- Minimize the use of watching the user's location to save battery.
- Always handle errors.

## When to use Geolocation to watch the user’s location

- You want to obtain a more precise lock on the user location.
- Your application needs to update the user interface based on new location information.
- You applications needs to update business logic when the user enters a certain defined zone.

## Watching the users location

1. Gets a more accurate lock on the user.
2. The user’s position changes.

JS:

    var watchId = navigator.geolocation.watchPosition(function(position) {
      document.getElementById('currentLat').innerHTML = position.coords.latitude;
      document.getElementById('currentLon').innerHTML = position.coords.longitude;
    });

## Always clear up and conserve battery

Once you have no need to track the user’s position call `clearWatch` to turn of the geolocation systems.

## Always Handle Errors

    window.onload = function() {
      var startPos;
      var geoSuccess = function(position) {
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
      };
      var geoError = function(position) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
      };
      navigator.geolocation.watchPosition(geoSuccess, geoError);
    };
