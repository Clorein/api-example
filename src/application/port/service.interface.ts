import { IQuery } from './query.interface'

/**
 * Service interface.
 * Must be implemented by all services created at the application layer.
 *
 * @template T
 */
export interface IService<T> {
    /**
     * Add a new item.
     *
     * @param item T to insert.
     * @returns {Promise<T | undefined>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    add(item: T): Promise<T | undefined>

    /**
     * Listing items according to parameter values.
     *
     * @param query Defines object to be used for queries.
     * @returns {Promise<Array<T>>}
     * @throws {RepositoryException}
     */
    getAll(query: IQuery): Promise<Array<T>>

    /**
     * Retrieves the item by their unique identifier.
     *
     * @param id Unique identifier.
     * @param query Defines object to be used for queries.
     * @returns {Promise<T | undefined>}
     * @throws {ValidationException | RepositoryException}
     */
    getById(id: string, query: IQuery): Promise<T | undefined>

    /**
     * Updates item data.
     *
     * @param item Contains the data to be updated.
     * @returns {Promise<T | undefined>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    update(item: T): Promise<T | undefined>

    /**
     * Removes the item according to their unique identifier.
     *
     * @param id Unique identifier.
     * @returns {Promise<T | undefined>}
     * @throws {ValidationException | RepositoryException}
     */
    remove(id: string): Promise<T | undefined>

    /**
     * Returns the total of items according to the query.
     *
     * @param query Defines object to be used for queries.
     * @returns {Promise<number>}
     * @throws {ValidationException | RepositoryException}
     */
    count(query: IQuery): Promise<number>
}
