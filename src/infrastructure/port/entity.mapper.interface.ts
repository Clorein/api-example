/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entity } from "application/domain/models/entity";

export interface IEntityMapper<M extends Entity, EM> {
    transform(item: any): any

    modelToModelEntity(item: M): EM

    jsonToModel(json: any): M
}
