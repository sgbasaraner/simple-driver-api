import express from 'express';
import Driver from '../models/driver';

const router = express.Router();

router.route('/ride')
  .get((req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    const query = {
      loc: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lat, lon]
          }
        }
      }
    };

    Driver.find(query).limit(3).exec((err, drivers) => {
      if (err) return res.status(400).send(err);
      res.json(drivers);
    });
  });

export default router;
