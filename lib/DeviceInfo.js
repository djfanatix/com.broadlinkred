/**
 * Driver for Broadlink devices
 *
 * Copyright 2018-2019, R Wensveen
 *
 * This file is part of com.broadlink
 * com.broadlink is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * com.broadlink is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with com.broadlink.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict'

const Util = require('./util.js');
const Homey = require('homey');

var BroadlinkType = { 'UNKNOWN' : 0,
                      'RM'      : 4,
                    }


var devType2Info = function( devID ) {

	var info = { deviceId: devID,
			type: '',
			isCompatible: false,
			name: ''
		};


	if(( devID >= 0x7530 ) && ( devID <= 0x7918 )) {
		info.type = BroadlinkType.SP2; info.name = 'SPMini2 (OEM)';
	}
	else {
		switch( devID )
		{
		   // RM3_mini + RM_pro
		case 0x2712: info.type = BroadlinkType.RM;       info.name = 'RM2';  break;
		case 0x2737: info.type = BroadlinkType.RM;       info.name = 'RM Mini';  break;
		case 0x273d: info.type = BroadlinkType.RM;       info.name = 'RM Pro Phicomm';  break;
		case 0x2783: info.type = BroadlinkType.RM;       info.name = 'RM2 Home Plus';  break;
		case 0x277c: info.type = BroadlinkType.RM;       info.name = 'RM2 Home Plus GDT';  break;
		case 0x278f: info.type = BroadlinkType.RM;       info.name = 'RM Mini Shate';  break;
		case 0x2797: info.type = BroadlinkType.RM;       info.name = 'RM2 Pro HYC';  break;
        case 0x27d0: info.type = BroadlinkType.RM;       info.name = 'RM3 Mini red';  break;
        case 0x5F36: info.type = BroadlinkType.RM;       info.name = 'RM3 Mini red';  break;
        case 0x51da: info.type = BroadlinkType.RM;       info.name = 'RM4 Mini red';  break;
        case 0x5F36: info.type = BroadlinkType.RM;       info.name = 'RM3 Mini red';  break;
        case 0x610e: info.type = BroadlinkType.RM;       info.name = 'RM4 Mini';  break;
        case 0x62bc: info.type = BroadlinkType.RM;       info.name = 'RM4 Mini';  break;
        case 0x6070: info.type = BroadlinkType.RM;       info.name = 'RM4 Mini';  break;
        case 0x62be: info.type = BroadlinkType.RM;       info.name = 'RM4 Mini';  break;


		default: info.type = BroadlinkType.UNKNOWN; info.name = 'unknown';
		}
	}
	return info;
}


/**
 *
 */
exports.getDeviceInfo = function( founddevID, expecteddevID ) {

	var foundInfo = devType2Info( founddevID );
	var expectedInfo = devType2Info( expecteddevID );

	if( foundInfo.type == expectedInfo.type ) { foundInfo.isCompatible = true; }

	let s = Homey.ManagerSettings.get('DebugSettings');
	if(( s ) && ( s['compat']) ) {
		foundInfo.isCompatible = true;
	}
	//Util.debugLog('getDeviceInfo: found = 0x' + founddevID.toString(16) + '  expected = 0x' + expecteddevID.toString(16) + '  isComp = ' + foundInfo.isCompatible)

	return foundInfo
}
