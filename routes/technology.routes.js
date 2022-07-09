const { Router } = require("express");
const express=require("express");
const {GetTechnologyPageData,GetTechnologyProduct,GetData}=require("../controllers/technology.controllers");

const technologyrouter=express.Router();


technologyrouter.get("/technology",GetTechnologyPageData)

technologyrouter.get("/technology/:productid",GetTechnologyProduct) ; //route param
technologyrouter.get("/data/:type",GetData) ; //route param

module.exports=technologyrouter;