const express=require('express');
const router=express.Router();
const video=require('../models/video');

router.get('/getAllVideos',(req,res)=>{
    video.find({}).exec(function(getAllVideosError,videos){
        if(getAllVideosError){
            res.send("error: "+getAllVideosError);
        }
        else{
            res.json(videos);
        }
    })
});

router.get('/getOneVideo/:id',(req,res)=>{
    video.findById(req.params.id).exec(function(getOneVideoError,video){
        if(getOneVideoError){
            res.send("error: "+getOneVideoError);
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
            res.send("error: "+videoUploadError);
        }
        else{
            res.json(uploadedVideo);
        }
    })
});

router.put('/updateVideo/:id',(req,res)=>{
    video.findByIdAndUpdate(req.params.id,req.body,{new:true},(updateVideoError,updatedVideo)=>{
        if(updateVideoError){
            res.send("error: "+updateVideoError);
        }
        else{
            res.json(updatedVideo);
        }
    });
});

router.delete('/deleteVideo/:id',(req,res)=>{
    video.findByIdAndRemove(req.params.id,(deleteVideoError,deletedVideo)=>{
        if(deleteVideoError){
            res.send("error: "+deleteVideoError);
        }
        else{
            res.json(deletedVideo);
        }
    })
})

module.exports=router;