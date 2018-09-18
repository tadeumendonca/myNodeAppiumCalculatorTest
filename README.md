# myNodeAppiumCalculatorTest
Sample repository with UI Test Automation for Android Appium running over Node.JS + Mocha + Appium.

Requirements:
* Environment Vars Set - ANDROID_HOME & JAVA_HOME
* Android SDK Build Tools and Platform Tools must be added to PATH environment.
* Install Appium-Doctor as npm global dependency in order to check your local setup status.
* Download Calcu as sample APK in order to run this project. Available on [Google Play Store](https://play.google.com/store/apps/details?id=com.candl.athena).
* Configure desiredCapabilities.js with your own device id name.
* Install Appium Server and start server running on localhost and default port - [Link](https://github.com/appium/appium-desktop/releases/tag/1.7.0).
* Install Mocha as npm global dependency in order to run the project with "npm run test" command.
* Tests have been adjusted to Brazil Portuguese language running on my device. Be aware that some ITs may fail  if you're running on different regional settings on your android device.


This sample repository is based on tutorial available on this [Blog](https://www.softwaretestingmaterial.com/appium-with-nodejs-for-automation-testing-of-android-applications/) post.
