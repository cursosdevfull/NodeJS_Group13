// Domain
interface IUpload {
  save(file: File): void;
}

// Application
class UploadFile {
  constructor(private readonly repository: IUpload) {}

  execute(file: File) {
    this.repository.save(file);
  }
}

// Infrastructure
class UploadAWS implements IUpload {
  save(file: File): void {
    this.progress(file);
    console.log("File uploaded");
  }

  private progress(file: File) {
    console.log("File is uploading");
  }
}

class UploadGCP implements IUpload {
  save(file: File): void {
    this.status(file);
    this.sentNotificationSlack();
  }

  status(file: File) {
    console.log("Status of file");
  }

  sentNotificationSlack() {
    console.log("Notification: file uploaded");
  }
}

class UploadAzure implements IUpload {
  save(file: File): void {
    console.log("File's uploading to Azure");
  }
}

const file = new File(["data"], "data.txt", { type: "text/plain" });
const upload: IUpload = new UploadAzure();
const app = new UploadFile(upload);

app.execute(file);
