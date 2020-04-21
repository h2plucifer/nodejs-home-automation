# nodejs-home-automation


* Application details  :
              * Home-Automation is a web based application that provides features to monitor home devices remotely using this app.
              * Following operations can be performed with this app  :
                    * Add new device to monitor /control.
                    * Change the device status ( switch ON/OFF )
                    * Change the device value ( ex. ncrease/decrease fan speed ) & it will also display the current value of device.
                    * To remove device from monitoring/controlling on press of respective remove button.
              * Values for device is provided in a range that mimics real world possible device value.
              * UI will be reloaded automatically after operation successfully performed.

          * Code level details :
              * EJS template engine has been used to design application UI & events has been handled with JQuery library.
              * Mongodb/mongoose using has been used to store device data (with the help of mongodb Atlas service). 
              * Following api has been exposed to perform defferent UI operations :
                    * /deviceAPI/device  : To get/post device/s
                    * /deviceAPI/deviceStatus/:deviceName : To Update device status of speciic selected device based on device name.
                    * /deviceAPI/deviceValue/:deviceName : To update  device value of speciic selected device based on device name.    
                    * /deviceAPI/deviceRemove/:deviceName: To update  remove selected device .    
          * Assumption : It is assumed that middleware hardware connection & integration for devices has been already done by some service.

* Technologies used :
              * Node.js /Express.js , EJS , JQuery , Bootstrap , yarn
* Steps Setup & run application:  :
              * To install required modules  fire following command  from project root directory : yarn install
              * To run the application fire fire following command  from project root directory :yarn run start
              * To access the application in browser go to the following url : http://localhost:8080 

- Application tested on Ubuntu
