// bs://8a5cb13fa0298d9c419f4b8e48806e97fe20ea4c

describe("Android Camera Injection", () => {
  it("Captures injected image for Android", async () => {
    var startCameraButton = await $(`id=com.bsstag.cameraimage:id/button`);
    await startCameraButton.click();

    var cameraButton = await $(
      `android=new UiSelector().text("Shutter").className("GLButton")`
    );
    await cameraButton.click();

    var okayButton = await $(`id=com.sec.android.app.camera:id/okay`);
    await okayButton.click();
  });
});
