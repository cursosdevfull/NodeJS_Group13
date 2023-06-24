type TYPE_LOCATION = "cloud" | "local";
type TYPE_DESTINATION =
  | "aws"
  | "azure"
  | "gcp"
  | "serverlocal01"
  | "serverlocal02";

interface IUpload {
  save(file: File): void;
}

// CLOUD
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

// LOCAL
class FactoryServerlocal01 implements IUpload {
  save(file: File): void {
    console.log(`Uploading file: ${file.name} in Serverlocal01`);
  }
}

class FactoryServerlocal02 implements IUpload {
  save(file: File): void {
    console.log(`Uploading file: ${file.name} in Serverlocal02`);
  }
}

const listAbstractFactories: Record<TYPE_LOCATION, Record<string, IUpload>> = {
  cloud: {
    aws: new FactoryUploadAWS(),
    azure: new FactoryUploadAzure(),
    gcp: new FactoryUploadGCP(),
  },
  local: {
    serverlocal01: new FactoryServerlocal01(),
    serverlocal02: new FactoryServerlocal02(),
  },
};

function uploadFile(
  localOrCloud: TYPE_LOCATION,
  destination: TYPE_DESTINATION
) {
  const factorySelected: IUpload =
    listAbstractFactories[localOrCloud][destination];
  return factorySelected ?? null;
}

const upload = uploadFile("cloud", "serverlocal02");

if (!upload) throw new Error("Error while selecting factory");

const file: File = new File(["data in file"], "myData.txt", {
  type: "text/plain",
});
upload.save(file);
