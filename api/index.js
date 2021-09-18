const chalk = require('chalk');
const app = require('./app');

const port = 5002;
let server;

server = app.listen(port, () => {
    console.log(`${chalk.green('✓')} Server is running at ${chalk.underline.blue(`http://localhost:${port}`)}`);
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