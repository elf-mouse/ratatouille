# 03 Use Device Emulators

## Android Emulator

[Android Studio](http://developer.android.com/sdk/installing/studio.html)

Label | Description
----- | -----------
AVD Name | What would you like to call the emulator. Include the device name as well as what version of Android you apply to it
Device | This will give you a set of default devices you can use.
CPU/ABI | You need to select ARM to test your site with the Chromium Content Shell.
Use Host GPU | Make sure you check this field as it can drastically improve the emulator's performance.
Other | The other fields are optional as to whether you fill them in or not.

## Chromium Content Shell on Android

    git clone https://github.com/PaulKinlan/chromium-android-installer.git
    chmod u+x ./chromium-android-installer/\*.sh
    ./chromium-android-installer/install-chromeandroid.sh

## [Firefox](https://ftp.mozilla.org/pub/mozilla.org/mobile/releases/latest/android/) on Android

From here, you can install the file onto an open emulator or connected Android device with the following command:

    adb install <path to APK>/fennec-XX.X.XX.android-arm.apk

## iOS Simulator

[XCode](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)

## Modern.IE

Modern.IE Virtual Machines let you access different versions of IE on your computer via VirtualBox (or VMWare). Choose a virtual machine on the [download page here](https://modern.ie/en-us/virtualization-tools#downloads).
