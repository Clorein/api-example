/**
 * Class that defines variables with default values.
 *
 * @see Variables defined in .env will have preference.
 * @see Be careful not to put critical data in this file as it is not in .gitignore.
 * Sensitive data such as database, passwords and keys should be stored in secure locations.
 *
 * @abstract
 */
export abstract class Strings {
    public static readonly APP: any = {
        TITLE: 'Health Indicator Service'
    }

    public static readonly USER: any = {
        REGISTER_REQUIRED: 'The User provided does not have a registration.',
        ALERT_REGISTER_REQUIRED: 'It is necessary that the User be registered before trying again.',
        PARAM_ID_NOT_VALID_FORMAT: 'Parameter {User_id} is not in valid format!'
    }

    public static readonly ERROR_MESSAGE: any = {
        REQUEST_BODY_INVALID: 'Unable to process request body!',
        REQUEST_BODY_INVALID_DESC: 'Please verify that the JSON provided in the request body has a valid format and try again.',
        ENDPOINT_NOT_FOUND: 'Endpoint {0} does not found!',
        INTERNAL_SERVER_ERROR: 'An internal server error has occurred.',
        INTERNAL_SERVER_ERROR_DESC: 'Check all parameters of the operation being requested.',
        VALIDATE: {
            // Required
            REQUIRED_FIELDS: 'Required fields were not provided...',
            REQUIRED_FIELDS_DESC: '{0} are required!',
            // General
            UUID_NOT_VALID_FORMAT: 'Some ID provided does not have a valid format!',
            UUID_NOT_VALID_FORMAT_DESC: 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.',
            INVALID_FIELDS: 'One or more request fields are invalid...',
            INVALID_STRING: '{0} must be a string!',
            EMPTY_STRING: '{0} must have at least one character!',
            INVALID_NUMBER: '{0} must be a number!',
            NEGATIVE_NUMBER: '{0} must be a number greater than zero!',
            NUMBER_GREATER_ZERO: '{0} must be a number greater than zero.',
        },
        DATE: {
            INVALID_DATE_FORMAT: 'Date: {0}, is not in valid ISO 8601 format.',
            INVALID_DATE_FORMAT_DESC: 'Date must be in the format: yyyy-MM-dd',
            INVALID_DATETIME_FORMAT: 'Datetime: {0}, is not in valid ISO 8601 format.',
            INVALID_DATETIME_FORMAT_DESC: 'Datetime must be in the format: yyyy-MM-ddTHH:mm:ssZ'
        },
        EVENT_BUS: {
            DEFAULT_MESSAGE: 'An event bus error has occurred.',
            NO_CONNECTION_OPEN: 'No connection open!',
            UNEXPECTED_EVENT_NAME: 'Unexpected event name: {0}!'
        }
    }
}
