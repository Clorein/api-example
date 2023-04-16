import { IJSONDeserializable } from "../utils/json.deserializable.interface";
import { IJSONSerializable } from "../utils/json.serializable.interface";
import { JsonUtils } from "../utils/json.utils";
import { Entity } from "./entity";

export class User extends Entity implements IJSONSerializable, IJSONDeserializable<User>{
    private _name?: string
    private _email?: string 
  
    constructor() {
      super()
    }
  
    get name(): string | undefined {
      return this._name;
    }
  
    set name(value: string | undefined) {
      this._name = value;
    }
  
    get email(): string | undefined{
      return this._email;
    }
  
    set email(value: string | undefined) {
      this._email = value;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public fromJSON(json: any): User {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.name !== undefined) this.name = json.name
        if (json.email !== undefined) this.email = json.email

        return this
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public toJSON(): any {
        return {
            id: super.id,
            created_at: super.created_at,
            updated_at: super.updated_at,
            name: this.name,
            email: this.email
        }
    }
}