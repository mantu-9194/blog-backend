const { Router } = require("express");
const express=require("express");
const {GetFitnessPageData,GetFitnessProduct,GetData}=require("../controllers/fitness.controllers");

const fitnessrouter=express.Router();


fitnessrouter.get("/fitness",GetFitnessPageData)

fitnessrouter.get("/fitness/:productid",GetFitnessProduct) ; //route param
fitnessrouter.get("/data/:type",GetData) ; //route param

module.exports=fitnessrouter;