var items = document.querySelectorAll('div.users > ul#users-container > li > a');
for (var i = 0; i < items.length; i++){
	var href = items[i].getAttribute('href');
	var name = href.substr(6, href.length);
	console.log(name);
}