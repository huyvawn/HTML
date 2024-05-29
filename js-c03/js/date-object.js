var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTMl = '<p>Copyright &copy;'+year +'</p>';