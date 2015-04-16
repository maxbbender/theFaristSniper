# theFaristSniper
Sniper Script for Farist College

A class registration sniper for Marist. Requires Greasemonkey or Tampermonkey to run. Credit goes to Evan Hopkins and Antony Liang of Marist University for the first version of this.

Installation
------------
Use either Greasemonkey for Firefox or Tampermonkey for Chrome to run the script. Click new script. Copy and paste the entire text of this document.

Detect vs. Date
------------
There are two scripts included. The first (date) is from a script altered by a student at ACU the second is the original from Hopkins @Farist. Use either one, doesn't matter. Just make sure you set it up.

Date Setup 
------------
To setup the date script you have to go convert the time you are registering to EPOCH time in milliseconds. You can do that here: http://www.epochconverter.com/#tools ~ Put that time into the variable labled as "registrationEpoch" and you should be all set. MAKE SURE YOU GET THE MILLISECOND VERSION; IF YOU USE THE 'SECONDS' IT WILL NOT WORK AND YOU WILL NOT REGISTER.

Usage
-----
Add in the CRN numbers of your classes starting on line 37. Replace the 'XXXXX' with your class CRNs. Load script on the 'Student->Registration' page of 'Banner Self Service' from clicking the Banner link on MyACU. The script will launch upon clicking the 'add or drop classes' option. After clicking on that link, submit your registration code, then go back to menu then go back to 'add or drop classes' and it will start running.

Concerns
--------
If your system clock is a few seconds ahead of the Banner server's clock, this script will fail. Be sure to wind it back a few seconds if this seems to be the case.

