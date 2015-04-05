# 01 Use Real Devices

**TL;DR**

- There's no substitute for running your site on a real device. You must try your site on real devices.
- BrowserSync allows you to synchronise user interactions across a number of devices at the same time.

## Connect to a Local Server

find your local IP address:

OS X and Ubuntu users can always run `ifconfig` from a command prompt; Windows users can run `ipconfig` from the command prompt.

## Use Port Forwarding to Connect to Your Server

1. The first step is to enable USB debugging on your Android device. Go to **Settings > About Phone** and tap the **Build number** seven times. 2. Then return back to the **Settings** screen and select **Developer Options**.
3. In Developer Options, make sure the **USB debugging** is checked.
4. Check your site running locally. In this example we have a server running on port **3000**, so the URL is http://localhost:3000/:
5. Open a new tab in Chrome and type in the URL `chrome://inspect` and plug your phone in over USB.
6. Clicking on the `Port Forwarding` button will allow you to enter the port your server is on as well as a localhost port on your phone.
7. Make sure the ‘**Enable port forwarding**’ checkbox at the bottom of the popup is checked. Press ‘Done’ and you’ll be able to open http://localhost:3000 on your mobile device and see your site.

## Using DevTools for Mobile Browsers

### [Chrome for Android](https://developer.chrome.com/devtools/docs/remote-debugging)

### Safari for iOS

To debug Safari for iOS, follow these steps:

1. Open Safari on your iOS device.
2. Connect it to your computer via USB.
3. Open Safari on your computer.
4. In Safari’s menu, go to `Develop` and, look for your devices name.
5. Select the tab you want to debug.

### [IE for Windows Phone](http://msdn.microsoft.com/en-us/library/ie/dn255001%28v=vs.85%29.aspx)

## Sync Devices with [BrowserSync](http://www.browsersync.io/)
