install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-NOD:
	node bin/brain-NOD.js

link:
	npm link
	
make lint:
	npx eslint .