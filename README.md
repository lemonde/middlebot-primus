# middlebot-primus

Primus broadcast middleware.

## Install

```sh
npm install middlebot-primus
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