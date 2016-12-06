var makeStore = require('./store');
var startServer = require('./server');

var store = makeStore();

store.dispatch({
  	type: 'SET_ENTRIES',
  	entries: require('./entries.json')
});

store.dispatch({type: 'NEXT'});

startServer(store);


