// load up our shiny new route for users
const charactersRoutes = require('./characters');

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('Welcome to the development Star Wars api server');
  });

  // run our user route module here to complete the wire up
  charactersRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
