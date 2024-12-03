<div align="center">
  <a href="https://www.npmjs.com/package/uni-response"><img src="https://img.shields.io/npm/v/uni-response?maxAge=3600" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/uni-response"><img src="https://img.shields.io/npm/dt/uni-response?maxAge=3600" alt="npm downloads" /></a>
   <a href="https://www.npmjs.com/package/uni-response"><img src="[https://img.shields.io/npm/dt/uni-response?maxAge=3600](https://img.shields.io/bundlephobia/minzip/uni-response)" alt="Package size" /></a>
</div>

# Uni Response

A Simple Utility to Create Unified Response Objects for APIs. Allowing for Easy Handling of API Responses Across Your Application.

## Features

- Unified response format for all API calls.
- Flexible to include additional custom fields.
- Automatically includes a timestamp for - logging and tracking.
- Supports both successful and error responses.

## Installation

```bash
npm install uni-response
```

## Usage

```js
import { unifiedResponse } from 'uni-response';

const response = unifiedResponse(true, 'Request was successful', { id: 1 });
console.log(response);
/*
{
  success: true,
  message: "Request was successful",
  data: { id: 1 },
  timestamp: "..."
}
*/
```

```js
// Example with CustomResponseFields

interface CustomResponseFields {
  customField1: string;
  customField2: number;
  customField3: boolean;
}

// Creating a response with custom fields
const responseWithCustomFields =
  unifiedResponse <
  CustomResponseFields >
  (true,
  'Request was successful',
  { user: 'Jane Doe' },
  null,
  null,
  {
    customField1: 'Custom Data 1',
    customField2: 42,
    customField3: true,
  });

// Output
console.log(responseWithCustomFields);
/*
{
  success: true,
  message: "Request was successful",
  data: { user: 'Jane Doe' },
  timestamp: "..."
  extraFields: {
    customField1: 'Custom Data 1',
    customField2: 42,
    customField3: true,
  }
}
*/
```

## Response Structure

```js
interface Response<T = Record<string, unknown>> {
  success: boolean;
  message: string;
  data?: object | null;
  error?: object | null;
  metadata?: object | null;
  timestamp: string;
  extraFields?: T; // Generic type for extra fields
}
```

## License

MIT License

## Author

[Sushant Rahate](https://github.com/sushantrahate) ([sushantrahate15@gmail.com](mailto:sushantrahate15@gmail.com))
