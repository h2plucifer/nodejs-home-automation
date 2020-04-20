
const router=require('express').Router();
const Devices=require('../model/device')

//Some default properties of device
const deviceDefaults={
    'fan':{value:3,min:0,max:10},
    'ac':{value:24,min:16,max:28},
    'sound':{value:5,min:0,max:10},
    'light':{}
}

//Function to add some default properties to  newly added device apart from name,type & status
function dummyValueFiller(device){
    switch(device.type){
        case 'light':device={...device,...deviceDefaults.light};
                    break;
        case 'fan': device={...device,...deviceDefaults.fan};
                    break;
        case 'ac':  device={...device,...deviceDefaults.ac};
                    break;
        case 'sound':device={...device,...deviceDefaults.sound};
                    break;
    }
    return device;
}

//API to add new device
router.route('/device')
            .get((req,res)=>{  res.render("addDevice"); })
            .post((req,res)=>{
                console.log("Adding New Device ...");
                if(req.body){
                    let newDevice={};
                    newDevice.name=req.body.deviceName;
                    newDevice.type=req.body.deviceType;
                    newDevice.status=req.body.deviceStatus;

                    newDevice=dummyValueFiller(newDevice);
                        console.log(newDevice)
                        new Devices(newDevice).save()
                            .then(data=>
                                {
                                    console.log(data +" has been added to home automation ");
                                    res.redirect("/");
                                })
                            .catch(err=>console.log("error adding new device "))
                        
                }
            })

//API to update speciic device status (switch ON/OFF)
router.route('/deviceStatus/:deviceName')
            .put((req,res)=>{
                console.log("Device Status Updation ...");
                if(req.params.deviceName){
                    
                    req.body.status=(req.body.status=='true')?"false":"true";
                    
                    Devices.update({name:req.params.deviceName}, {$set:{status:req.body.status}},{new:true},(err,doc)=>{
                        if(!err){
                    
                            res.redirect("/")
                        }
                        
                    })
                }
            })

//API to change value of specific device 
router.route('/deviceValue/:deviceName')
            .put((req,res)=>{
                console.log("Device Value Updation ...");
                Devices.findOneAndUpdate({name:req.params.deviceName},{value:req.body.value} ,{new:true} ,(err,doc)=>{
                    if(!err){
                        console.log(doc.name +"value updated successfully")
                        res.redirect("/")
                    }
                })
            })

//API to remove specific device from home automation monitoring            
router.route('/deviceRemove/:deviceName')
            .delete((req,res)=>{
                console.log("Device Removal ...");
                Devices.findOneAndRemove({name:req.params.deviceName},(err,doc)=>{
                console.log(doc +" deleted");
                res.redirect("/");
            })
        })
            

module.exports=router;