import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app = express();
app.server = http.createServer(app);

mongoose.Promise = global.Promise; // mongoose promise is deprecated
mongoose.connect('mongodb://localhost', { useMongoClient: true })
.then(() => {
  app.server.listen(process.env.PORT || 8080, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
})

export default app;
