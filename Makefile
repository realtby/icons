.PHONY:
install:
	npm i

# prettier + eslint + tsc
.PHONY:
lint:
	npm run format
	npm run lint

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
build-size: build-no-cache:
	npm run size-limit

.PHONY:
release:
	npm run release

# only push new version to npm, for testing
.PHONY:
prerelease:
	npm run pre-release
