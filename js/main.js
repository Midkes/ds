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


  chartHelper.instances.m_carCover.init();
  chartHelper.instances.m_houseCover.init();
  chartHelper.instances.m_consumptionCover.init();
  chartHelper.instances.m_tradeArea.init();
  chartHelper.instances.m_regLine.init();
  chartHelper.instances.m_tradeMountLine.init();
  chartHelper.instances.m_tradeMonthLine.init();
  chartHelper.instances.m_tradeBidRate.init();
  chartHelper.instances.m_lifeCycleChart.init();
  chartHelper.instances.m_ageChart.init();
  chartHelper.instances.m_loyaltyRate.init();
  chartHelper.instances.m_livelyRate.init();
  chartHelper.instances.m_cheatResultBar.init();
  chartHelper.instances.m_nwAreaRate.init();
  chartHelper.instances.m_userModelArea.init();
  chartHelper.instances.m_userApplyShow.init();
  chartHelper.instances.m_userModelBar.init();
  chartHelper.instances.m_nwModelBar.init();
  chartHelper.instances.m_nwResultBar.init();

  var trackCarThumb = echarts.init(document.getElementById('trackCarThumb'));
  var trackCarThumbOption = {
    bmap: {
      center: [116.46, 39.92],
      zoom: 10,
      roam: true,
      mapStyle: {
        'styleJson': [
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#031628'
            }
          },
          {
            'featureType': 'land',
            'elementType': 'geometry',
            'stylers': {
              'color': '#000102'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#0b3d51'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#08304b'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -70
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#857f7f'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'color': '#062032'
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#465b6c'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'label',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }
        ]
      }
    },
    series: [{
      type: 'lines',
      mapType: 'china',
      coordinateSystem: 'bmap',
      polyline: true,
      data: [{"coords":[[116.4311,39.9594],[116.4319,39.9595],[116.4352,39.9595],[116.4408,39.9596],[116.4437,39.9599],[116.4467,39.9626],[116.4475,39.9621],[116.4496,39.9607],[116.4499,39.9605],[116.45,39.9604],[116.4496,39.9601],[116.4483,39.9588],[116.4462,39.9569],[116.4453,39.956],[116.4437,39.9551],[116.4344,39.9545],[116.4352,39.9595],[116.4252,39.9594],[116.4251,39.9594],[116.408,39.9591],[116.4079,39.9591],[116.4079,39.959],[116.4079,39.9582],[116.4079,39.9567],[116.408,39.9559],[116.408,39.9531],[116.408,39.9527],[116.4081,39.9516],[116.4081,39.9497],[116.4081,39.9485],[116.4083,39.9463],[116.4084,39.9437],[116.4085,39.9412],[116.4085,39.9387],[116.4086,39.9363],[116.4086,39.9359],[116.4088,39.9334],[116.4088,39.9333],[116.4088,39.9326],[116.4089,39.9298],[116.4091,39.9273],[116.4108,39.9243],[116.4108,39.9242],[116.4108,39.924],[116.411,39.9185],[116.4066,39.9184],[116.4066,39.9152],[116.4067,39.9152],[116.4115,39.9155],[116.4126,39.9155],[116.4138,39.9121],[116.4138,39.9114],[116.4114,39.9105],[116.4114,39.9093],[116.4115,39.9081],[116.4115,39.908],[116.4122,39.908],[116.413,39.908],[116.4138,39.908],[116.4179,39.9081],[116.418,39.9071],[116.418,39.9067],[116.4181,39.9062],[116.4181,39.9056],[116.4181,39.9053],[116.4183,39.9032],[116.4184,39.902],[116.4184,39.9012],[116.4184,39.901],[116.4186,39.901],[116.4217,39.9004],[116.4223,39.9004],[116.4274,39.9006],[116.4274,39.9007],[116.4204,39.9007],[116.4211,39.902],[116.4218,39.9025],[116.4248,39.9047],[116.4249,39.9048]],"lineStyle":{"normal":{"color":"rgba(90,90,90,1)"}}}],
      lineStyle: {
        normal: {
          width: 0
        }
      },
      effect: {
        constantSpeed: 20,
        show: true,
        trailLength: 0.1,
        symbolSize: 5.5
      },
      zlevel: 1
    }]
  };

  /*trackCarThumb.setOption(trackCarThumbOption);*/



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

  //右键关闭
  $(document).on('mousedown', function(e){
    if(e.which === 3){
      $('.pop-bi,.pop-risk,.board-track-pop').css('z-index', -1);
    }
  }).on("contextmenu", function(){
    return false;
  });

  $('#trackCarThumb').on('click', function(){
    $('.board-track-pop').css('z-index', 3);
  });
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

function showBI(){
  $('.pop-bi').css('z-index', 3);
}

function showRisk(){
  $('.pop-risk').css('z-index', 3);
}
