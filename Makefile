.PHONY:
install:
	npm ci --also=dev
	npx husky install

.PHONY:
dev:
	npm run storybook

# prettier + eslint + tsc
.PHONY:
lint:
	npm run format
	npm run lint
	npm run type-check

.PHONY:
reset-cache:
	rm -rf node_modules/.cache

.PHONY:
build:
	rm -rf dist
	npm run build

.PHONY:
build-no-cache: reset-cache build

# reset cache, build & run size-limit
.PHONY:
build-size: build-no-cache
	npm run size-limit

.PHONY:
size-limit-generate:
	npm run size-limit-generate

.PHONY:
release:
	npm run release

# only push new version to npm, for testing
.PHONY:
prerelease:
	npm run pre-release

# storybok deploy on gh-pages
.PHONY:
deploy:
	npm run build-storybook
	npm run deploy
