import mongoose from 'mongoose';

const DriverSchema = mongoose.Schema({
  name: String,
  surname: String,
  loc: { type: [Number], index: '2dsphere'}
});

export default mongoose.model('Driver', DriverSchema);
