AOS.init();
function cookieAlert()
{
  document.getElementById("cookieAlert").style='display:none';
  setCookie('cookieAlert', 'true', 2629743);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
} 
window.onload = () => {
if(getCookie('cookieAlert') === null)
{
  document.getElementById("cookieAlert").style='display:block';
}
}