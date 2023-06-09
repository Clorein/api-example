export class JsonUtils {
    /**
     * Checks if a string is in json format.
     *
     * @param str
     */
    public static isJsonString(str: string): boolean {
        try {
            return typeof JSON.parse(str) === 'object'
        } catch (e) {
            return false
        }
    }
}
