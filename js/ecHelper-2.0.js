//
require.config({
    paths: {
        //
		echarts: 'js/echarts2.0'
	}
});

var ecHelper = {};
ecHelper.type = {
	map: [
            'echarts',
            'echarts/chart/map'
	],
	bar: [
            'echarts',
            'echarts/chart/bar'
	],
	line: [
            'echarts',
            'echarts/chart/line'
	],
	pie: [
            'echarts',
            'echarts/chart/pie'
	],
};

//初始化echart实例
ecHelper.init = function (dom, type, option) {
	require(
		type,
        function (ec) {
        	var chart = ec.init(dom);
        	chart.setOption(option);
        }
    );
}


