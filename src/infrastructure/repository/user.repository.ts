import { User } from "application/domain/models/user";
import { IUserRepository } from "application/port/user.repositoy.interface";
import { UserEntity } from "infrastructure/entity/user.entiy";
import { injectable } from "inversify";
import { BaseRepository } from "./base/base.repository";

@injectable()
export class UserRepository extends BaseRepository<User, UserEntity> implements IUserRepository {
    
}