const express = require("express");
const Ad = require("../models/ad")
const findAds = async (req, res) => {
  const {keyword} = req.query;
  console.log(keyword);
 
  try {
    const ads = await Ad.aggregate([
      {
        $lookup: {
          from: 'companies',
          localField: 'companyId',
          foreignField: '_id',
          as: 'company',
        },
      },
      { $unwind: '$company' },
      {
        $match: {
         $or: [
            { 'company.name': { $regex: keyword, $options: 'i' } },
            { primaryText: { $regex: keyword, $options: 'i' } },
            { headline: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } },
          ],
        },
      },
       {
        $project: {
          _id: 1,
          companyId: 1,
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
          companyName: '$company.name',
          companyUrl: '$company.url',
        },
      },
    ]);
    res.status(200).json(ads);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

module.exports = findAds;






// app.get('/search/:query', async (req, res) => {
 
// });