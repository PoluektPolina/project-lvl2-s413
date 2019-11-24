install:
	npm link

start:
	npx babel-node -- src/bin/gendiff.js

publish:
	npm publish --dry-run

test:
	npm test

build:
	rm -rf dist
	npm run build
	
lint:
	npx eslint .
