import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Head: { type: Boolean, required: false },
  KHead: { type: Boolean, required: false },
  MFan: { type: Boolean, required: false },
  EarFan: { type: Boolean, required: false },
  Hands: { type: Boolean, required: false },
  FHands: { type: Boolean, required: false },
  Feet: { type: Boolean, required: false },
  OFeet: { type: Boolean, required: false },
  Body: { type: Boolean, required: false },
  DBody: { type: Boolean, required: false },
  Tail: { type: Boolean, required: false },
  LTail: { type: Boolean, required: false },
  SWings: { type: Boolean, required: false },
  MWings: { type: Boolean, required: false },
  LWings: { type: Boolean, required: false },
  Feathers: { type: Boolean, required: false },
  Horns: { type: Boolean, required: false },
  LHorns: { type: Boolean, required: false },
  Complex: { type: Boolean, required: false },
  PDiscount: { type: Boolean, required: false },
  FDiscount: { type: Boolean, required: false },
  Total: { type: Number, required: true },
  Link: { type: String, required: true },
});

export default mongoose.model("Form", formSchema);
