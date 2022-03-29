import axios from "axios";
import { createReadStream } from "fs";
import FormData from "form-data";

var mediaUpload = async () => {
  let media_path = "./test/upload/resources/sample_image/bstack.jpg";

  const formData = new FormData();
  const mediaPath = createReadStream(media_path);

  formData.append("file", mediaPath);
  formData.append("custom_id", "sampleMedia");

  var config = {
    url: "https://api-cloud.browserstack.com/app-automate/upload-media",
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
    `Media Uploaded Successfully with response - ${axios_response.data.media_url}`
  );
  return axios_response.data.media_url;
};
export { mediaUpload };
