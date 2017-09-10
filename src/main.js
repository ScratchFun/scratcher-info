var scratcher = "csf30816";

var http = {
	get: function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},
	post: function(e,t,n){var o="string"==typeof t?t:Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"),s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return s.open("POST",e),s.onreadystatechange=function(){s.readyState>3&&200==s.status&&n(s.responseText)},s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(o),s}
};

var info = {
	id: JSON.parse(http.get('https://api.scratch.mit.edu/users/' + scratcher)).id,
	joined: JSON.parse(http.get('https://api.scratch.mit.edu/users/' + scratcher)).history.joined,
	messages: JSON.parse(http.get('https://api.scratch.mit.edu/users/' + scratcher + '/messages/count')).count,
	avatars: JSON.parse(http.get('https://api.scratch.mit.edu/users/' + scratcher)).profile.images,
};
