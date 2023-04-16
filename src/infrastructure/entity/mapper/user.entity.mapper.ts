/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import { User } from "application/domain/models/user";
import { UserEntity } from "../user.entiy";
import { IEntityMapper } from "infrastructure/port/entity.mapper.interface";

@injectable()
export class UserEntityMapper implements IEntityMapper<User, UserEntity> {
    public transform(item: any): any {
        if (item instanceof User) return this.modelToModelEntity(item)
        return this.jsonToModel(item) // json
    }

    public modelToModelEntity(item: User): UserEntity {
        const result: UserEntity = new UserEntity()
        if (item.id !== undefined) result.id = item.id
        if (item.name !== undefined) result._name = item.name
        if (item.email !== undefined) result._email = item.email
        return result
    }

    /**
     * Convert JSON for {Diagnosis}.
     *
     * @see Each attribute must be mapped only if it contains an assigned value,
     * because at some point the attribute accessed may not exist.
     * @param json
     */
    public jsonToModel(json: any): User {
        const result: User = new User()
        if (!json) return result

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.updated_at !== undefined) result.updated_at = json.updated_at
        if (json.name !== undefined) result.name = json.name
        if (json.email !== undefined) result.email = json.email

        return result
    }
}