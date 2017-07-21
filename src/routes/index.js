import driverRouter from './driver';

/**
 * sets routes
 * @param {Object} app - Express application
 */
export default (app) => {
  app.use('/drivers', driverRouter);
}
