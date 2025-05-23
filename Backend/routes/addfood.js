import {addfood,listfood,delfood} from "../controller/foodcontroller.js";
import express from "express";
import multer from "multer";
import path from "path";

const foodrouter=express.Router();

const storage=multer.diskStorage({
     destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ensure this folder exists
  },
    filename:(req,file,cb)=>{
      return cb(null,Date.now()+"-"+file.originalname);
    }
})
const upload=multer({storage:storage});



foodrouter.post('/add',upload.single("Image"),addfood);
foodrouter.get('/list',listfood);
foodrouter.post('/remove',delfood);

export default foodrouter;