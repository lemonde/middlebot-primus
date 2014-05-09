# middlebot-primus

[![Build Status](https://travis-ci.org/lemonde/middlebot-primus.svg?branch=master)](https://travis-ci.org/lemonde/middlebot-primus)
[![Dependency Status](https://david-dm.org/lemonde/middlebot-primus.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-primus)
[![devDependency Status](https://david-dm.org/lemonde/middlebot-primus/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/middlebot-primus#info=devDependencies)

Primus broadcast middleware.

## Install

```sh
npm install https://github.com/lemonde/middlebot-primus.git
```

## Usage

```js
var middlebot = require('middlebot');
var middlebotPrimus = require('middlebot-primus');
var app = middlebot();

// Will broadcast an event "test" with `res.body` as first argument.
app.use(middlebotPrimus({
  client: client,
  event: 'test'
}));
```

## License

MIT
