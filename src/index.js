import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise; // mongoose promise is deprecated
mongoose.connect('mongodb://localhost', { useMongoClient: true })
.then(() => {
  app.server.listen(process.env.PORT || 8080, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
})

routes(app);

export default app;
