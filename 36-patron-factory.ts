interface IUpload {
  save(file: File): void;
}

class FactoryUploadAWS implements IUpload {
  save(file: File): void {
    this.startProgress();
    setTimeout(() => this.endProgress(), 2000);
  }

  startProgress() {
    console.log("Uploading file to AWS");
  }

  endProgress() {
    console.log("File uploaded");
  }
}

class FactoryUploadAzure implements IUpload {
  save(file: File): void {
    this.progress();
  }

  progress() {
    console.log("File uploaded to Azure");
  }
}

class FactoryUploadGCP implements IUpload {
  save(file: File): void {
    this.progressFileUpload();
  }

  progressFileUpload() {
    console.log("File uploaded to GCP");
  }
}

class FactoryDigitalOcean {}

type CLOUD = "aws" | "azure" | "gcp";

enum CloudEnum {
  aws = "aws",
  azure = "azure",
  gcp = "gcp",
}

const listFactory: Record<CLOUD, IUpload> = {
  aws: new FactoryUploadAWS(),
  azure: new FactoryUploadAzure(),
  gcp: new FactoryUploadGCP(),
};

function FactoryUpload(cloud: CloudEnum) {
  return listFactory[cloud];
  /*let cloudSelected
  
    switch(cloud) {
      case "aws":
        cloudSelected = new FactoryUploadAWS()
        break;
      case "azure":
        cloudSelected = new FactoryUploadAzure()
        break;
      case "gcp":
        cloudSelected = new FactoryUploadGCP()
        break;
    }
  
    return cloudSelected*/
}

//const upload = new FactoryUploadAWS()
//const upload = FactoryUpload(CloudEnum.aws)
//const upload = FactoryUpload(CloudEnum.azure)
const upload = FactoryUpload(CloudEnum.gcp);

const file: File = new File(["data in file"], "myData.txt", {
  type: "text/plain",
});
upload.save(file);
