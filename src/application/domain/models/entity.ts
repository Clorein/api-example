/**
 * Implementation of generic entity.
 * Theoretically, the other entity must inherit it.
 *
 * @abstract
 */
export abstract class Entity {
    private _id?: string
    private _created_at?: Date
    private _updated_at?: Date

    protected constructor(id?: string, created_at?: Date, updated_at?: Date) {
        this._id = id
        this._created_at = created_at
        this._updated_at = updated_at
    }

    get id(): string | undefined {
        return this._id
    }

    set id(value: string | undefined) {
        this._id = value
    }

    get created_at(): Date | undefined {
        return this._created_at
    }

    set created_at(value: Date | undefined) {
        this._created_at = value
    }

    get updated_at(): Date | undefined {
        return this._updated_at
    }

    set updated_at(value: Date | undefined) {
        this._updated_at = value
    }
}
