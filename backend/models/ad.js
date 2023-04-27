const mongoose = require('mongoose');

const advSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.Number, ref: 'Company' },
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
});
advSchema.virtual('company', {
  ref: 'Company',
  localField: 'companyId',
  foreignField: '_id',
  justOne: true,
});

const Ad = mongoose.model('ads', advSchema);

module.exports = Ad