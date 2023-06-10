// Domain
class Patient {
  firstName: string = "";
  lastName: string = "";
  age: number = 0;
}

interface PatientRepository {
  add(patient: Patient): void;
  getAll(): Array<Record<string, any>>;
}

// Application
class AddPatient {
  infrastructure: PatientRepository;

  constructor(infra: PatientRepository) {
    this.infrastructure = infra;
  }

  execute(patient: Patient) {
    //const infrastructure: PatientRepository = new PatientInfrastructure()
    this.infrastructure.add(patient);
  }

  getPatients() {
    console.log(this.infrastructure.getAll());
  }
}

// Infrastructure
class ORM {
  repository(table: string) {
    return {
      fetch: this.fetch,
    };
  }

  fetch() {
    return [
      {
        patientId: 1,
        name: "Luis",
      },
      {
        patientId: 2,
        name: "Claudia",
      },
    ];
  }
}

class PatientInfrastructure implements PatientRepository {
  orm: ORM;
  constructor() {
    this.orm = new ORM();
  }

  add(patient: Patient) {
    if (!this.validateExistingHistory(patient)) {
      console.log("Patient added", JSON.stringify(patient));
    }
  }

  getAll() {
    return this.orm.repository("patient").fetch();
  }

  validateExistingHistory(patient: Patient) {
    return false;
  }
}

const patient = new Patient();
patient.firstName = "Sergio";
patient.lastName = "Hidalgo";
patient.age = 40;

const infra: PatientRepository = new PatientInfrastructure();

const addPatient = new AddPatient(infra);
addPatient.execute(patient);
addPatient.getPatients();
