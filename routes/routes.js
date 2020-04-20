const mongoose=require('mongoose');
const router=require('express').Router();

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
            })

//API to change value of specific device 
router.route('/deviceValue/:deviceName')
            .put((req,res)=>{
                console.log("Device Value Updation ...");
            })

//API to remove specific device from home automation monitoring            
router.route('/deviceRemove/:deviceName')
            .delete((req,res)=>{
                console.log("Device Removal ...")
            })
            

module.exports=router;