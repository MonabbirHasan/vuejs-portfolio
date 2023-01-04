const banner = document.getElementById('banner');

var i = 0;
var count = 200;

while (i < count) {
	var bubble = document.createElement('i');
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	var size = Math.random() * 10;
	bubble.style.width = 1 + size + 'px';
	bubble.style.height = 1 + size + 'px';
	bubble.style.left = x + 'px';
	bubble.style.top = y + 'px';
	banner?.appendChild(bubble);
	i++;
}
