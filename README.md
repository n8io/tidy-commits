# 👔 tidy-commits

A simple repo to demo Prettier, linting, lint-staged, and Jest

## Getting started

### `yarn install`
Install dependencies

### `yarn -s tidy`
Run linting and prettier checks

## Make a change and try to commit
When you commit changes that include any `*.js` files (see `lint-staged` settings in `package.json`), a precommit hook runs prettier and linting. Only if they pass does the commit go through.

### Try it yourself
1. `echo "// Added a comment" >> src/math.js`
2. `git commit -am "📝 Add a comment"`
