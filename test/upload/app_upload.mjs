import axios from "axios";
import { createReadStream } from "fs";
import FormData from "form-data";

var appUpload = async () => {
  if (process.env.PLATFORM_NAME == "Android") {
    var app_path = "./test/upload/resources/sample_app/CameraImage-debug.apk";
  } else if (process.env.PLATFORM_NAME == "iOS") {
    var app_path =
      "./test/upload/resources/sample_app/IOSTakePhotoTutorial.ipa";
  }

  const formData = new FormData();
  const appPath = createReadStream(app_path);

  formData.append("file", appPath);
  formData.append("custom_id", "cameraApp");

  var config = {
    url: "https://api-cloud.browserstack.com/app-automate/upload",
    method: "post",
    headers: formData.getHeaders(),
    auth: {
      username: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
      password:
        process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
    },

    data: formData,
  };

  const axios_response = await axios(config);
  console.log(
    `App Uploaded Successfully with response - ${axios_response.data.app_url}`
  );
  return axios_response.data.app_url;
};

export { appUpload };
