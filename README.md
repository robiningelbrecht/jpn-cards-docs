# Jpn card site API

The OpenAPI 3 specification file lives in `static/api.yaml`.

## Lint OpenAPI spec

[Vacuum](https://quobix.com/vacuum/) is used to lint the OpenAPI spec file.
To lint, run:

```bash
yarn lint-openapi
```

## Regenerating API reference

The API reference docs, written in MDX files, are generated from the OpenAPI specification file.
To regenerate them, run:

```bash
yarn clean-and-generate-current
yarn clean-and-generate-all
```

Note that these files are **not** committed to the repository.

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Note: the search functionality does not work on a local server.

## Build production version

```bash
yarn build
```
