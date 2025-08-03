#!/bin/bash

# Exit returns error
set -e

STRAPI_PORT=1337

# Wait for PORT availability
wait_for_port() {
  echo "Wait Strapi launch on PORT $STRAPI_PORT..."
  while ! nc -z localhost $STRAPI_PORT; do
    sleep 1
  done
  echo "Strapi started!"
}

echo "Launch Strapi in dev mode..."
cd server
yarn && yarn develop & # Background start
STRAPI_PID=$!

wait_for_port

echo "Launch Next.js in dev mode..."
cd ../client
yarn && yarn dev

# Process finish before exit
trap "kill $STRAPI_PID" EXIT
