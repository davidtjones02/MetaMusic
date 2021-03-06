const chalk = require('chalk');
const app = require('./app');
const config = require('./config/config.js');

let server;

server = app.listen(config.app.port, () => {
    console.log(`${chalk.green('✓')} Server is running at ${chalk.underline.blue(`http://localhost:${config.app.port}`)}`);
});


const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };
  
  const unexpectedErrorHandler = (error) => {
    console.error(error);
    exitHandler();
  };
  
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);