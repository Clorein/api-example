/**
 * JSON Deserializable.
 * Convert JSON to Object.
 *
 * @template T
 */
export interface IJSONDeserializable<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromJSON(json: any): T
}
