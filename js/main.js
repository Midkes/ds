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
});


