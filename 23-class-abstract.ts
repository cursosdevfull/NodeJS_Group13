abstract class Upload {
  abstract newFilename: string;

  constructor() {
    this.progress();
  }

  progress() {
    console.log("upload file");
  }

  abstract saveFile(file: File): void;
}

class UploadAWS extends Upload {
  newFilename = new Date().getTime().toString();

  saveFile(file: File) {
    console.log("Saving file");
  }

  override progress() {
    console.log("upload file to AWS");
  }
}

const upload = new UploadAWS();
const file = new File(['{"name": "sergio}'], "user.json", {
  type: "application/json",
});
upload.saveFile(file);
