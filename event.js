var drumKitElems = document.getElementsByClassName("drumKit");

//keyCode 사용하고 addEventListener 각 키마다 9개 사용하면 효율은?

//key press and play sound
document.addEventListener("keypress",function(event){
  var pressedElem = Array.prototype.find.call(drumKitElems,function(elem){
    if(event.key.toLowerCase() === elem.id.toLowerCase())return elem;
  });
  //alert("pressedElem is " + pressedElem.className);
  if(pressedElem){
    //audio
    //.autoplay .load() 이벤트 발생에 따라 음원이 바로바로 새로 재생됨
    pressedElem.children[1].autoplay = true;//span 태그의 children[1]은 audio 태그이다.
    pressedElem.children[1].load();
    //.play() 음원재생이 끝나야 다음 재생이 됨. 이벤트 발생 속도는 무시함
    //pressedElem.children[1].play();

    pressedAni(pressedElem);//event animation. 필수요소1
  }
});

//button animation function
function pressedAni(elem){
  var id = setInterval(frame,15);//event animation. 필수요소2
  function frame(){//event animation. 필수요소3
    //elem.style은 .css 파일의 tag속성에는 접근 못한다. 그러므로 .html파일의 tag에 직접 속성을 지정해 놔야한다. 그래서 borderwidth는 html파일의 span tag에 직접 지정됨.
    if(elem.style.borderWidth === "5px"){
      elem.style.borderWidth = "2px";
      clearInterval(id);//event animation. 필수요소4
    }else{
      var borderWidthNum = elem.style.borderWidth.slice(0,elem.style.borderWidth.indexOf("p"));
      elem.style.borderWidth = (Number(borderWidthNum) + 0.5) + "px";
    }
  };
}

/*
//how to htmlCollection uses forEach
Array.prototype.forEach.call(drumKitElems, function(elem) {
  elem.addEventListener("click",function(event){
    var targetKeyText = event.currentTarget.id;
    if(targetKeyText)alert(targetKeyText);
  });
});
*/
