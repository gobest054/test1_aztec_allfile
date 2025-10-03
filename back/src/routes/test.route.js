import express from "express"
import testController from "../controller/test.controller.js";

const testRoute= express.Router()

testRoute.get("/showPatientNew",testController.showPatientNew)
testRoute.post("/createPatient",testController.createPatient)
testRoute.put("/updateFlagPatient", testController.updateFlagPatient)


export default testRoute