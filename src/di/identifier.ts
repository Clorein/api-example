export abstract class Identifier{
    public static readonly APP: any = Symbol.for('App')

    // Controllers
    public static readonly HOME_CONTROLLER: any = Symbol.for('HomeController')
    public static readonly USER_CONTROLLER: any = Symbol.for('UserController')

    // Services
    public static readonly USER_SERVICE: any = Symbol.for('UserService')

    // Repositories
    public static readonly USER_REPOSITORY: any = Symbol.for('UserRepository')

    // Models
    public static readonly USER_REPO_MODEL: any = Symbol.for('UserRepoModel')

    // Mappers
    public static readonly USER_ENTITY_MAPPER: any = Symbol.for('UserEntityMapper')
}
