var t1_roll = {
  timer: null,
  timeoutTimer: null,
  scTimeoutTimer: null,
  index: 5
};
var t2_roll = {
  timer: null,
  timeoutTimer: null,
  scTimeoutTimer: null,
  index: 1
};

$(function(){


    /*chartHelper.instances.m_Map.init()

    chartHelper.instances.m_InvestmentLine.init()
    chartHelper.instances.m_ProjectPie.init()
    chartHelper.instances.m_AntiFraudBar.init()
    chartHelper.instances.a_Map.init()*/

  jQuery(".board-financing-body").slide({mainCell:".wrap",autoPlay:true,effect:"topLoop",vis:5,delayTime:700});

    $(".board-bid-current-container").rotateTabs({
        interval: 4000
    });

    //数字滚动
    $('.animateNums').animateNums();

    //三农领域实时标旋转
    $('.farm-current,.farm-financing').rotateTabs();

    //实时交易明细扫描动画
    $('.board-recently-body').eddy();

    //反欺诈实时明细扫描动画
    $('.board-scan-body').eddy();

  rotate();
});

/**
 * 启动转动函数
 */
function rotate(){
  featureRotate1();
  t1_roll.timer = setInterval(featureRotate1, 11000);
  featureRotate2();
  t2_roll.timer = setInterval(featureRotate2, 11000);
}

function featureRotate1(){
  t1_roll.index--;
  if(t1_roll.index < 1){
    t1_roll.index = 5;
  }


  //相应小圆高亮及显示相关内容
  t1_roll.scTimeoutTimer = setTimeout(function(){

    $('.t1-content1,.t1-content2,.t1-content3,.t1-content4,.t1-content5').removeClass('active');
    $('.track1-1 .t1-'+ t1_roll.index).addClass('active');
    $('.t1-content'+ t1_roll.index).addClass('active');
  }, 1000);

  try{
    //大圆单步转动
    $('.t1-1,' +
      '.t1-2,' +
      '.t1-3,' +
      '.t1-4,' +
      '.t1-5,' +
      '.t1-content1,' +
      '.t1-content2,' +
      '.t1-content3,' +
      '.t1-content4,' +
      '.t1-content5').removeClass('active');
    $('.track1-1').velocity({ rotateZ: "-=72deg"}, { duration:1000, easing:[0.0, 0.0, 1.0, 1.0], complete: function(){
      if(t1_roll.index == 5){
        $('.track1-1').velocity({ rotateZ: "0deg"}, { duration:0});


        $('.t1-1,.t1-2,.t1-3,.t1-4,.t1-5').velocity({ rotateZ: "0deg"}, { duration:0});
      }
    }});

    //小圆单步转动
    $('.t1-1,.t1-2,.t1-3,.t1-4,.t1-5').velocity({ rotateZ: "+=72deg"}, { duration:1000, easing:[0.0, 0.0, 1.0, 1.0]});
  }catch (err){}

}

function featureRotate2(){
  t2_roll.index++;
  if(t2_roll.index > 5){
    t2_roll.index = 1;
  }


  //相应小圆高亮及显示相关内容
  t2_roll.scTimeoutTimer = setTimeout(function(){

    $('.t2-content1,.t2-content2,.t2-content3,.t2-content4,.t2-content5').removeClass('active');
    $('.track2-1 .t2-'+ t2_roll.index).addClass('active');
    $('.t2-content'+ t2_roll.index).addClass('active');
  }, 1000);

  try{
    //大圆单步转动
    $(  '.t2-1,' +
      '.t2-2,' +
      '.t2-3,' +
      '.t2-4,' +
      '.t2-5,' +
      '.t2-content1,' +
      '.t2-content2,' +
      '.t2-content3,' +
      '.t2-content4,' +
      '.t2-content5').removeClass('active');
    $('.track2-1').velocity({ rotateZ: "+=72deg"}, { duration:1000, easing:[0.0, 0.0, 1.0, 1.0], complete: function(){
      if(t2_roll.index == 1){
        $('.track2-1').velocity({ rotateZ: "0deg"}, { duration:0});


        $('.t2-1,.t2-2,.t2-3,.t2-4,.t2-5').velocity({ rotateZ: "0deg"}, { duration:0});
      }
    }});

    //小圆单步转动
    $('.t2-1,.t2-2,.t2-3,.t2-4,.t2-5').velocity({ rotateZ: "-=72deg"}, { duration:1000, easing:[0.0, 0.0, 1.0, 1.0]});
  }catch (err){}

}

