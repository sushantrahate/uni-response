export type ResponseType<T = Record<string, unknown>> = {
  /** Indicates if the request was successful */
  success: boolean;

  /** A message describing the result */
  message: string;

  /** The data returned by the API */
  data?: object | null;

  /** Any error information if the request failed */
  error?: object | null;

  /** Additional metadata related to the response */
  metadata?: object | null;

  /** ISO timestamp of when the response was created */
  timestamp: string;

  /** Optional additional custom fields */
  extraFields?: T;
};
