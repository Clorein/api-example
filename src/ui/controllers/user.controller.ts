/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifier'
import { Query } from '../../infrastructure/repository/query/query'
import { IQuery } from '../../application/port/query.interface'
import { IUserService } from 'application/port/user.service.interface'
import { User } from 'application/domain/models/user'

@controller('/users')
export class UserController {

    constructor(
        @inject(Identifier.USER_SERVICE) private readonly _userService: IUserService
    ){

    }

    @httpPost('/')
    public async saveUser(@request() req:Request, @response() res: Response): Promise<Response> {
        try{
            const user: User = new User().fromJSON(req.body)
            user.id = req.params.id

            const result: User | undefined = await this._userService.add(user)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))

        }catch(error: any){
            return Promise.reject(error)
        }
    }
    
    @httpGet('/')
    public async getAllUsers(@request() req: Request, @response() res: Response): Promise<Response>{
        const query: IQuery = new Query().fromJSON(req.query)
        query.addFilter({ id: req.params.id })
        const result: Array<User> = await this._userService.getAll(query)

        return res.status(HttpStatus.OK).send(this.toJSONView(result))
    }
    

    private toJSONView(user: User | Array<User> | undefined): object{
        if(user instanceof Array) return user.map(item => item.toJSON())
        return user?.toJSON()
    }
}