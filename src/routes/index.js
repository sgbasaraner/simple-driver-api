import driver from './driver';
import utils from './utils';

/**
 * sets routes
 * @param {Object} app - Express application
 */
export default (app) => {
  app.use(utils);
  app.use('/drivers', driver);
}
