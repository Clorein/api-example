/**
 * JSON Serializable.
 * Convert object to JSON.
 */
export interface IJSONSerializable {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJSON(): any
}
