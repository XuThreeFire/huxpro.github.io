// 增加cookie
function setCookie(cname, cvalue, exdays){
  var d = new Date();
  console.log("getTime:"+d.getTime());
  // 表示保存三十天
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
// 查询cookie
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(";");
    // 遍历每一个cookie 存在则返回cookie
    for(var i=0;i<ca.length;i++){
      var c = ca[i].trim(); //两端删除空白字符
      if(c.indexOf(cname)==0){ return c.substring(name.length, c.length);}
    }
    return "";
}
// 招待客户
function checkCookie(){
  var user = getCookie("username");
  if(user!=""){
    alert("欢迎 " + user + " 再次访问");
  }else{
    user = prompt("请输入你的名字：","");
    if(user!="" && user!=null){
      setCookie("username",user,30);
    }
  }

}