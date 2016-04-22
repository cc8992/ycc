(function(){
//bindEven();

})()
function init(){
	var htmlH=$(window).height()-$(".header").height();

	console.log($(window).height());
	console.log(window.screen.availHeight);
	console.log($(".header").height());
	console.log("document.body.scrollHeight="+document.body.scrollHeight)
	console.log("document.body.clientHeight="+document.body.clientHeight)
	
	$(".container1").css("height",htmlH)
	bindEven();
}
function bindEven(){
	
  $(document).on("click",".navbar-nav li a",function(e){
  	//alert("tag clicl");

  });
  // var html=' <li><a href="#">小游戏2</a></li>'
  // $(".navbar-nav").append(html);
}