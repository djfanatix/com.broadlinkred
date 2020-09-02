# Homey

Use [Homey](https://www.athom.com/) together with [Broadlink devices](http://www.ibroadlink.com/).


# Supported devices

* [RM3 mini](http://www.ibroadlink.com/rmMini3/)
  The RM3 Mini is a wifi to IR (infrared) device. It can learn IR commands and transmit them.
  This app is only for the 5F36 version (red) 

# Soon to be supported devices
* [RM4] can be added if you enable all devices in the config of the app.


# Device configuration

The devices need to be configured before they can be paired with Homey.
Configuration is done using the eControl app from Broadlink. 
The device should be disconnected from the cloud!

Hold the reset button on your broadlink device until the light flashes
In the IHC app (iOS / Android) Go through the “Add Device” steps
When you reach the step to add the device to a room - quit the IHC app

# Pairing

You can pair a Broadlink device the same way other devices are added to Homey.
You will need the IP address of your device in order to pair it. This can usually be retrieved from
your WiFi router.
If your device is not directly listed as Broadlink device in the initial pairing window, check the
compatiblity list below.

# Usage

Once a RM3-Mini, it can start learning commands.
This is done by pressing the 'learn' button (for IR or RF) in the mobile card of the paired device.
On the device, a LED will turn on indicating it is in learning mode, and you can press a button on
a IR/RF Remote control.
The command will be added to the device settings in Homey. In the device settings menu, you can
give the command a more logical name, or delete it by clearing its name.
Currently 20 to 30 commands are supported in the settings page of each device.
It is not possible at this moment to change the order of the commands in the settings page.



** Using learned commands**

Both InfraRed and RF commands can now be used in an identical way.
All commands the RM-Pro-plus has learned, are available only in flows.
When creating a flow, you can use the command (or any command) as a trigger 
to start the flow.
In the 'then' part, you can select your RM-Pro-plus device, and select the 
command from the list of available commands.

If you like to use a button to send a command, you can create a Virtual Device, 
which will trigger a flow (as described above).


