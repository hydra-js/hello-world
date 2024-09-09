import { bootstrapServer } from './@hydra-js';

const options = {
  port: 3000,
  init: (app) => {
    // Add any additional routes or middleware here
    app.get('/api/hello', function (req, res) {
      res.json({ message: 'Hello from the API!' });
    });
  },
};

const server = bootstrapServer(options);
server.start();
