// ==UserScript==
// @name         Super Registration Sniper
// @namespace    http://use.i.E.your.homepage/
// @version      2.1.1
// @description  Registers user for classes in under a second
// @include      https://ssb.banner.marist.edu/*
// @copyright    2012+, Evan Hopkins, Antony Liang, Bob Nisco
// ==/UserScript==

//INSTALLATION: Use either Greasemonkey for Firefox or Tampermonkey for Chrome to run the script.
//              Click new script. Copy and paste the entire text of this document.

//USAGE: Add in the CRN numbers of your classes into the crns array on line 25.
//       Load script on the 'Student' tab of the 'Banner Self Service' tab
//       of My Marist. The script will launch upon clicking the 'add or drop classes' option.

//verifies user is on pre-registration page and then adds CRN's then submits form
if (window.location == 'https://ssb.banner.marist.edu/PROD11G/bwskfreg.P_AltPin') {

	// continuously refreshes the page until the textfields are there
	if (document.getElementById('crn_id1') === null) {
		location.reload();
	} else {
		// Put your CRNS in this array
		var crns = [];
		for (var i = 0; i < crns.length; i++) {
			document.getElementById('crn_id' + (i + 1)).value = crns[i];
		}

		//submits form
		document.getElementsByName('REG_BTN')[1].click();
	}
} else if(window.location == 'https://ssb.banner.marist.edu/PROD11G/bwckcoms.P_Regs') {
	alert("Success!");
}
return;
