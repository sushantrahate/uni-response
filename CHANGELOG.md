# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-08-04

### 💥 Breaking Changes

- **Removed `timestamp` field**: The `timestamp` property has been completely removed from the response object to simplify the API. Any code that previously relied on this property must be updated.

### Chores

---

## [1.0.0] - (Date of Initial Release)

### Added

- Initial release of `uni-response`.
- The response object includes a non-optional `timestamp` field for logging and tracking.
