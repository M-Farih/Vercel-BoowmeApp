current_dir = $(shell pwd)

.PHONY: build-development
build-development: ## Build the development docker image.
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up -d

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	docker compose -f docker/staging/docker-compose.yml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/docker-compose.yml down
  
.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down

.PHONY: build-storybook
build-storybook: ## Build the storybook docker image.
	docker compose -f docker/storybook/docker-compose.yml build

.PHONY: start-storybook
start-storybook: ## Start the storybook docker container.
	docker compose -f docker/storybook/docker-compose.yml up -d

.PHONY: stop-storybook
stop-storybook: ## Stop the storybook docker container.
	docker compose -f docker/storybook/docker-compose.yml down

.PHONY: docker
docker: ## start docker dev env
	docker run --rm -it -v $(current_dir):/home/app -w /home/app \
	--name node-docker -u node -p 3000:3000 -p 6006:6006 node:17-alpine /bin/sh