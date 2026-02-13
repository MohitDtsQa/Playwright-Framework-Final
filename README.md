# Docker Setup

This project can run Playwright tests inside Docker using the included `Dockerfile` and `docker-compose.yml`.

## Prerequisites

- Docker Desktop (with Compose)

## Build image

```bash
npm run docker:build
```

## Run all tests in Docker

```bash
npm run docker:test
```

## Run only UI tests (`Tests` folder)

```bash
npm run docker:test:ui
```

## Run only API tests (`API` folder)

```bash
npm run docker:test:api
```

## Notes

- `config.env` and `creds.env` are injected at runtime via `docker-compose.yml`.
- Playwright reports are written to `results_reports/` on the host.
- Custom test artifacts (videos/screenshots) are written to `artifacts/` on the host.
- Downloaded files from tests are written to `DownloadedFiles/` on the host.
- Keep `@playwright/test` (in `package.json`) and Docker image tag (in `Dockerfile`) on the same version.
- Local run without Docker:

```bash
npm test
```
