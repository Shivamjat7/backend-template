# Docker Development & Production Guide

This project uses separate Dockerfiles for development and production.

## Project Structure

``` text
.
├
│── development.Dockerfile
│── production.Dockerfile
├── compose.yaml
├── compose.production.yaml
├── package.json
└── src/
```

## Development

Start with Docker Compose Watch:

``` bash
docker compose up --build --watch
```

If your Docker version supports the standalone watch command:

``` bash
docker compose watch
```

Run in detached mode:

``` bash
docker compose up -d --watch
```

Stop containers:

``` bash
docker compose down
```

Remove containers, networks, and volumes:

``` bash
docker compose down -v
```

View logs:

``` bash
docker compose logs -f
```

Open a shell inside the container:

``` bash
docker compose exec app sh
```

## Production

Build the production image:

``` bash
docker compose -f compose.production.yaml build
```

Build and start:

``` bash
docker compose -f compose.production.yaml up --build
```

Run in detached mode:

``` bash
docker compose -f compose.production.yaml up -d --build
```

Stop production containers:

``` bash
docker compose -f compose.production.yaml down
```

## Build Images Directly

Development:

``` bash
docker build -f development.Dockerfile -t myapp:dev .
docker run -p 5000:5000 myapp:dev
```

Production:

``` bash
docker build -f production.Dockerfile -t myapp:prod .
docker run -p 5000:5000 myapp:prod
```

## Cleanup

Remove unused Docker resources:

``` bash
docker system prune -a
```

## Recommended Development Workflow

``` bash
docker compose up --build --watch
```

This command builds the image (if needed), starts the container, and
automatically watches your project for file changes.
