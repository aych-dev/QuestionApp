import mongoose, { Schema } from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('uri is undefined');
  process.exit(1);
}

mongoose.connect(uri);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);
export default Ticket;
