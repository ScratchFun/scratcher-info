var scratcher = "csf30816";

var webdata = {
	get: function(e,t){var n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return n.open("GET",e),n.onreadystatechange=function(){n.readyState>3&&200==n.status&&t(n.responseText)},n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(),n},
	post: function(e,t,n){var o="string"==typeof t?t:Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"),s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return s.open("POST",e),s.onreadystatechange=function(){s.readyState>3&&200==s.status&&n(s.responseText)},s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(o),s}
}
