class Upload {
  uploadFile(file: File) {
    this.progress();
    //this.save(file)
  }

  progress() {
    console.log("progress upload");
  }

  save(file: File) {
    console.log("file uploaded");
    return "file saved";
  }
}

class UploadAWS extends Upload {
  override save(file: File) {
    console.log("File uploaded to AWS");
    console.log("Notifications send");
  }
}

const upload = new UploadAWS();
const file = new File(["hola mundo"], "data.txt", { type: "text/plain" });
upload.uploadFile(file);
