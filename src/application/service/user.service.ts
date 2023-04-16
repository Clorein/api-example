import { inject, injectable } from "inversify";
import 'reflect-metadata'
import { Identifier } from "../../di/identifier";
// import { Strings } from '../../utils/strings'
import { User } from "application/domain/models/user";
import { IQuery } from "application/port/query.interface";
import { IUserService } from "application/port/user.service.interface";
import { IUserRepository } from "application/port/user.repositoy.interface";
// import { UserRepoModel } from "infrastructure/database/schema/user.schema";

@injectable()
export class UserService implements IUserService{
    constructor(
        @inject(Identifier.USER_REPOSITORY) private readonly _userRepository: IUserRepository
    ){
    }

    public async add (user: User) : Promise<User | undefined>{
        try{
            // Salva o novo usuário no banco de dados
            const savedUser: User | undefined =  await this._userRepository.create(user)
            return Promise.resolve(savedUser);
        }catch(error){
            console.log(`Error: ${error}`);
            return Promise.reject(error)
        }
    }

    public async getAll(query: IQuery): Promise<Array<User>> {
        try {
            const users: Array<User> = await this._userRepository.find(query)
            return Promise.resolve(users)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async getById(userId: string, query: IQuery): Promise<User | undefined> {
        throw new Error('Not implemented!')
    }

    public async update(item: User): Promise<User | undefined> {
        throw new Error('Not implemented!')
    }

    public async remove(id: string): Promise<User | undefined> {
        throw new Error('Not implemented!')
    }

    public count(query: IQuery): Promise<number> {
        return this._userRepository.count(query)
    }


}