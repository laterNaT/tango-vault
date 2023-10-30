import mongoose from "mongoose";

type Card = {
  word: string;
  wordReading: string;
  wordMeaning: string;
  sentence: string;
};

type Collection = {
  name: string;
  cards: Card[];
  reviewCount: number;
  failCount: number;
  lastReviewSession: Date;
  created: Date;
};

type User = {
  username: string;
  password: string;
  totalCardCount: number;
  lastReviewSession: Date;
  collections: Collection[];
};

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI!)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log("Error connecting to MongoDB", err);
//   });

// TODO: move to models folder? one model file per schema
function userModel() {
  const schema = new mongoose.Schema<User>(
    {
      username: { type: String, required: true, unique: true }, // NOTE: unique != validator
      password: { type: String, required: true },
      totalCardCount: { type: Number, required: false, default: 0 },
      lastReviewSession: { type: Date, required: false },
      collections: [
        {
          name: { type: String, required: true },
          cards: [
            {
              word: { type: String, required: true },
              wordReading: { type: String, required: false },
              wordMeaning: { type: String, required: false },
              sentence: { type: String, required: false },
            },
          ],
          reviewCount: { type: Number, required: false, default: 0 },
          failCount: { type: Number, required: false, default: 0 },
          lastReviewSession: { type: Date, required: false },
          created: { type: Date, required: false, default: Date.now },
        },
      ],
    },
    { timestamps: true },
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.password;
    },
  });

  schema.set("toObject", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.password;
    },
  });

  return (
    (mongoose.models.User as mongoose.Model<User>) ||
    mongoose.model<User>("User", schema)
  );
}

export const dbTypes = {
  User: userModel(),
};
