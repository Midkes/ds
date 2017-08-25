$(function(){


    chartHelper.instances.m_Map.init()

    chartHelper.instances.m_InvestmentLine.init()
    chartHelper.instances.m_ProjectPie.init()
    chartHelper.instances.m_AntiFraudBar.init()
    chartHelper.instances.a_Map.init()

    Circles.create({
        id: 'circles-1',
        value: 50,
        radius: 25,
        width: 5,
        text: function (value) { return value + '%'; },
        colors: ['#152D66', '#35A3FA']
    });

    jQuery(".board-financing-body").slide({mainCell:".wrap",autoPlay:true,effect:"topLoop",vis:5,delayTime:700});

    $(".board-bid-current-container").rotateTabs({
        interval: 4000
    });

    jQuery(".main-footer .body").slide({mainCell:".main-footer-wrap ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50,trigger:"click"});

    //数字滚动
    $('.animateNums').animateNums();

    //三农领域实时标旋转
    $('.farm-current,.farm-financing').rotateTabs();

    //实时交易明细扫描动画
    $('.board-recently-body').eddy();

    //反欺诈实时明细扫描动画
    $('.board-scan-body').eddy();
});


