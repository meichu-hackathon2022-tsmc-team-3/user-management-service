# meichuhackathon-backend
A backend service for meichuhackathon

# Intro
This is a user management system for the service, you can 

1. Find user by it's RFID -> `GET /api/v1/user/rfid/${rfid}`
2. Find user by it's ID -> `GET /api/v1/user/uid/${uid}`
3. Find multiple users by it's department ID -> `GET /api/v1/department/did/${did}`
4. Find all departments -> `GET /api/v1/department`
5. Check health -> `GET /api/v1/health/async`, `GET /api/v1/health/sync`


# Installation

```shell
cp .env.sample .env
cp .env.sample .env.test
```

## .env / .env.test

```txt
MONGO_USER= # Only for prod
MONGO_PASS= # Only for prod
MONGO_HOST=mongo # Mongo Host URL/IP
MONGO_PORT=27017 # Mongo Port
MONGO_DB=user-management # Mongo DB
CLIENT=localhost # For CORS Policy
ENV=DEV # .env should be PROD/DEV and .env.test should be TEST
```

*NOTE a default DB will be initialized in DEV environment

## test the build

```shell
docker compose up test
```

If everything is ok, than you are free to go!
`
# Dev

```shell
docker compose up app -d
```