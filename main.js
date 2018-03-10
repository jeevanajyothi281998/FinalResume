function functionName() {
  window.open("resume.html","_self",true);
}

function loadJSON(file,callback){
  var commit=new XMLHttpRequest();
  commit.overrideMimeType("application/json");
  commit.open("GET",file,true);
  commit.onreadystatechange=function(){
    if (commit.readyStatus===4 && commit.status=="200") {
      callback(commit.responseText);
    }
  }
  commit.send(null);
}
loadJSON("resources/resume.json",function(text){
var data= JSON.parse(text);
console.log(data);
});

// var main=document.getElementById('maindiv');
// var left=document.getElementById('leftdiv');
// var right=document.getElementById('rightdiv');
//
// function basic(basics) {
//
// }
