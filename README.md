# middlebot-primus

Primus broadcast middleware.

## Install

```sh
npm install https://github.com/lemonde/middlebot-primus.git
```

## Usage

```js
var middlebot = require('middlebot');
var app = middlebot();

// Will broadcast an event "test" with `res.body`.
app.use(middlebotPrimus({
  client: client,
  event: 'test'
}));
```

## License

MIT