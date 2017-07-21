import express from 'express';
import Driver from '../models/driver';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Driver.find((err, drivers) => {
      if (err) res.send(err);
      res.json(drivers);
    });
  })
  .post((req, res) => {
    let driver = new Driver(req.body);

    driver.save((err, doc) => {
      if (err) return res.status(400).json(err);
      res.json(doc);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
      if (driver) return res.json(driver);
      res.sendStatus(404);
    });
  })
  .put((req, res) => {
    Driver.findByIdAndUpdate(req.params.id, req.body, (err, driver) => {
      if (err) return res.status(400).json(err);
      if (!driver) return res.sendStatus(404);
      res.sendStatus(200);
    });
  })
  .delete((req, res) => {
    Driver.findByIdAndRemove(req.params.id, (err, driver) => {
      if (!driver) return res.sendStatus(404);
      if (err) return res.sendStatus(400);
      res.sendStatus(200);
    });
  });

export default router;
