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
	npm run build
