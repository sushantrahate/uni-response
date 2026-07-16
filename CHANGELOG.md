# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- README no longer claims the response includes an automatic timestamp (that field was removed in v2.0.0).
- Fixed a malformed generic-type usage example in the README (`unifiedResponse<CustomResponseFields>(...)` was rendering as invalid syntax).
- Renamed the documented response interface in the README from `Response<T>` to `ResponseType<T>` to match the actual exported type.
- Normalized the `data`/`error`/`metadata` inclusion checks in `unifiedResponse` to consistently use `!== null`, removing an inconsistent truthy check and a dead `!== undefined` comparison.
- `tsconfig.json` no longer uses the deprecated `moduleResolution: "Node10"`; switched to `moduleResolution: "bundler"` with `module: "preserve"`.

### Added

- `LICENSE` file (MIT).
- Test coverage tooling (`@vitest/coverage-v8`) with a `test:coverage` script and coverage thresholds.
- Test case covering the `metadata` truthy-inclusion path.
- `CONTRIBUTING.md` and GitHub issue templates (bug report, feature request).

### Changed

- Upgraded `vitest`/`@vitest/ui` to v4 and `typescript` to v5.9.
- Removed the unused `@types/node` devDependency.

### Chores

- CI: added OIDC permissions and switched the publish step to `npm publish --provenance --access public` for npm supply-chain security.

---

## [2.0.2] - 2025-12-27

### Chores

- CI: bumped the publish workflow to Node.js 20, updated `actions/checkout` and `actions/setup-node` to v4, switched `npm install` to `npm ci`, and enabled npm dependency caching.
- Dependencies: bumped `vite` from 7.0.6 to 7.1.11 and `glob` from 10.4.5 to 10.5.0.

---

## [2.0.1] - 2025-08-04

### Chores

- Included `CHANGELOG.md` in the published npm package via the `files` field.

---

## [2.0.0] - 2025-08-04

### 💥 Breaking Changes

- **Removed `timestamp` field**: The `timestamp` property has been completely removed from the response object to simplify the API. Any code that previously relied on this property must be updated.

### Chores

---

## [1.0.0] - (Date of Initial Release)

### Added

- Initial release of `uni-response`.
- The response object includes a non-optional `timestamp` field for logging and tracking.
