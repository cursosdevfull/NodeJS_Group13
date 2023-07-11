import { MedicRepository } from "../domain/repositories/medic.repository";
import { MedicProperties } from "../domain/roots/medic";
import { MedicFactory } from "../domain/roots/medic.factory";
import { MedicSaveResult } from "../infrastructure/medic.infrastructure";

export class MedicApplication {
  private repository: MedicRepository;

  constructor(infrastructure: MedicRepository) {
    this.repository = infrastructure;
  }

  create(props: MedicProperties): MedicSaveResult {
    const resultFactory = MedicFactory.create(props);

    if (resultFactory.isErr()) {
      return resultFactory;
    } else {
      const saveResult = this.repository.save(resultFactory.value);

      return saveResult;
    }
  }

  getAll() {
    return this.repository.getAll();
  }
}
