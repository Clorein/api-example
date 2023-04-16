import { App } from "app";
import { User } from "application/domain/models/user";
import { IUserRepository } from "application/port/user.repositoy.interface";
import { IUserService } from "application/port/user.service.interface";
import { UserService } from "application/service/user.service";
import { UserRepoModel } from "infrastructure/database/schema/user.schema";
import { UserEntityMapper } from "infrastructure/entity/mapper/user.entity.mapper";
import { UserEntity } from "infrastructure/entity/user.entiy";
import { IEntityMapper } from "infrastructure/port/entity.mapper.interface";
import { UserRepository } from "infrastructure/repository/user.repository";
import { Container } from "inversify";
import { HomeController } from "ui/controllers/home.controller";
import { UserController } from "ui/controllers/user.controller";
import { CustomLogger, ILogger } from "utils/custom.logger";
import { Identifier } from "./identifier";

class IoC {
    private readonly _container: Container

    constructor(){
        this._container = new Container()
        this.initDependencies()
    }

    get container(): Container {
        return this._container
    }


    private initDependencies(): void {
        this._container.bind(Identifier.APP).to(App).inSingletonScope()

        // Controllers
        this._container.bind<HomeController>(Identifier.HOME_CONTROLLER).to(HomeController).inSingletonScope()
        this._container.bind<UserController>(Identifier.USER_CONTROLLER).to(UserController).inSingletonScope()

        // Services
        this._container.bind<IUserService>(Identifier.USER_SERVICE).to(UserService).inSingletonScope()

        // Repositories
        this._container
            .bind<IUserRepository>(Identifier.USER_REPOSITORY)
            .to(UserRepository).inSingletonScope()

        // Models
        this._container.bind(Identifier.USER_REPO_MODEL).toConstantValue(UserRepoModel)
        
        // Mappers
        this._container
            .bind<IEntityMapper<User, UserEntity>>(Identifier.USER_ENTITY_MAPPER)
            .to(UserEntityMapper).inSingletonScope()

        // Log
        this._container.bind<ILogger>(Identifier.LOGGER).to(CustomLogger).inSingletonScope()
    
    }
}

export const DIContainer = new IoC().container