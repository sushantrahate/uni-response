import { ResponseType } from './types';

/**
 * Creates a unified response object for API responses.
 *
 * @param success - Indicates if the request was successful.
 * @param message - A message describing the result.
 * @param data - The data returned by the API.
 * @param error - Any error information if the request failed.
 * @param metadata - Additional metadata related to the response.
 * @param extraFields - Any additional custom fields to include in the response.
 * @template T - The type of the additional custom fields.
 *
 * @returns A `Response` object containing all the provided information.
 */
export function unifiedResponse<T = Record<string, unknown>>(
  success: boolean,
  message: string = success ? 'Request was successful' : 'An error occurred',
  data: object | null = null,
  error: object | null = null,
  metadata: object | null = null,
  extraFields: T = {} as T
): ResponseType<T> {
  const response: ResponseType<T> = {
    success,
    message,
  };

  if (data !== null && data !== undefined) response.data = data;
  if (error) response.error = error;
  if (metadata) response.metadata = metadata;
  if (extraFields && Object.keys(extraFields).length > 0)
    response.extraFields = extraFields;

  return response;
}
