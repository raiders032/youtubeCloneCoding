import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "Filr url is required",
  },
  view: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: "title is requierd",
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
