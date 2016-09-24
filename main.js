var bl = document.getElementById('bl');
var getRtogether = document.getElementById('brRadiusTogether');
var crossBrowserCode = document.getElementById('code');

// All Borders
getRtogether.oninput = function(){
	bl.style.borderRadius = getRtogether.value + 'px';
	pref();
}

function pref(){
	var prefixes = {
	    webkit:'-webkit-border-radius: ' + getRtogether.value + 'px',
	    moz:      '-moz-border-radius: ' + getRtogether.value + 'px',
	    ms:        '-ms-border-radius: ' + getRtogether.value + 'px',
	    o:          '-o-border-radius: ' + getRtogether.value + 'px',
	    free:          'border-radius: ' + getRtogether.value + 'px'
	}
	crossBrowserCode.innerHTML = prefixes.webkit + '<br>' + prefixes.moz + '<br>' + prefixes.ms + '<br>' + prefixes.o + '<br>' + prefixes.free;
}
