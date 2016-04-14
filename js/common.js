(function(){
//bindEven();

})()
function init(){
	bindEven();
}
function bindEven(){
	
  $(document).on("click",".navbar-nav li a",function(e){
  	alert("tag clicl");

  });
  var html=' <li><a href="#">小游戏2</a></li>'
  $(".navbar-nav").append(html);
}