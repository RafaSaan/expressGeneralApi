import * as express from "express";

  // import sub-routers
  import userRoutes from "./userRoutes";

  let router = express.Router();

  // mount express paths, any addition middleware can be added as well.
  // ex. router.use('/pathway', middleware_function, sub-router);

  router.use('/user', userRoutes);

  // Export the router
  export = router;