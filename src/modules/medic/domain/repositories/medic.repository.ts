import { MedicSaveResult } from "../../infrastructure/medic.infrastructure";
import { Medic } from "../roots/medic";

export interface MedicRepository {
  save(medic: Medic): MedicSaveResult;
}
