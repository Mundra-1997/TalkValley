const express = require('express');
const asyncHandler = require("express-async-handler");
const Ad = require('../models/ad');
const Company = require('../models/company')

const createAd = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const { companyId,primaryText, headline, description,CTA,imageUrl} = req.body;
    if(!companyId || !primaryText || !headline || !description || !CTA || !imageUrl){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const data = await Ad.create({
       companyId,primaryText, headline, description,CTA,imageUrl
    })
    res.status(201).json( data);
})
const createComp = asyncHandler(async(req,res)=>{
    console.log('Received request in createComp');
    console.log(req.body);
    const { name, url, _id } = req.body;
    if(!name || !url || !_id){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const data = await Company.create({
       name,
       url,
       _id
    })
    res.status(201).json(data);
})

module.exports = {createAd,createComp}