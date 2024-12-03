import { describe, it, expect } from 'vitest';
import { unifiedResponse } from '../src/functions';
import { ResponseType } from '../src/types';

describe('unifiedResponse', () => {
  it('should create a successful response', () => {
    const result = unifiedResponse(true, 'Success', { id: 1 });

    const expected: ResponseType = {
      success: true,
      message: 'Success',
      data: { id: 1 },
      timestamp: expect.any(String),
    };

    expect(result).toMatchObject(expected);
  });

  it('should create an error response', () => {
    const result = unifiedResponse(false, 'An error occurred', null, {
      code: 400,
    });

    const expected: ResponseType = {
      success: false,
      message: 'An error occurred',
      error: { code: 400 },
      timestamp: expect.any(String),
    };

    expect(result).toMatchObject(expected);
  });

  it('should include additional custom fields', () => {
    const customFields = { role: 'admin' };
    const result = unifiedResponse(
      true,
      'With custom fields',
      null,
      null,
      null,
      customFields
    );

    const expected: ResponseType<typeof customFields> = {
      success: true,
      message: 'With custom fields',
      extraFields: customFields,
      timestamp: expect.any(String),
    };

    expect(result).toMatchObject(expected);
  });

  it('should default message based on success', () => {
    const successResponse = unifiedResponse(true);
    expect(successResponse.message).toBe('Request was successful');

    const errorResponse = unifiedResponse(false);
    expect(errorResponse.message).toBe('An error occurred');
  });

  it('should handle null data and metadata', () => {
    const result = unifiedResponse(
      true,
      'No data or metadata',
      null,
      null,
      null
    );
    expect(result).not.toHaveProperty('data');
    expect(result).not.toHaveProperty('metadata');
  });
});
