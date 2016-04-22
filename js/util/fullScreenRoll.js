//判断当前浏览器

(function(){
  if(window.HTMLElement){
    HTMLElement.prototype.fullScreen=function(name,opn){
      var el=this,
          objAttr=document.getElementsByName(name),
          clientHeight=document.body.clientHeight,
          len=objAttr.length,
          speed=500;
         // console.dir(el);
     _init(); 
      function _init(){
        for(var i=0;i<len;i++){
          var obj=objAttr[i];
          document.getElementsByTagName('body')[0].scrollTop = 0;
           alert($(".fullScreen_active").scrollTop());
          $(".fullScreen_active").scrollTop(0);

          obj.style.height=clientHeight+"px";
          obj.setAttribute("date-index",i);
        }
        _bindEven();
      };
     function _bindEven(){
        var isMacWebkit=(navigator.userAgent.indexOf("Macintosh")!==-1&& navigator.userAgent.indexOf("WebKit")!==-1)
        var isFirefox=(navigator.userAgent.indexOf("Gecko")!==-1)
        document.onmousewheel=wheelHander;  //在ie下有效
        if(isFirefox)document.addEventListener("DOMMouseScroll",wheelHander,false);
        function wheelHander(event){
          event = event || window.event;
          if(event.wheelDelta){
        　　if(event.wheelDelta>0){//向上滚动
              _moveUp();
             }else{//向下滚动
              _moveDown()
             }　　

           }else if (event.detail){

          　　if(event.detail<0){//向上滚动
                _moveUp();
              }else{
                _moveDown();
              }

           }
        }
      };
     function _moveUp(){
        var obj=$(".fullScreen_active");
        //console.dir(obj)
        var index=parseInt(obj.attr("date-index"));
        var next;

        if((index-1)<0)next=0;
        else {
          next=index-1;
          var previousObj=obj.prev();
          if(typeof  previousObj!= "undefined" ){
            obj.removeClass("fullScreen_active");
            previousObj.addClass("fullScreen_active")
          }
        }
        var pos=100*next*(-1);
        transformPage(pos);
     };
     function _moveDown(){
        var obj=$(".fullScreen_active");
        var index=parseInt(obj.attr("date-index")) 
        var next;
        if((index+1)>(len-1))next=len-1;
        else {
          next=index+1;
          var nexObj=obj.next();
          if(typeof nexObj != "undefined" && nexObj.length>0){
            obj.removeClass("fullScreen_active");
            nexObj.addClass("fullScreen_active")
          }

        }
        var pos=100*next*(-1);
        transformPage(pos);
     }
     
    function transformPage(pos){
      $(el).css({
        "-webkit-transform": "translate3d(0, " + pos + "%, 0)",
        "-webkit-transition": "-webkit-transform " + speed + "ms ease",
        "-moz-transform": "translate3d(0, " + pos + "%, 0)",
        "-moz-transition": "-moz-transform " + speed + "ms ease",
        "-ms-transform": "translate3d(0, " + pos + "%, 0)",
        "-ms-transition": "-ms-transform " + speed+ "ms ease",
        "transform": "translate3d(0, " + pos + "%, 0)",
        "transition": "transform " + speed + "ms ease"
      });
    }

     
    }
   
    
  }
})()
function hasClass(obj, cls) { 

    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj["className"] = obj.className.replace(reg, ' ');  
    }  
}
function addClass(obj, cls) { 
//  console.dir(obj)
 // alert(obj.length)
  //alert(obj.splitText)
// console.dir(obj)
 // alert(obj["className"])
    if (!this.hasClass(obj, cls)) obj["className"] += " " + cls;  
}  
