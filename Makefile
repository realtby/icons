.PHONY:
install:
	npm i

# prettier + eslint + tsc
.PHONY:
lint:
	npm run format
	npm run lint

.PHONY:
build:
	rm -rf dist
	npm run build

.PHONY:
release:
	npm run release

# only push new version to npm, for testing
.PHONY:
prerelease:
	npm run pre-release
