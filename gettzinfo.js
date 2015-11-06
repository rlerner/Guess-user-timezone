	//Gathers user's timezone, regardless of daylight savings time.
	function getStandardTimezone() {
		//Base Timezone Offset -- In Jan, nobody is in DST, so use this as a selector base.
		var year = new Date().getFullYear();
		return new Date(year, 0, 1).getTimezoneOffset();
	}

	//Determines if user ever observes DST (even if not currently).
	function tzObservesDST() {
		var year = new Date().getFullYear();
		var jan = new Date(year, 0, 1).getTimezoneOffset();
		var jul = new Date(year, 6, 1).getTimezoneOffset();
		if (jan!==jul) {
			return true;
		}
		return false;
	}

	//Set the default option in the TZ select, and if this TZ observes DST.
	function selectTZandDST() {
		var tz = getStandardTimezone();
		var od = tzObservesDST();
		document.getElementById("tz").value = "tz"+tz.toString();
		if (od) {
			document.getElementById("observes_dst").checked = 'checked';
		} else {
			document.getElementById("observes_dst").checked = '';
		}
	}
