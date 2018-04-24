# babel-plugin-example

## Run it directly

```sh
./node_modules/.bin/babel-node src/index.js
```

## Transpile it and run it

```sh
mkdir -p dist
./node_modules/.bin/babel src/index.js -o dist/index.js
node dist/index.js
```

## log -> console.log transformation

https://github.com/xtuc/babel-plugin-example/tree/feat-transpile-log
