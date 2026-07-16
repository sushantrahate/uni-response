# Contributing to uni-response

Thanks for your interest in improving `uni-response`! This is a small, focused utility, so contributions are kept lightweight.

## Getting started

```bash
git clone https://github.com/sushantrahate/uni-response.git
cd uni-response
npm install
```

## Development workflow

- **Run tests**: `npm test` (or `npm run test:ui` for the interactive UI)
- **Check coverage**: `npm run test:coverage`
- **Build**: `npm run build`

Please add or update tests in [tests/](tests/) for any behavior change, and make sure `npm test` and `npm run build` both pass before opening a pull request.

## Submitting changes

1. Fork the repo and create a branch from `main`.
2. Make your change, keeping the diff focused on a single concern.
3. Update [README.md](README.md) and [CHANGELOG.md](CHANGELOG.md) if the change affects the public API or behavior.
4. Open a pull request describing what changed and why.

## Reporting bugs / requesting features

Please use the [issue tracker](https://github.com/sushantrahate/uni-response/issues) with as much detail as you can provide (repro steps, expected vs. actual behavior, environment).
