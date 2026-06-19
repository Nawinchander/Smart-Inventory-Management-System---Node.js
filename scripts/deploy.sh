#!/bin/bash

echo "Running tests..."

npm test

echo "Building docker image..."

docker build -t inventory-app .

echo "Pushing image..."

docker push username/inventory-app

echo "Deploying to Kubernetes..."

kubectl apply -f k8s/



// chmod +x scripts/deploy.sh
./scripts/deploy.sh

#!/bin/bash

kubectl rollout undo deployment/inventory-deployment
./scripts/rollback.sh

