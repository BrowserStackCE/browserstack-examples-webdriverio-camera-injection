![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# <h1 align="center"> :zap: BrowserStack Camera Injection Example WebdriverIO <a href="https://webdriver.io/"> <img src="https://avatars.githubusercontent.com/u/72550141?s=48&v=4" alt="WebdriverIO" height="22" /></a> <a href="https://nodejs.org/en/"> <img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-icon-logo.png" alt="nodejs" height="22" /></a> <a href="https://mochajs.org/"><img src="https://brandslogos.com/wp-content/uploads/images/large/mocha-logo.png" alt="mocha" height="22" /></a> :zap:</h1>

# :label: [Introduction](https://github.com/browserstack/browserstack-examples-junit5#introduction)

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This BrowserStack Example repository demonstrates a WebdriverIO tests framework written in Mocha and nodeJS with camera injection testing capabilities. The WebdriverIO test scripts are written for sample [android](test/upload/resources/sample_app/CameraImage-debug.apk) and [iOS](test/upload/resources/sample_app/IOSTakePhotoTutorial.ipa) apps. Both the apps have camera capture functionality which captures image and displays on the next screen. The WebDriverIO tests run on android and iOS platforms camera injection capabilities.

## Tests Included in this Repository

Following are the test cases included in this repository:

| Module                   | Test Case                           | Description                                                                                                                                                       |
| ------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android Camera Injection | Captures injected image for Android | This test case injects [image](test/upload/resources/sample_image/bstack.jpg) in [app](test/upload/resources/sample_app/CameraImage-debug.apk) on Android device. |
| iOS Camera Injection     | Captures injected image for iOS     | This test case injects [image](test/upload/resources/sample_image/bstack.jpg) in [app](test/upload/resources/sample_app/IOSTakePhotoTutorial.ipa) on iOS device.  |

# :gear: [Repository Setup](https://github.com/browserstackCE/browserstack-examples-webdriverio-camera-injection#repositorysetup)

## Prerequisites

Ensure you have the following dependencies installed on the machine

1. [NodeJs](https://nodejs.org/en/download/)

2. [BrowserStack App-Automate Account](https://www.browserstack.com/app-automate). ![BrowserStack](https://img.shields.io/badge/For-BrowserStackAutomate-orange)

## :wrench: Repository Configuration

:pushpin: Clone this repository
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<code> git clone git@github.com:browserstackCE/browserstack-examples-webdriverio-camera-injection.git</code>
<br/> <br/>
:pushpin: Navigate to the repository directory
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<code>cd browserstack-examples-webdriverio-camera-injection</code>
<br/> <br/>
:pushpin: Install required dependencies
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<code>npm install</code>

# :rocket: [Test Execution](https://github.com/browserstack/browserstack-examples-junit5#testexecution)

## Test Execution Prerequisites [![BrowserStack](https://img.shields.io/badge/For-BrowserStackAutomate-orange)]()

:pushpin: Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
<br/> <br/>
:pushpin: Identify your BrowserStack username and access key from the [BrowserStack App-Automate Dashboard](https://app-automate.browserstack.com/) and export them as environment variables using the below commands.
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

- For Unix-like or Mac machines:

```sh
export BROWSERSTACK_USERNAME=<browserstack-username> &&
export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
```

- For Windows:

```shell
set BROWSERSTACK_USERNAME=<browserstack-username>
set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
```

Alternatively, you can also add your username and access_key objects in [webdriverio Configuration file](wdio.conf.js), [App upload file](test/upload/app_upload.mjs) and [Media upload file](test/upload/media_upload.mjs).

:page_facing_up: Note: We have configured a list of test capabilities in this [configuration file](wdio.conf.js). You are free update them based on your device test requirements. The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/app-automate/capabilities)

## Test Execution Profiles

Following are the preconfigured test execution profiles available in the sample [package.json](package.json)

<table>
 <tr>
  <th width='12%'>Profile</th>
  <th width='10%'>Description</th>
  <th width='10%'>npm Command
  </th>
  <th width='10%'>Configuration File
  </th>
 </tr>
 <tr>
  <td>android
  </td>
  <td>Runs a single camera injection test on Samsung Galaxy S10 device on Browserstack.</td>
  <td><code>npm run android</code></td>
  <td><code>package.json</code></td>
 </tr>
  <tr>
  <td>iOS
   </td>
  <td>Runs a single camera injection test on iPhone 12 device on Browserstack.</td>
  <td><code>npm run iOS</code></td>
  <td><code>package.json</code></td>
 </tr>
</table>

# :card_file_box: [Additional Resources](https://github.com/browserstack/browserstack-examples-junit5#additionalresources)

- View your test results on the [BrowserStack App-Automate dashboard](https://app-automate.browserstack.com/dashboard/v2)
- Documentation for writing [App- Automate test scripts in WebdriverIO](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs/webdriverio)
- Documentation for [Camera Injection](https://www.browserstack.com/docs/app-automate/appium/advanced-features/camera-image-injection)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/app-automate/capabilities)
