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
Configuration is done using the app from Broadlink. 
The device should be disconnected from the cloud, otherwise Homey cannot access the device!

- Hold the reset button 5s on your broadlink device until the (blue) light flashes
- In the Broadlink app (iOS / Android) Go through the “Add Device” steps
- When you reach the step to add the device to a room - quit the app

# Pairing

You can pair a Broadlink device the same way other devices are added to Homey.
You will need the IP address of your device in order to pair it. 
This can usually be retrieved from
your WiFi router.

For good performance, give the device a static IP address

# Usage

Once a RM-Mini is connected, it can start learning commands.
This is done by pressing the 'learn' button (for IR or RF) in the mobile card of the paired device.
On the device, a LED will turn on indicating it is in learning mode, and you can press a button on
a IR/RF Remote control.
The command will be added to the device settings in Homey. In the device settings menu, you can
give the command a more logical name, or delete it by clearing its name.
Currently 20 to 30 commands are supported in the settings page of each device.
It is not possible at this moment to change the order of the commands in the settings page.



** Using learned commands**

InfraRed commands can now be used in an identical way.
All commands the RM has learned, are available only in flows.
When creating a flow, you can use the command (or any command) as a trigger 
to start the flow.
In the 'then' part, you can select your RM device, and select the 
command from the list of available commands.

If you like to use a button to send a command, you can create a Virtual Device, 
which will trigger a flow (as described above).



# Reference

This app is based on the hard work of other people.

See:
- https://github.com/mjg59/python-broadlink
- https://github.com/davorf/BlackBeanControl
- https://github.com/frankjoke/ioBroker.broadlink2
- https://github.com/lprhodes/homebridge-broadlink-rm/tree/master/helpers
- http://peter.windridge.org.uk/playing-with-cheap-iot-devices  (hysen thermostat)
- https://github.com/RWensveen/com.broadlink

Protocol:
- https://blog.ipsumdomus.com/broadlink-smart-home-devices-complete-protocol-hack-bc0b4b397af1



# Version
* 1.0.2<br>
experimental: support for RM4 mini
* 1.0.1<br>
Bugfixes
* 1.0.0<br>
Own edit to make the RM3 working.
I removed all the other devices.
All credits go to the original dev.

* 2.0.4<br>
Full working version of Hysen thermostat. Tested with a BEOK 'tol313' thermostat.
Add Dooya motorized curtains.
Correct display of icons for A1
* 2.0.3<br>
Add user manual (in APPSTORE.md) explaining how to use RF learning.<br>
Correct sensor display of A1 device<br>
Correct SP1 device, so the app will not crash :-)<br>
Add Hysen thermostat (implementation done, testing not done -> it might completely fail)<br>
Move capability icons to /assets directory (i.s.o. /drivers/xxx/assets)<br>
Correct app settings page to show current settings.
<br><br>
* 2.0.2<br>
Learning and transmitting RF (433MHz) works. Homey speech is used to inform the user on what to do.
<br><br>
* 2.0.1<br>
Updated to Homey V2.0 to prevent app crashes
Use async/await wherever possible (easier to read compared to Promise)
<br><br>
* 1.3.5<br>
All seems ok, but RF not working
