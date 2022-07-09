const { Router } = require("express");
const express=require("express");
const {GetSportsPageData,GetSportsProduct,GetData}=require("../controllers/sports.controllers");

const sportsrouter=express.Router();


sportsrouter.get("/sports",GetSportsPageData)

sportsrouter.get("/sports/:productid",GetSportsProduct) ; //route param
sportsrouter.get("/data/:type",GetData) ; //route param

module.exports=sportsrouter;