import mongoose from "mongoose";

type Card = {
  word: string;
  wordReading: string;
  wordMeaning: string;
  sentence: string;
};

type Collection = {
  name: string;
  category: string;
  cards: Card[];
  reviewCount: number;
  failCount: number;
  lastReviewSession: Date;
  created: Date;
};

type UserData = {
  userId: mongoose.Schema.Types.ObjectId;
  loginCount: number;
  totalCardCount: number;
  lastReviewSession: Date;
  collections: Collection[];
};

const userDataSchema = new mongoose.Schema<UserData>(
  {
    userId: { type: mongoose.Schema.ObjectId, required: true, index: true },
    loginCount: { type: Number, required: false, default: 0 },
    totalCardCount: { type: Number, required: false, default: 0 },
    lastReviewSession: { type: Date, required: false },
    collections: [
      {
        name: { type: String, required: true },
        category: { type: String, required: true },
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
        created: { type: Date, required: false },
      },
    ],
  },
  { timestamps: true },
);

export default (mongoose.models.UserData as mongoose.Model<UserData>) ||
  mongoose.model<UserData>("UserData", userDataSchema);
