# relayable.js

The easy way to send notifications to your device using [relayable](http://relayable.io).

relayable.js makes use of bluebird promises.

### Install using NPM

```
npm install relayable
```

### Usage

```
var relayable = require('relayable');

var client = new relayable({
  linkId: 'YOUR-LINK-ID-GOES-HERE'
});

client.dispatch('your fancy message', 'channel')
.then(function (response) {
  console.log('Dispatch Result', response);
});
```
