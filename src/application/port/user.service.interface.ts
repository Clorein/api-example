import { IService } from "./service.interface";
import { User } from "application/domain/models/user";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserService extends IService<User>{
    
}