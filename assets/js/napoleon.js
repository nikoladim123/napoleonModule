var napSingleBox = document.getElementsByClassName('napSingleBox');
var napSingleContainer = document.getElementsByClassName('napSingleContainer');

// first box
napSingleBox[0].addEventListener('mouseenter',()=>{
  clearTimeout(timer);
  napSingleBox[0].className = 'napSingleBox napSingleBoxHover';
  napSingleContainer[0].style.filter = 'saturate(0%)';
});

napSingleBox[0].addEventListener('mouseleave',()=>{
  napoleonTimer();
});

var timer;

function napoleonTimer() {
  timer = setTimeout(function () {
    napSingleBox[0].className = 'napSingleBox';
    napSingleContainer[0].style.filter = 'saturate(100%)';
  }, 500);
}


// secund box
napSingleBox[1].addEventListener('mouseenter',()=>{
  clearTimeout(timerSecund);
  napSingleBox[1].className = 'napSingleBox napSingleBoxHover';
  napSingleContainer[1].style.filter = 'saturate(0%)';
});

napSingleBox[1].addEventListener('mouseleave',()=>{
  napoleontimerSecund();
});

var timerSecund;

function napoleontimerSecund() {
  timerSecund = setTimeout(function () {
    napSingleBox[1].className = 'napSingleBox';
    napSingleContainer[1].style.filter = 'saturate(100%)';
  }, 500);
}

// third

napSingleBox[2].addEventListener('mouseenter',()=>{
  clearTimeout(timerThird);
  napSingleBox[2].className = 'napSingleBox napSingleBoxHover';
  napSingleContainer[2].style.filter = 'saturate(0%)';
});

napSingleBox[2].addEventListener('mouseleave',()=>{
  napoleontimerThird();
});

var timerThird;

function napoleontimerThird() {
  timerThird = setTimeout(function () {
    napSingleBox[2].className = 'napSingleBox';
    napSingleContainer[2].style.filter = 'saturate(100%)';
  }, 500);
}
