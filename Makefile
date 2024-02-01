install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	bin/brain-games.js

link:
	npm link
