const express=require('express');
const router=express.Router();
const video=require('../models/video');

router.get('/getAllVideos',(req,res)=>{
    video.find({}).exec(function(getAllVideosError,videos){
        if(getAllVideosError){
            console.log("error: "+getAllVideosError);
        }
        else{
            res.json(videos);
        }
    })
});

router.get('/getOneVideo/:id',(req,res)=>{
    video.findById(req.params.id).exec(function(getOneVideoError,video){
        if(getOneVideoError){
            console.log("error: "+getOneVideoError);
        }
        else{
            res.json(video);
        }
    })
});

router.post('/uploadVideo',(req,res)=>{
    var newVideo=new video(req.body);
    newVideo.save((videoUploadError,uploadedVideo)=>{
        if(videoUploadError){
            console.log("error: "+videoUploadError);
        }
        else{
            res.json(uploadedVideo);
        }
    })
});

// router.put('/updateVideo/:id',(req,res)=>{
    
// })

module.exports=router;