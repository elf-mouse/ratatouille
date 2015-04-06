# 05 Detect When Launched From The Home Screen

In Mobile Safari, querying `window.navigator.standalone` will tell you whether your app is running as home screen icon or simply in the browser. In Internet Explorer, you can achieve the same by querying `window.external.msIsSiteMode()`. Here’s a combined check:

    var fromHomescreen = window.navigator.standalone || window.external.msIsSiteMode();
    if(!fromHomescreen) {
        // show them a guide on how to install the web app
        ...
    }

Unfortunately, it is not possible to detect the same in Chrome for Android.
