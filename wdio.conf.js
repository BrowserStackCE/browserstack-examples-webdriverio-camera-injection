import { mediaUpload as mediaUploadApiResponse } from "./test/upload/media_upload.mjs";
import { appUpload as appUploadApiResponse } from "./test/upload/app_upload.mjs";

exports.config = {
  hostname: "hub-cloud.browserstack.com",

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./test/specs/**/*.js"],

  maxInstances: 10,

  capabilities: [
    {
      project: "Webdriverio Camera Injection Project",
      build: "Camera Injection Demo",
      "browserstack.debug": "true",
      "browserstack.enableCameraImageInjection": "true",
      app: process.env.BROWSERSTACK_APP_ID,
    },
  ],
  //For additional logs, please set to info or trace
  logLevel: "silent",

  bail: 0,
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["browserstack"],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    require: ["@babel/register"],
  },

  onPrepare: async function (config, capabilities) {
    var appResponse = await appUploadApiResponse();
    capabilities[0]["app"] = appResponse;
    if (process.env.PLATFORM_NAME == "Android") {
      capabilities[0]["device"] = "Samsung Galaxy S10";
      capabilities[0]["autoGrantPermissions"] = "true";
    } else if (process.env.PLATFORM_NAME == "iOS") {
      capabilities[0]["device"] = "iPhone 12";
      capabilities[0]["autoAcceptAlerts"] = "true";
    }
  },

  before: async function () {
    var imageResponse = await mediaUploadApiResponse();
    driver.execute(
      'browserstack_executor: {"action": "cameraImageInjection", "arguments": {"imageUrl":"' +
        imageResponse +
        '"}}'
    );
  },
};
