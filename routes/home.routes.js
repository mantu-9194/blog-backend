const { Router } = require("express");
const express=require("express");
const {GetHomePageData,GetSingleProduct}=require("../controllers/home.controllers");
// const {GetBollywoodPageData,GetBollywoodProduct}=require("../controllers/bollywood.controller");
// const {GetHollywoodPageData,GetHollywoodProduct,GetData}=require("../controllers/hollywood.controller");

// const bollywoodrouter=express.Router();

const homerouter=express.Router();

// homerouter.use(GetHomePageData)
// bollywoodrouter.use(GetBollywoodPageData)
homerouter.get("/",GetHomePageData)
// bollywoodrouter.get("/bollywood")

homerouter.get("/home/:productid",GetSingleProduct) ; //route param
// homerouter.get("/data/:type",GetData) ; //route param


// bollywoodrouter.get("/bollywood/:productid",GetBollywoodProduct) ; //route param
// bollywoodrouter.get("/data/:type",GetData) ; //route param

module.exports = homerouter