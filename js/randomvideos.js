var videos = [
'ZeYN5j0UFBY',
'8ILVUBFYNXw',
'WVpqfR5bJ0s',
'u1nSnkzr36k',
'k14MBUzX5JA',
'ZuW3QDNKC7I',
'miwUYdNAMGA',
'udFFCN3th30'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);
