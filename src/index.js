const { APP_PORT } = require('./config/config.default');
const App = require('./app');

App.listen(APP_PORT, () => {
  console.log('server ok');
});
