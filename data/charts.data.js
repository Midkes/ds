//各月交易趋势
var boardTradeLine = echarts.init(document.getElementById('boardTradeLine'));
var boardTradeLineOption = {
    textStyle: {
        color: '#FFF'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: 5,
        bottom: 25,
        left: 30,
        right: 60
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0
        },
        axisLine:{
            lineStyle:{
                color: '#205492',
                width: 1
            }
        },
        data: ['2016-09','2016-10','2016-11','2016-12','2017-01','2017-02']
    },
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '交易金额（亿）',
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#205492',
                    width: 1
                }
            },
            max: 70,
            min: 0
        },
        {
            type: 'value',
            scale: true,
            name: '交易人数（人）',
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#205492',
                    width: 1
                }
            },
            max: 250000,
            min: 0
        }
    ],
    series: [
        {
            name:'交易金额（亿）',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            itemStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            type:'line',
            lineStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            data:[33, 34, 41, 60, 49, 20]
        },{
            name:'交易人数（人）',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            itemStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            type:'line',
            lineStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            yAxisIndex: 1,
            data:[91577, 130494, 166925, 183420, 186962, 103551]
        }
    ]
};

//各标交易额占比
var boardBidRate = echarts.init(document.getElementById('boardBidRate'));
var boardBidRateOption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : {
        name:'各标交易额占比',
        type:'pie',
        radius : [23, 73],
        center : ['50%', '50%'],
        roseType : 'area',
        label: {
            normal: {
                formatter: '{b}{d}%'
            }
        },
        data:[
            {value:35, name:'小微企业',
                itemStyle: {
                    normal: {
                        color: '#843EC4'
                    }
                }
            },
            {value:15, name:'分期宝',
                itemStyle: {
                    normal: {
                        color: '#D0235B'
                    }
                }
            },
            {value:10, name:'微团贷',
                itemStyle: {
                    normal: {
                        color: '#2da2fd'
                    }
                }
            },
            {value:15, name:'债权转让',
                itemStyle: {
                    normal: {
                        color: '#d74345'
                    }
                }
            },
            {value:5, name:'供应链',
                itemStyle: {
                    normal: {
                        color: '#ffcc1c'
                    }
                }
            },
            {value:20, name:'资产标',
                itemStyle: {
                    normal: {
                        color: '#d78155'
                    }
                }
            }
        ]
    }
};

//近15天资金流情况
/*
var boardRecently = echarts.init(document.getElementById('boardRecently'));
var boardRecentlyOption = {
    textStyle: {
        color: '#FFF'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: 20,
        bottom: 40,
        left: 50,
        right: 40
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 45,
            margin: 4,
            textStyle: {
                fontSize: 6
            }
        },
        axisLine:{
            lineStyle:{
                color: '#205492',
                width: 1
            }
        },
        data: ['01-24','01-25','01-26','01-27','01-28','01-29','01-30','02-01','02-02','02-03','02-04','02-05','02-06','02-07','02-08']
    },
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '万元',
            nameGap: 5,
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#205492',
                    width: 1
                }
            },
            max: 15000,
            min: 0
        },
        {
            type: 'value',
            scale: true,
            name: '人数',
            nameGap: 5,
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#205492',
                    width: 1
                }
            },
            max: 7000,
            min: 0
        }
    ],
    series: [
        {
            name:'充值金额（万元）',
            symbol: 'circle',
            symbolSize: 5,
            showAllSymbol: true,
            areaStyle: {normal: { opacity: .3}},
            itemStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            type:'line',
            lineStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            data:[9000, 8500, 7200, 6000, 5800, 4000, 3800, 4200, 5000, 6000, 6300, 6800, 7000, 7700,9000]
        },{
            name:'提现金额（万元）',
            symbol: 'roundRect',
            symbolSize: 5,
            showAllSymbol: true,
            areaStyle: {normal: { opacity: .3}},
            itemStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            type:'line',
            lineStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            data:[5000, 5500, 5200, 3000, 3800, 2200, 2300, 2200, 3000, 3000, 3300, 3800, 5000, 4700,6000]
        },{
            name:'充值人数（人）',
            itemStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            type:'bar',
            yAxisIndex: 1,
            data:[5000, 4000, 5200, 4200, 3800, 3300, 3000, 2500, 2800, 3200, 3200, 3500, 3400, 3600, 3800]
        },{
            name:'充值人数（人）',
            itemStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            type:'bar',
            yAxisIndex: 1,
            data:[3000, 3000, 3200, 2200, 1800, 1300, 1000, 500, 800, 1200, 1200, 1500, 1400, 1600, 1800]
        }
    ]
};
*/

//反欺诈识别结果
var boardCheatResult = echarts.init(document.getElementById('boardCheatResult'));
var boardCheatResultOption = {
    textStyle: {
        color: '#FFF'
    },
    grid: {
        top: 33,
        bottom: 30,
        left: 40,
        right: 20
    },
    xAxis : {
        type : 'category',
        axisLabel: {
            interval: 0
        },
        axisLine:{
            lineStyle:{
                color: '#205492',
                width: 1
            }
        },
        data : ['01-15','01-16','01-17','01-18','01-19']
    },
    yAxis : {
        type : 'value',
        splitLine: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#205492',
                width: 1
            }
        }
    },
    series : [
        {
            name:'通过',
            type:'bar',
            barWidth : 25,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#35A3FA'
                }
            },
            stack: '反欺诈识别结果',
            data:[120, 132, 101, 134, 90]
        },
        {
            name:'拒绝',
            type:'bar',
            barWidth : 25,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FECB33'
                }
            },
            stack: '反欺诈识别结果',
            data:[220, 182, 191, 234, 290]
        }
    ]
};

//中心地图图示
var mainChina = echarts.init(document.getElementById('mainChina'));
var mainChinaVariables = {
    //总注册人数
    dataReg:[
        {name: '北京',value: 1928 },
        {name: '天津',value: 3245 },
        {name: '上海',value: 398 },
        {name: '重庆',value: 238 },
        {name: '河北',value: 238 },
        {name: '河南',value: 398 },
        {name: '云南',value: 298 },
        {name: '辽宁',value: 298 },
        {name: '黑龙江',value: 2398 },
        {name: '湖南',value: 2398 },
        {name: '安徽',value: 2398 },
        {name: '山东',value: 238 },
        {name: '新疆',value: 2398 },
        {name: '江苏',value: 238 },
        {name: '浙江',value: 2398 },
        {name: '江西',value: 2398 },
        {name: '湖北',value: 398 },
        {name: '广西',value: 2398 },
        {name: '甘肃',value: 238 },
        {name: '山西',value: 2398 },
        {name: '内蒙古',value: 2398 },
        {name: '陕西',value: 239 },
        {name: '吉林',value: 2398 },
        {name: '福建',value: 239 },
        {name: '贵州',value: 298 },
        {name: '广东',value: 2398 },
        {name: '青海',value: 238 },
        {name: '西藏',value: 2398 },
        {name: '四川',value: 238 },
        {name: '宁夏',value: 2398 },
        {name: '海南',value: 2398 },
        {name: '台湾',value: 238 },
        {name: '香港',value: 298 },
        {name: '澳门',value: 2398 }
    ],
    //总投资人数
    dataInvest:[
        {name: '北京',value: 1928 },
        {name: '天津',value: 3245 },
        {name: '上海',value: 398 },
        {name: '重庆',value: 238 },
        {name: '河北',value: 238 },
        {name: '河南',value: 398 },
        {name: '云南',value: 298 },
        {name: '辽宁',value: 298 },
        {name: '黑龙江',value: 2398 },
        {name: '湖南',value: 2398 },
        {name: '安徽',value: 2398 },
        {name: '山东',value: 238 },
        {name: '新疆',value: 2398 },
        {name: '江苏',value: 238 },
        {name: '浙江',value: 2398 },
        {name: '江西',value: 2398 },
        {name: '湖北',value: 398 },
        {name: '广西',value: 2398 },
        {name: '甘肃',value: 238 },
        {name: '山西',value: 2398 },
        {name: '内蒙古',value: 2398 },
        {name: '陕西',value: 239 },
        {name: '吉林',value: 2398 },
        {name: '福建',value: 239 },
        {name: '贵州',value: 298 },
        {name: '广东',value: 2398 },
        {name: '青海',value: 238 },
        {name: '西藏',value: 2398 },
        {name: '四川',value: 238 },
        {name: '宁夏',value: 2398 },
        {name: '海南',value: 2398 },
        {name: '台湾',value: 238 },
        {name: '香港',value: 298 },
        {name: '澳门',value: 2398 }
    ],
    //总充值人数
    dataRecharge:[
        {name: '北京',value: 1928 },
        {name: '天津',value: 3245 },
        {name: '上海',value: 398 },
        {name: '重庆',value: 238 },
        {name: '河北',value: 238 },
        {name: '河南',value: 398 },
        {name: '云南',value: 298 },
        {name: '辽宁',value: 298 },
        {name: '黑龙江',value: 2398 },
        {name: '湖南',value: 2398 },
        {name: '安徽',value: 2398 },
        {name: '山东',value: 238 },
        {name: '新疆',value: 2398 },
        {name: '江苏',value: 238 },
        {name: '浙江',value: 2398 },
        {name: '江西',value: 2398 },
        {name: '湖北',value: 398 },
        {name: '广西',value: 2398 },
        {name: '甘肃',value: 238 },
        {name: '山西',value: 2398 },
        {name: '内蒙古',value: 2398 },
        {name: '陕西',value: 239 },
        {name: '吉林',value: 2398 },
        {name: '福建',value: 239 },
        {name: '贵州',value: 298 },
        {name: '广东',value: 2398 },
        {name: '青海',value: 238 },
        {name: '西藏',value: 2398 },
        {name: '四川',value: 238 },
        {name: '宁夏',value: 2398 },
        {name: '海南',value: 2398 },
        {name: '台湾',value: 238 },
        {name: '香港',value: 298 },
        {name: '澳门',value: 2398 }
    ],
    //实时注册人数
    dataRegNow:[
        {name: '北京',value: 1928 },
        {name: '天津',value: 3245 },
        {name: '上海',value: 398 },
        {name: '重庆',value: 238 },
        {name: '河北',value: 238 },
        {name: '河南',value: 398 },
        {name: '云南',value: 298 },
        {name: '辽宁',value: 298 },
        {name: '黑龙江',value: 2398 },
        {name: '湖南',value: 2398 },
        {name: '安徽',value: 2398 },
        {name: '山东',value: 238 }
    ],
    //实时投资人数
    dataInvestNow:[
        {name: '新疆',value: 2398 },
        {name: '江苏',value: 238 },
        {name: '浙江',value: 2398 },
        {name: '江西',value: 2398 },
        {name: '湖北',value: 398 },
        {name: '广西',value: 2398 },
        {name: '甘肃',value: 238 },
        {name: '山西',value: 2398 },
        {name: '内蒙古',value: 2398 },
        {name: '陕西',value: 239 }
    ],
    //实时充值人数
    dataRechargeNow:[
        {name: '吉林',value: 2398 },
        {name: '福建',value: 239 },
        {name: '贵州',value: 298 },
        {name: '广东',value: 2398 },
        {name: '青海',value: 238 },
        {name: '西藏',value: 2398 },
        {name: '四川',value: 238 },
        {name: '宁夏',value: 2398 },
        {name: '海南',value: 2398 },
        {name: '台湾',value: 238 },
        {name: '香港',value: 298 },
        {name: '澳门',value: 2398 }
    ],
    dataLines:[
        //每个数组元素对应一个投资事件
        [{name:'广东'},{name:'湖南',value:95}],
        [{name:'北京'},{name:'上海',value:90}],
        [{name:'上海'},{name:'广东',value:80}],
        [{name:'吉林'},{name:'广东',value:70}]
    ],
    geoCoordMap: {
        '北京': [116.41667, 39.91667],
        '天津': [117.20000, 39.13333],
        '上海': [121.43333, 30.92],
        '重庆': [106.45000, 29.56667],
        '河北': [114.48333, 38.03333],
        '河南': [113.65000, 34.76667],
        '云南': [102.73333, 25.05000],
        '辽宁': [123.38333, 41.80000],
        '黑龙江': [126.63333, 45.75000],
        '湖南': [113.00000, 28.21667],
        '安徽': [117.17, 31.52],
        '山东': [117.00, 36.40],
        '新疆': [87.68333, 43.76667],
        '江苏': [118.78333, 32.05000],
        '浙江': [120.20000, 30.26667],
        '江西': [115.90000, 28.68333],
        '湖北': [114.31667, 30.51667],
        '广西': [108.19, 22.48],
        '甘肃': [103.73333, 36.03333],
        '山西': [112.53333, 37.86667],
        '内蒙古': [111.41, 40.48],
        '陕西': [108.95000, 34.26667],
        '吉林': [125.35000, 43.88333],
        '福建': [119.30000, 26.08333],
        '贵州': [106.71667, 26.56667],
        '广东': [113.23333, 23.16667],
        '青海': [95.74, 35.0],
        '西藏': [91.00000, 29.60000],
        '四川': [104.06667, 30.66667],
        '宁夏': [106.26667, 37.46667],
        '海南': [110.35000, 20.01667],
        '台湾': [121.30, 25.03],
        '香港': [114.10000, 22.20000],
        '澳门': [113.50000, 22.20000]
    }
};
var mainChinaConvertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = mainChinaVariables.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var mainChinaConLineData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = mainChinaVariables.geoCoordMap[dataItem[0].name];
        var toCoord = mainChinaVariables.geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};
var mainChinaSeries = [
    {
        name: '注册人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        showLegendSymbol:false,
        geoIndex: 0,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#FFF'
                }
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#1837a1'
            }
        },
        data: mainChinaVariables.dataReg
    },
    {
        name: '投资人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        showLegendSymbol:false,
        geoIndex: 0,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#FFF'
                }
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#1837a1'
            }
        },
        data: mainChinaVariables.dataInvest
    },
    {
        name: '充值人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        showLegendSymbol:false,
        geoIndex: 0,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#FFF'
                }
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#1837a1'
            }
        },
        data: mainChinaVariables.dataRecharge
    },
    {
        name: '实时注册地区',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: mainChinaConvertData(mainChinaVariables.dataRegNow),
        symbolSize: 15,
        showEffectOn: 'render',
        rippleEffect: {
            period: 8,
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#13D946',
                shadowBlur: 10,
                shadowColor: '#333',
                opacity: 0
            }
        },
        animationDuration: 600,
        animationEasing: 'cubicIn'
    },
    {
        name: '实时投资地区',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: mainChinaConvertData(mainChinaVariables.dataInvestNow),
        symbolSize: 15,
        showEffectOn: 'render',
        rippleEffect: {
            period: 5,
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#F84C4C',
                shadowBlur: 10,
                shadowColor: '#333',
                opacity: 0
            }
        },
        animationDuration: 600,
        animationDelay: 1200
    },
    {
        name: '实时充值地区',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: mainChinaConvertData(mainChinaVariables.dataRechargeNow),
        symbolSize: 15,
        showEffectOn: 'render',
        rippleEffect: {
            period: 6,
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#FDBA06',
                shadowBlur: 10,
                shadowColor: '#333',
                opacity: 0
            }
        },
        animationDuration: 600,
        animationDelay: 1800
    }
];
var mainChinaLineSeries = [];
mainChinaLineSeries.push(
    {
        name: '实时投资示意图',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 3,
            trailLength: 0,
            symbol: 'arrow',
            symbolSize: 7
        },
        lineStyle: {
            normal: {
                color: '#F84C4C',
                width: 2,
                opacity: 0.6,
                shadowBlur: 10,
                curveness: 0.2
            }
        },
        data: mainChinaConLineData(mainChinaVariables.dataLines)
    });
var mainChinaOption = {
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    /*toolbox: {
        feature: {
            saveAsImage: {}
        }
    },*/
    legend: {
        orient: 'vertical',
        left: 110,
        top: 110,
        textStyle:{
            color:'#FFF'
        },
        data:[{
            name:'实时注册地区',
            icon:'roundRect'
        },{
            name:'实时投资地区',
            icon:'roundRect'
        },{
            name:'实时充值地区',
            icon:'roundRect'
        }]
    },
    visualMap: {
        type:'piecewise',
        left: 110,
        bottom: 110,
        min: 0,
        max: 7500,
        show: true,
        seriesIndex: [0],
        inRange: {
            color: ['#95b2f0', '#0c0b93']
        },
        textStyle:{
            color:'#FFF'
        }
    },
    series : mainChinaSeries.concat(mainChinaLineSeries)
};

//服务覆盖范围
var serviceArea = echarts.init(document.getElementById('serviceArea'));
var serviceAreaVariables = {
    dataCover: [
        {name: '北京',value: 50 },
        {name: '天津',value: 50 },
        {name: '上海',value: 50 },
        {name: '重庆',value: 0 },
        {name: '河北',value: 50 },
        {name: '河南',value: 0 },
        {name: '云南',value: 50 },
        {name: '辽宁',value: 50 },
        {name: '黑龙江',value: 0 },
        {name: '湖南',value: 50 },
        {name: '安徽',value: 50 },
        {name: '山东',value: 50 },
        {name: '新疆',value: 0 },
        {name: '江苏',value: 50 },
        {name: '浙江',value: 50 },
        {name: '江西',value: 50 },
        {name: '湖北',value: 50 },
        {name: '广西',value: 50 },
        {name: '甘肃',value: 0 },
        {name: '山西',value: 50 },
        {name: '内蒙古',value: 50 },
        {name: '陕西',value: 0 },
        {name: '吉林',value: 0 },
        {name: '福建',value: 50 },
        {name: '贵州',value: 50 },
        {name: '广东',value: 50 },
        {name: '青海',value: 0 },
        {name: '西藏',value: 0 },
        {name: '四川',value: 50 },
        {name: '宁夏',value: 0 },
        {name: '海南',value: 0 },
        {name: '台湾',value: 0 },
        {name: '香港',value: 0 },
        {name: '澳门',value: 0 }
    ],
    dataHouse:[
        {name: '北京',value: 19 },
        {name: '天津',value: 32 },
        {name: '上海',value: 39 },
        {name: '重庆',value: 23 },
        {name: '河北',value: 23 },
        {name: '河南',value: 39 },
        {name: '云南',value: 29 },
        {name: '辽宁',value: 29 },
        {name: '黑龙江',value: 39 },
        {name: '湖南',value: 29 },
        {name: '安徽',value: 39 },
        {name: '山东',value: 38 },
        {name: '新疆',value: 23 },
        {name: '江苏',value: 38 },
        {name: '浙江',value: 23 },
        {name: '江西',value: 23 },
        {name: '湖北',value: 39 },
        {name: '广西',value: 23 },
        {name: '甘肃',value: 23 },
        {name: '山西',value: 23 },
        {name: '内蒙古',value: 23 },
        {name: '陕西',value: 23 },
        {name: '吉林',value: 28 },
        {name: '福建',value: 28 },
        {name: '贵州',value: 29 },
        {name: '广东',value: 28 },
        {name: '青海',value: 28 },
        {name: '西藏',value: 98 },
        {name: '四川',value: 38 },
        {name: '宁夏',value: 98 },
        {name: '海南',value: 38 },
        {name: '台湾',value: 28 },
        {name: '香港',value: 28 },
        {name: '澳门',value: 98 }
    ],
    dataCar:[
        {name: '北京',value: 19 },
        {name: '天津',value: 32 },
        {name: '上海',value: 39 },
        {name: '重庆',value: 23 },
        {name: '河北',value: 23 },
        {name: '河南',value: 39 },
        {name: '云南',value: 29 },
        {name: '辽宁',value: 29 },
        {name: '黑龙江',value: 39 },
        {name: '湖南',value: 29 },
        {name: '安徽',value: 39 },
        {name: '山东',value: 38 },
        {name: '新疆',value: 23 },
        {name: '江苏',value: 38 },
        {name: '浙江',value: 23 },
        {name: '江西',value: 23 },
        {name: '湖北',value: 39 },
        {name: '广西',value: 23 },
        {name: '甘肃',value: 23 },
        {name: '山西',value: 23 },
        {name: '内蒙古',value: 23 },
        {name: '陕西',value: 23 },
        {name: '吉林',value: 28 },
        {name: '福建',value: 28 },
        {name: '贵州',value: 29 },
        {name: '广东',value: 28 },
        {name: '青海',value: 28 },
        {name: '西藏',value: 98 },
        {name: '四川',value: 38 },
        {name: '宁夏',value: 98 },
        {name: '海南',value: 38 },
        {name: '台湾',value: 28 },
        {name: '香港',value: 28 },
        {name: '澳门',value: 98 }
    ],
    geoCoordMap: {
        '北京': [116.41667, 39.91667],
        '天津': [117.20000, 39.13333],
        '上海': [121.43333, 30.92],
        '重庆': [106.45000, 29.56667],
        '河北': [114.48333, 38.03333],
        '河南': [113.65000, 34.76667],
        '云南': [102.73333, 25.05000],
        '辽宁': [123.38333, 41.80000],
        '黑龙江': [126.63333, 45.75000],
        '湖南': [113.00000, 28.21667],
        '安徽': [117.17, 31.52],
        '山东': [117.00, 36.40],
        '新疆': [87.68333, 43.76667],
        '江苏': [118.78333, 32.05000],
        '浙江': [120.20000, 30.26667],
        '江西': [115.90000, 28.68333],
        '湖北': [114.31667, 30.51667],
        '广西': [108.19, 22.48],
        '甘肃': [103.73333, 36.03333],
        '山西': [112.53333, 37.86667],
        '内蒙古': [111.41, 40.48],
        '陕西': [108.95000, 34.26667],
        '吉林': [125.35000, 43.88333],
        '福建': [119.30000, 26.08333],
        '贵州': [106.71667, 26.56667],
        '广东': [113.23333, 23.16667],
        '青海': [95.74, 35.0],
        '西藏': [91.00000, 29.60000],
        '四川': [104.06667, 30.66667],
        '宁夏': [106.26667, 37.46667],
        '海南': [110.35000, 20.01667],
        '台湾': [121.30, 25.03],
        '香港': [114.10000, 22.20000],
        '澳门': [113.50000, 22.20000]
    }
};
var serviceAreaConvertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = serviceAreaVariables.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var serviceAreaOption = {
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        seriesIndex: [0],
        inRange: {
            color: ['#070624', '#251F93']
        },
        textStyle:{
            color:'#FFF'
        }
    },
    geo: {
        map: 'china',
        top: 70,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#070524',
                borderColor: '#2C3B6B',
                shadowBlur: 10,
                shadowColor: '#201062'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: '注册人数',
            type: 'map',
            mapType: 'china',
            roam: false,
            showLegendSymbol:false,
            geoIndex: 0,
            top: 70,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#FFF'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#1837a1'
                }
            },
            data: serviceAreaVariables.dataCover
        },
        {
            name: '房贷',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: serviceAreaConvertData(serviceAreaVariables.dataCar),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            symbolOffset: [5, 5],
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#D74345',
                    shadowBlur: 10,
                    shadowColor: '#333',
                    opacity:.7
                }
            }
        },
        {
            name: '车贷',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: serviceAreaConvertData(serviceAreaVariables.dataCar),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#01CCFF',
                    shadowBlur: 10,
                    shadowColor: '#333',
                    opacity:.7
                }
            }
        }
    ]
};