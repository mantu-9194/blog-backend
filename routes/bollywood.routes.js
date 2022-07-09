const { Router } = require("express");
const express=require("express");
const {GetBollywoodPageData,GetBollywoodProduct,GetData}=require("../controllers/bollywood.controllers");

const bollywoodrouter=express.Router();


bollywoodrouter.get("/bollywood",GetBollywoodPageData)

bollywoodrouter.get("/bollywood/:productid",GetBollywoodProduct) ; //route param
bollywoodrouter.get("/data/:type",GetData) ; //route param

module.exports=bollywoodrouter;