let card = document.querySelector('.card');
let isIn = true;
let isOut = false; //鼠标可否进行退出动画
let hoverCircle; //等待被生成的元素

card.addEventListener('mouseenter', function (e) {
  if (isIn) {
    //获取进入的鼠标位置
    //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
    let inX = e.clientX - e.target.offsetLeft;
    let inY = e.clientY - e.target.offsetTop;

    //创建一个span元素，并且给它对应的出生坐标
    hoverCircle = document.createElement('span');
    hoverCircle.style.left = inX + 'px';
    hoverCircle.style.top = inY + 'px';
    card.appendChild(hoverCircle);

    hoverCircle.classList.remove('out'); //除去出去的动画
    hoverCircle.classList.add('in'); //添加进入的动画
    isIn = false; //关闭进来的门（不能使用进入的方法）
    isOut = true;
  }
});

card.addEventListener('mouseleave', function (e) {
  if (isOut) {
    //获取出去的鼠标位置
    //生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
    let outX = e.clientX - e.target.offsetLeft;
    let outY = e.clientY - e.target.offsetTop;

    hoverCircle.style.left = outX + 'px';
    hoverCircle.style.top = outY + 'px';

    hoverCircle.classList.remove('in');
    hoverCircle.classList.add('out'); //添加退出的动画
    isOut = false; //不能再执行出去动画

    setTimeout(() => {
      card.removeChild(hoverCircle); //删除元素
      isIn = true; //打开进来的大门
    }, 800);
  }
});
