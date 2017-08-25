/// <reference path="../public/utils.js" />
/// <reference path="../public/ecHelper-2.0.js" />
//图标工具类
var chartHelper = {};

//地区地图香港
chartHelper.Areamap = {
    getGeoCoord: function () {
        return {
            "重庆": [106.45000, 29.56667],
            "北京": [116.41667, 39.91667],
            "上海": [121.43333, 30.92],
            "天津": [117.20000, 39.13333],
            "香港": [114.10000, 22.20000],
            "广东": [113.23333, 23.16667],
            "浙江": [120.20000, 30.26667],
            "福建": [119.30000, 26.08333],
            "甘肃": [103.73333, 36.03333],
            "贵州": [106.71667, 26.56667],
            "湖南": [113.00000, 28.21667],
            "江苏": [118.78333, 32.05000],
            "江西": [115.90000, 28.68333],
            "辽宁": [123.38333, 41.80000],
            "山西": [112.53333, 37.86667],
            "四川": [104.06667, 30.66667],
            "西藏": [91.00000, 29.60000],
            "新疆": [87.68333, 43.76667],
            "云南": [102.73333, 25.05000],
            "陕西": [108.95000, 34.26667],
            "青海": [95.74, 35.0],
            "宁夏回": [106.26667, 37.46667],
            "黑龙江": [126.63333, 45.75000],
            "吉林": [125.35000, 43.88333],
            "湖北": [114.31667, 30.51667],
            "河南": [113.65000, 34.76667],
            "河北": [114.48333, 38.03333],
            "海南": [110.35000, 20.01667],
            "澳门": [113.50000, 22.20000],
            "安徽": [117.17, 31.52],
            "广西壮": [108.19, 22.48],
            "内蒙古": [111.41, 40.48],
            "山东": [117.00, 36.40],
            "台湾": [121.30, 25.03]
        };
    },

    provincePlaceList: [
    // 23省
    { name: '甘肃', geoCoord: [103.73, 36.03] },
    { name: '青海', geoCoord: [101.74, 36.56] },
    { name: '四川', geoCoord: [104.06, 30.67] },
    { name: '河北', geoCoord: [114.48, 38.03] },
    { name: '云南', geoCoord: [102.73, 25.04] },
    { name: '贵州', geoCoord: [106.71, 26.57] },
    { name: '湖北', geoCoord: [114.31, 30.52] },
    { name: '河南', geoCoord: [113.65, 34.76] },
    { name: '山东', geoCoord: [117, 36.65] },
    { name: '江苏', geoCoord: [118.78, 32.04] },
    { name: '安徽', geoCoord: [117.27, 31.86] },
    { name: '浙江', geoCoord: [120.19, 30.26] },
    { name: '江西', geoCoord: [115.89, 28.68] },
    { name: '福建', geoCoord: [119.3, 26.08] },
    { name: '广东', geoCoord: [113.23, 23.16] },
    { name: '湖南', geoCoord: [113, 28.21] },
    { name: '海南', geoCoord: [110.35, 20.02] },
    { name: '辽宁', geoCoord: [123.38, 41.8] },
    { name: '吉林', geoCoord: [125.35, 43.88] },
    { name: '黑龙江', geoCoord: [126.63, 45.75] },
    { name: '山西', geoCoord: [112.53, 37.87] },
    { name: '陕西', geoCoord: [108.95, 34.27] },
    { name: '台湾', geoCoord: [121.30, 25.03] },
    // 4直辖市
    { name: '北京', geoCoord: [116.46, 39.92] },
    { name: '上海', geoCoord: [121.48, 31.22] },
    { name: '重庆', geoCoord: [106.54, 29.59] },
    { name: '天津', geoCoord: [117.2, 39.13] },
    // 5自治区
    { name: '内蒙古', geoCoord: [111.65, 40.82] },
    { name: '广西', geoCoord: [108.33, 22.84] },
    { name: '西藏', geoCoord: [91.11, 29.97] },
    { name: '宁夏', geoCoord: [106.27, 38.47] },
    { name: '新疆', geoCoord: [87.68, 43.77] },
    // 2特别行政区
    { name: '香港', geoCoord: [114.17, 22.28] },
    { name: '澳门', geoCoord: [113.54, 22.19] }
    ],

    //城市列表
    cityPlaceList: [
    { name: '海门', geoCoord: [121.15, 31.89] },
    { name: '鄂尔多斯', geoCoord: [109.781327, 39.608266] },
    { name: '招远', geoCoord: [120.38, 37.35] },
    { name: '舟山', geoCoord: [122.207216, 29.985295] },
    { name: '齐齐哈尔', geoCoord: [123.97, 47.33] },
    { name: '盐城', geoCoord: [120.13, 33.38] },
    { name: '赤峰', geoCoord: [118.87, 42.28] },
    { name: '青岛', geoCoord: [120.33, 36.07] },
    { name: '乳山', geoCoord: [121.52, 36.89] },
    { name: '金昌', geoCoord: [102.188043, 38.520089] },
    { name: '泉州', geoCoord: [118.58, 24.93] },
    { name: '莱西', geoCoord: [120.53, 36.86] },
    { name: '日照', geoCoord: [119.46, 35.42] },
    { name: '胶南', geoCoord: [119.97, 35.88] },
    { name: '南通', geoCoord: [121.05, 32.08] },
    { name: '拉萨', geoCoord: [91.11, 29.97] },
    { name: '云浮', geoCoord: [112.02, 22.93] },
    { name: '梅州', geoCoord: [116.1, 24.55] },
    { name: '文登', geoCoord: [122.05, 37.2] },
    { name: '上海', geoCoord: [121.48, 31.22] },
    { name: '攀枝花', geoCoord: [101.718637, 26.582347] },
    { name: '威海', geoCoord: [122.1, 37.5] },
    { name: '承德', geoCoord: [117.93, 40.97] },
    { name: '厦门', geoCoord: [118.1, 24.46] },
    { name: '汕尾', geoCoord: [115.375279, 22.786211] },
    { name: '潮州', geoCoord: [116.63, 23.68] },
    { name: '丹东', geoCoord: [124.37, 40.13] },
    { name: '太仓', geoCoord: [121.1, 31.45] },
    { name: '曲靖', geoCoord: [103.79, 25.51] },
    { name: '烟台', geoCoord: [121.39, 37.52] },
    { name: '福州', geoCoord: [119.3, 26.08] },
    { name: '瓦房店', geoCoord: [121.979603, 39.627114] },
    { name: '即墨', geoCoord: [120.45, 36.38] },
    { name: '抚顺', geoCoord: [123.97, 41.97] },
    { name: '玉溪', geoCoord: [102.52, 24.35] },
    { name: '张家口', geoCoord: [114.87, 40.82] },
    { name: '阳泉', geoCoord: [113.57, 37.85] },
    { name: '莱州', geoCoord: [119.942327, 37.177017] },
    { name: '湖州', geoCoord: [120.1, 30.86] },
    { name: '汕头', geoCoord: [116.69, 23.39] },
    { name: '昆山', geoCoord: [120.95, 31.39] },
    { name: '宁波', geoCoord: [121.56, 29.86] },
    { name: '湛江', geoCoord: [110.359377, 21.270708] },
    { name: '揭阳', geoCoord: [116.35, 23.55] },
    { name: '荣成', geoCoord: [122.41, 37.16] },
    { name: '连云港', geoCoord: [119.16, 34.59] },
    { name: '葫芦岛', geoCoord: [120.836932, 40.711052] },
    { name: '常熟', geoCoord: [120.74, 31.64] },
    { name: '东莞', geoCoord: [113.75, 23.04] },
    { name: '河源', geoCoord: [114.68, 23.73] },
    { name: '淮安', geoCoord: [119.15, 33.5] },
    { name: '泰州', geoCoord: [119.9, 32.49] },
    { name: '南宁', geoCoord: [108.33, 22.84] },
    { name: '营口', geoCoord: [122.18, 40.65] },
    { name: '惠州', geoCoord: [114.4, 23.09] },
    { name: '江阴', geoCoord: [120.26, 31.91] },
    { name: '蓬莱', geoCoord: [120.75, 37.8] },
    { name: '韶关', geoCoord: [113.62, 24.84] },
    { name: '嘉峪关', geoCoord: [98.289152, 39.77313] },
    { name: '广州', geoCoord: [113.23, 23.16] },
    { name: '延安', geoCoord: [109.47, 36.6] },
    { name: '太原', geoCoord: [112.53, 37.87] },
    { name: '清远', geoCoord: [113.01, 23.7] },
    { name: '中山', geoCoord: [113.38, 22.52] },
    { name: '昆明', geoCoord: [102.73, 25.04] },
    { name: '寿光', geoCoord: [118.73, 36.86] },
    { name: '盘锦', geoCoord: [122.070714, 41.119997] },
    { name: '长治', geoCoord: [113.08, 36.18] },
    { name: '深圳', geoCoord: [114.07, 22.62] },
    { name: '珠海', geoCoord: [113.52, 22.3] },
    { name: '宿迁', geoCoord: [118.3, 33.96] },
    { name: '咸阳', geoCoord: [108.72, 34.36] },
    { name: '铜川', geoCoord: [109.11, 35.09] },
    { name: '平度', geoCoord: [119.97, 36.77] },
    { name: '佛山', geoCoord: [113.11, 23.05] },
    { name: '海口', geoCoord: [110.35, 20.02] },
    { name: '江门', geoCoord: [113.06, 22.61] },
    { name: '章丘', geoCoord: [117.53, 36.72] },
    { name: '肇庆', geoCoord: [112.44, 23.05] },
    { name: '大连', geoCoord: [121.62, 38.92] },
    { name: '临汾', geoCoord: [111.5, 36.08] },
    { name: '吴江', geoCoord: [120.63, 31.16] },
    { name: '石嘴山', geoCoord: [106.39, 39.04] },
    { name: '沈阳', geoCoord: [123.38, 41.8] },
    { name: '苏州', geoCoord: [120.62, 31.32] },
    { name: '茂名', geoCoord: [110.88, 21.68] },
    { name: '嘉兴', geoCoord: [120.76, 30.77] },
    { name: '长春', geoCoord: [125.35, 43.88] },
    { name: '胶州', geoCoord: [120.03336, 36.264622] },
    { name: '银川', geoCoord: [106.27, 38.47] },
    { name: '张家港', geoCoord: [120.555821, 31.875428] },
    { name: '三门峡', geoCoord: [111.19, 34.76] },
    { name: '锦州', geoCoord: [121.15, 41.13] },
    { name: '南昌', geoCoord: [115.89, 28.68] },
    { name: '柳州', geoCoord: [109.4, 24.33] },
    { name: '三亚', geoCoord: [109.511909, 18.252847] },
    { name: '自贡', geoCoord: [104.778442, 29.33903] },
    { name: '吉林', geoCoord: [126.57, 43.87] },
    { name: '阳江', geoCoord: [111.95, 21.85] },
    { name: '泸州', geoCoord: [105.39, 28.91] },
    { name: '西宁', geoCoord: [101.74, 36.56] },
    { name: '宜宾', geoCoord: [104.56, 29.77] },
    { name: '呼和浩特', geoCoord: [111.65, 40.82] },
    { name: '成都', geoCoord: [104.06, 30.67] },
    { name: '大同', geoCoord: [113.3, 40.12] },
    { name: '镇江', geoCoord: [119.44, 32.2] },
    { name: '桂林', geoCoord: [110.28, 25.29] },
    { name: '张家界', geoCoord: [110.479191, 29.117096] },
    { name: '宜兴', geoCoord: [119.82, 31.36] },
    { name: '北海', geoCoord: [109.12, 21.49] },
    { name: '西安', geoCoord: [108.95, 34.27] },
    { name: '金坛', geoCoord: [119.56, 31.74] },
    { name: '东营', geoCoord: [118.49, 37.46] },
    { name: '牡丹江', geoCoord: [129.58, 44.6] },
    { name: '遵义', geoCoord: [106.9, 27.7] },
    { name: '绍兴', geoCoord: [120.58, 30.01] },
    { name: '扬州', geoCoord: [119.42, 32.39] },
    { name: '常州', geoCoord: [119.95, 31.79] },
    { name: '潍坊', geoCoord: [119.1, 36.62] },
    { name: '重庆', geoCoord: [106.54, 29.59] },
    { name: '台州', geoCoord: [121.420757, 28.656386] },
    { name: '南京', geoCoord: [118.78, 32.04] },
    { name: '滨州', geoCoord: [118.03, 37.36] },
    { name: '贵阳', geoCoord: [106.71, 26.57] },
    { name: '无锡', geoCoord: [120.29, 31.59] },
    { name: '本溪', geoCoord: [123.73, 41.3] },
    { name: '克拉玛依', geoCoord: [84.77, 45.59] },
    { name: '渭南', geoCoord: [109.5, 34.52] },
    { name: '马鞍山', geoCoord: [118.48, 31.56] },
    { name: '宝鸡', geoCoord: [107.15, 34.38] },
    { name: '焦作', geoCoord: [113.21, 35.24] },
    { name: '句容', geoCoord: [119.16, 31.95] },
    { name: '北京', geoCoord: [116.46, 39.92] },
    { name: '徐州', geoCoord: [117.2, 34.26] },
    { name: '衡水', geoCoord: [115.72, 37.72] },
    { name: '包头', geoCoord: [110, 40.58] },
    { name: '绵阳', geoCoord: [104.73, 31.48] },
    { name: '乌鲁木齐', geoCoord: [87.68, 43.77] },
    { name: '枣庄', geoCoord: [117.57, 34.86] },
    { name: '杭州', geoCoord: [120.19, 30.26] },
    { name: '淄博', geoCoord: [118.05, 36.78] },
    { name: '鞍山', geoCoord: [122.85, 41.12] },
    { name: '溧阳', geoCoord: [119.48, 31.43] },
    { name: '库尔勒', geoCoord: [86.06, 41.68] },
    { name: '安阳', geoCoord: [114.35, 36.1] },
    { name: '开封', geoCoord: [114.35, 34.79] },
    { name: '济南', geoCoord: [117, 36.65] },
    { name: '德阳', geoCoord: [104.37, 31.13] },
    { name: '温州', geoCoord: [120.65, 28.01] },
    { name: '九江', geoCoord: [115.97, 29.71] },
    { name: '邯郸', geoCoord: [114.47, 36.6] },
    { name: '临安', geoCoord: [119.72, 30.23] },
    { name: '兰州', geoCoord: [103.73, 36.03] },
    { name: '沧州', geoCoord: [116.83, 38.33] },
    { name: '临沂', geoCoord: [118.35, 35.05] },
    { name: '南充', geoCoord: [106.110698, 30.837793] },
    { name: '天津', geoCoord: [117.2, 39.13] },
    { name: '富阳', geoCoord: [119.95, 30.07] },
    { name: '泰安', geoCoord: [117.13, 36.18] },
    { name: '诸暨', geoCoord: [120.23, 29.71] },
    { name: '郑州', geoCoord: [113.65, 34.76] },
    { name: '哈尔滨', geoCoord: [126.63, 45.75] },
    { name: '聊城', geoCoord: [115.97, 36.45] },
    { name: '芜湖', geoCoord: [118.38, 31.33] },
    { name: '唐山', geoCoord: [118.02, 39.63] },
    { name: '平顶山', geoCoord: [113.29, 33.75] },
    { name: '邢台', geoCoord: [114.48, 37.05] },
    { name: '德州', geoCoord: [116.29, 37.45] },
    { name: '济宁', geoCoord: [116.59, 35.38] },
    { name: '荆州', geoCoord: [112.239741, 30.335165] },
    { name: '宜昌', geoCoord: [111.3, 30.7] },
    { name: '义乌', geoCoord: [120.06, 29.32] },
    { name: '丽水', geoCoord: [119.92, 28.45] },
    { name: '洛阳', geoCoord: [112.44, 34.7] },
    { name: '秦皇岛', geoCoord: [119.57, 39.95] },
    { name: '株洲', geoCoord: [113.16, 27.83] },
    { name: '石家庄', geoCoord: [114.48, 38.03] },
    { name: '莱芜', geoCoord: [117.67, 36.19] },
    { name: '常德', geoCoord: [111.69, 29.05] },
    { name: '保定', geoCoord: [115.48, 38.85] },
    { name: '湘潭', geoCoord: [112.91, 27.87] },
    { name: '金华', geoCoord: [119.64, 29.12] },
    { name: '岳阳', geoCoord: [113.09, 29.37] },
    { name: '长沙', geoCoord: [113, 28.21] },
    { name: '衢州', geoCoord: [118.88, 28.97] },
    { name: '廊坊', geoCoord: [116.7, 39.53] },
    { name: '菏泽', geoCoord: [115.480656, 35.23375] },
    { name: '合肥', geoCoord: [117.27, 31.86] },
    { name: '武汉', geoCoord: [114.31, 30.52] },
    { name: '大庆', geoCoord: [125.03, 46.58] },
    { name: '三明', geoCoord: [117.36, 26.13] },
    { name: '上饶', geoCoord: [118.25, 28.68] },
    { name: '乌兰察布', geoCoord: [102.08, 28.28] },
    { name: '保山', geoCoord: [99.10, 25.08] },
    { name: '六安', geoCoord: [116.50054, 31.74703] },
    { name: '六盘水', geoCoord: [104.82, 26.58] },
    { name: '内江', geoCoord: [105.04, 29.59] },
    { name: '凉山彝族自治州', geoCoord: [102.2655, 27.8922] },
    { name: '南阳', geoCoord: [112.21, 34.40] },

    { name: '吕梁', geoCoord: [111.12, 38.47] },
    { name: '咸宁', geoCoord: [114.28, 29.87] },
    { name: '商洛', geoCoord: [110.13, 34.08] },
    { name: '四平', geoCoord: [124.22, 43.09] },
    { name: '塔城地区', geoCoord: [87.01, 44.25] },
    { name: '大理白族自治州', geoCoord: [100.05, 25.01] },
    { name: '娄底', geoCoord: [111.95, 25.60] },
    { name: '宁德', geoCoord: [119.39, 25.73] },
    { name: '安庆', geoCoord: [117.03, 30.52] },
    { name: '安顺', geoCoord: [105.55, 26.14] },
    { name: '宜春', geoCoord: [114.38, 27.81] },
    { name: '崇左', geoCoord: [107.37, 22.42] },
    { name: '巴中', geoCoord: [106.21, 31.15] },
    { name: '巴彦淖尔', geoCoord: [107.23, 40.45] },
    { name: '广元', geoCoord: [105.59, 32.30] },
    { name: '广安', geoCoord: [106.4, 30.48] },
    { name: '张掖', geoCoord: [100.46, 38.93] },
    { name: '忻州', geoCoord: [112.95, 39.07] },
    { name: '怀化', geoCoord: [109.95, 27.52] },
    { name: '抚州', geoCoord: [116.34, 28.00] },
    { name: '文山壮族苗族自治州', geoCoord: [103.52, 22.50] },
    { name: '昌吉回族自治州', geoCoord: [87.31, 44.05] },
    { name: '昌都地区', geoCoord: [96.6, 31.22] },
    { name: '昭通', geoCoord: [103.70, 29.32] },
    { name: '晋中', geoCoord: [113.57, 37.33] },
    { name: '朔州', geoCoord: [112.82, 39.52] },
    { name: '来宾', geoCoord: [109.24, 23.76] },
    { name: '楚雄彝族自治州', geoCoord: [101.54, 25.01] },
    { name: '毕节地区', geoCoord: [105.29, 27.32] },
    { name: '永安', geoCoord: [117.37, 25.97] },
    { name: '永州', geoCoord: [111.63, 26.22] },
    { name: '河池', geoCoord: [108.06, 24.70] },
    { name: '漳州', geoCoord: [117.35, 24.52] },
    { name: '玉林', geoCoord: [110.14, 22.64] },
    { name: '甘孜藏族自治州', geoCoord: [101.37, 28.22] },
    { name: '百色', geoCoord: [106.62, 23.91] },
    { name: '红河哈尼族彝族自治州', geoCoord: [102.4, 23.0] },
     { name: '萍乡', geoCoord: [113.85, 27.6] },
    { name: '蚌埠', geoCoord: [117.34, 32.93] },
    { name: '衡阳', geoCoord: [112.61, 26.89] },
    { name: '贵港', geoCoord: [110.08, 23.4] },
     { name: '贺州', geoCoord: [110.8, 24.17] },
    { name: '资阳', geoCoord: [104.60, 30.19] },
    { name: '赣州', geoCoord: [114.92, 25.85] },
    { name: '达州', geoCoord: [107.49, 31.23] },
     { name: '运城', geoCoord: [110.97, 35.03] },
    { name: '遂宁', geoCoord: [105.58, 30.52] },
    { name: '邵阳', geoCoord: [111.5, 27.22] },
    { name: '都匀', geoCoord: [107.53, 26.72] },
     { name: '钦州', geoCoord: [108.61, 21.96] },
    { name: '阜阳', geoCoord: [115.81, 32.89] },
    { name: '防城港', geoCoord: [108.20, 21.37] },
    { name: '雅安', geoCoord: [102.97, 29.97] },
      { name: '鹰潭', geoCoord: [117.02, 28.23] },
    { name: '黄冈', geoCoord: [114.87, 30.44] },
     { name: '黄石', geoCoord: [115.09, 30.2] },
    { name: '黔南布依族苗族自治州', geoCoord: [107.51, 26.26] },
    { name: '龙岩', geoCoord: [117.01, 25.12] },
    { name: '乐山', geoCoord: [103.77, 29.57] },
    ],

    //获取市对应的经纬度
    cityGeoCoord: function (city) {
        var geo = this.cityPlaceList.find(function (model) { return model.name === city });
        if (geo) {
            return geo.geoCoord;
        }
    },
    //获取省对应的经纬度
    provinceGeoCoord: function (province) {
        var geo = this.provincePlaceList.find(function (model) { return model.name === province });
        if (geo) {
            return geo.geoCoord;
        }
    },

    //随机生成一个市经纬度
    randomCityGeoCoord: function () {
        var index = utils.getRandomNum(0, this.cityPlaceList.length);
        var map = this.cityPlaceList[index];
        return map == undefined ? [113.75, 23.04] : map.geoCoord;//default 东莞
    },
    //随机生成一个省经纬度
    randomProvinceGeoCoord: function () {
        var index = utils.getRandomNum(0, this.provincePlaceList.length);
        var map = this.provincePlaceList[index];
        return map == undefined ? [113.23, 23.16] : map.geoCoord;//default 广东
    }
};

/*
 * 包含一系列的echart实例
*/

chartHelper.instances = {};
//一些枚举的颜色
chartHelper.colorEnum = {
    blue: "#00ccff",
    green: "#13d946",
    yellow: "#fee559",
    red: "#f84c4c"
};
//获取一个冒泡实例
chartHelper.getMakePointModel = function () {
    return {
        symbol: 'emptyCircle',
        symbolSize: 10,
        effect: {
            show: true,
            shadowBlur: 0,
            type: 'scale',
            shadowColor: chartHelper.colorEnum.yellow,
            shadowBlur: 5,
            period: 8
        },
        itemStyle: {
            normal: {
                label: { show: false }
            },
            emphasis: {
                label: { position: null }
            },
            borderColor: "#ff7f50"
        },
        data: []
    }
};

//主屏：地图
chartHelper.instances.m_Map = {
    config: {
        dom: document.getElementById('mainChina'),
        type: ecHelper.type.map,
    },

    //option
    option: {
        legend: {
            x: 40,
            y: 60,
            data: [
                { name: "实时注册", textStyle: { color: chartHelper.colorEnum.green }, icon: "image://../../Build/tuandai/v2/img/legendgreen.png" }, "",
                { name: "实时投资", textStyle: { color: chartHelper.colorEnum.red }, icon: "image://../../Build/tuandai/v2/img/legendred.png" }, "",
                { name: "实时充值", textStyle: { color: chartHelper.colorEnum.yellow }, icon: "image://../../Build/tuandai/v2/img/legendyellow.png" }, "",
            ],
            selectedMode: false,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        dataRange: {
            show: true,
            min: 100,
            max: 50000,
            x: 40,
            y: 'bottom',
            text: ['>=5万', '100 '],
            textStyle: {
                color: '#FFF'
            }
        },
        series: [
            {
                name: '实时注册',
                type: 'map',
                mapType: 'china',
                roam: false,
                hoverable: false,
                showLegendSymbol: false,
                data: [],
                itemStyle: {
                    normal: {
                        label: { show: true },
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: ''
                        }
                    },
                    emphasis: { label: { show: true } }
                },
                geoCoord: chartHelper.Areamap.getGeoCoord(),
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        type: 'scale',
                        shadowColor: chartHelper.colorEnum.green,
                        shadowBlur: 5,
                        period: 8
                    },
                    itemStyle: {
                        normal: {
                            label: { show: false }
                        },
                        emphasis: {
                            label: { position: null }
                        },
                        borderColor: "#ff7f50"
                    },
                    data: [
                    { name: '上海', value: 1 },
                    { name: '北京', value: 1 },
                    { name: '广东', value: 1 },
                    { name: '山西', value: 1 },
                    ]
                },
            },
            {
                name: '实时投资',
                type: 'map',
                mapType: 'china',
                roam: false,
                hoverable: false,
                showLegendSymbol: false,
                data: [],
                itemStyle: {
                    normal: {
                        label: { show: true },
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: ''
                        }
                    },
                    emphasis: { label: { show: true } }
                },
                markLine: {//资金流标线
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 30,
                        color: 'red',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10,
                                color: 'red'
                            },
                            label: {
                                show: false
                            },
                        }
                    },
                    data: [
                        [{ name: '北京', smoothness: 0.4 }, { name: '广东', value: 95 }],
                        [{ name: '湖南', smoothness: 0.4 }, { name: '河南', value: 10 }],
                    ]
                },
                geoCoord: chartHelper.Areamap.getGeoCoord(),
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        type: 'scale',
                        shadowColor: chartHelper.colorEnum.red,
                        shadowBlur: 5,
                        period: 8
                    },
                    itemStyle: {
                        normal: {
                            label: { show: false }
                        },
                        emphasis: {
                            label: { position: null }
                        },
                        borderColor: "#ff7f50"
                    },
                    data: [
                    { name: '广东', value: 1 },
                    { name: '四川', value: 1 },
                    ]
                },
            },
            {
                name: '实时充值',
                type: 'map',
                mapType: 'china',
                roam: false,
                hoverable: false,
                showLegendSymbol: false,
                data: [],
                itemStyle: {
                    normal: {
                        label: { show: true },
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: ''
                        }
                    },
                    emphasis: { label: { show: true } }
                },
                geoCoord: chartHelper.Areamap.getGeoCoord(),
                markPoint: {
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    effect: {
                        show: true,
                        shadowBlur: 0,
                        type: 'scale',
                        shadowColor: chartHelper.colorEnum.yellow,
                        shadowBlur: 5,
                        period: 8
                    },
                    itemStyle: {
                        normal: {
                            label: { show: false }
                        },
                        emphasis: {
                            label: { position: null }
                        },
                        borderColor: "#ff7f50"
                    },
                    data: [
                    { name: '四川', value: 1 },
                    ]
                },
            },
        ]
    },

    //初始化实例
    init: function () {
        ecHelper.init(this.config.dom, this.config.type, this.option);
    },


    isSync: false,
    //更新地图背景
    updateMap: function (data) {
        if (this.isSync) return;
        this.isSync = true;

        var maps = data.map(function (model) {
            return { name: model.AreaName, value: model.Numbers };
        });
        this.option.series[0].data = maps;//绑定数据到第一个
        //更新地图
        this.init();
    },
    //更新冒泡、流向
    updateBubbleFlow: function (model) {
        //注册
        var user = model.UserBubble;
        if (user) {
            var userMaps = user.map(function (province) {
                return { name: province, value: 1 };
            });
            this.option.series[0].markPoint.data = userMaps;
        }

        //投资
        var investment = model.InvestmentBubble;
        if (investment) {
            var investmentMaps = investment.map(function (province) {
                return { name: province, value: 1 };
            });
            this.option.series[1].markPoint.data = investmentMaps;
        }

        //充值
        var recharge = model.RechargeBubble;
        if (recharge) {
            var rechargeMaps = recharge.map(function (province) {
                return { name: province, value: 1 };
            });
            this.option.series[2].markPoint.data = rechargeMaps;
        }

        //投资轨迹
        var capitalFlows = model.CapitalFlows;
        if (capitalFlows) {
            var _capitalFlows = capitalFlows.map(function (item) {
                return [{ name: item.OutProvince, smoothness: 0.4 }, { name: item.InProvince, value: 1 }];
            });
            this.option.series[1].markLine.data = _capitalFlows;
        }

        this.init();
    }
};
//主屏：交易趋势线
chartHelper.instances.m_InvestmentLine = {
    config: {
        dom: document.getElementById('boardTradeLine'),
        type: ecHelper.type.line,
    },
    //初始化实例
    init: function () {
        ecHelper.init(this.config.dom, this.config.type, this.option);
    },

    //option
    option: {
        calculable: true,
        textStyle: {
            color: '#FFF'
        },
        grid: {
            x:30,
            y:10,
            x2:30,
            y2:20,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            //x: '100%',
            //y: '100%',
        },
        xAxis: [
            {
                splitLine: {
                    show: false
                },
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#FFF'
                    }
                },
                data: ['2016-09','2016-10','2016-11','2016-12','2017-01','2017-02']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#205492',
                        width: 1
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#FFF'
                    }
                }
            },{
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#205492',
                        width: 1
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#FFF'
                    }
                }

            }
        ],
        series: [
            {
                itemStyle: {
                    normal: {
                        color: '#FECB33'
                    }
                },
                type: 'line',
                data: [33, 34, 41, 60, 49, 20]
            },
            {
                itemStyle: {
                    normal: {
                        color: '#35A3FA'
                    }
                },
                type: 'line',
                data: [91, 14, 5, 18, 62, 11],
                yAxisIndex: 1
            }
        ]
    },
    //更新数据
    update: function (data) {
        var names = [];
        var amountsTrend = [];
        var numbersTrend = [];
        data.forEach(function (model) {
            names.push(model.Month);
            amountsTrend.push(model.Amount);
            numbersTrend.push(model.Numbers);
        });
        this.option.xAxis[0].data = names;
        this.option.series[0].data = amountsTrend;
        this.option.series[1].data = numbersTrend;

        this.init();
    }
};
//主屏：标分布饼图
chartHelper.instances.m_ProjectPie = {
    config: {
        dom: document.getElementById('boardBidRate'),
        type: ecHelper.type.pie,
    },
    //初始化实例
    init: function () {
        ecHelper.init(this.config.dom, this.config.type, this.option);
    },
    //
    option: {
        legend: {
            x: 'center',
            y: 'bottom',
            //data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            data: []
        },
        //calculable: true,
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [23, 73],
                center: ['50%', '49.5%'],
                roseType: 'area',
                itemStyle: {
                    normal: {
                        label: {
                            normal: {
                                formatter: '{a}{b}%'
                            }
                        },
                    },
                },
                x: '50%',
                max: 40,
                sort: 'ascending',
                data: [
                    { value: 10, name: '分期宝' },
                    { value: 5, name: '小微企业' },
                    { value: 15, name: '债权转让' },
                    { value: 25, name: '资产标' }
                ]
            }
        ]
    },
    //更新图表
    update: function (data) {
        var maps = data.map(function (model) {
            return { name: model.Description, value: model.Amount };
        });
        this.option.series[0].data = maps;
        this.init();
    }

};
//主屏：反欺诈条形图
chartHelper.instances.m_AntiFraudBar = {
    config: {
        dom: document.getElementById('boardCheatResult'),
        type: ecHelper.type.bar,
    },
    //初始化实例
    init: function () {
        ecHelper.init(this.config.dom, this.config.type, this.option);
    },
    //
    option: {
        textStyle: {
            color: '#FFF'
        },
        grid: {
            x:40,
            y:33,
            x2:20,
            y2:30,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)'
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#FFF'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#205492',
                    width: 1
                }
            },
            data: ['01-15', '01-16', '01-17', '01-18', '01-19']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#FFF'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#205492',
                    width: 1
                }
            }
        },
        series: [
            {
                name: '通过',
                type: 'bar',
                barWidth: 25,
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
                data: [120, 132, 101, 134, 90]
            },
            {
                name: '拒绝',
                type: 'bar',
                barWidth: 25,
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
                data: [220, 182, 191, 234, 290]
            }
        ]
    },

    //更新图表
    update: function (data) {
        //拒绝
        var refuses = [];
        //通过
        var passs = [];
        var xAxisCatagory = [];
        data.forEach(function (model) {
            xAxisCatagory.push(model.Date);
            refuses.push(model.RefuseNumbers);
            passs.push(model.PassNumbers);
        });
        this.option.series[0].data = passs;
        this.option.series[1].data = refuses;
        this.option.xAxis.data = xAxisCatagory;

        this.init();
    }
};
//主屏：反欺诈饼图
chartHelper.instances.m_AntiFraudPie = {

};

//辅屏(左上角)：房、车贷地图
chartHelper.instances.a_Map = {
    config: {
        dom: document.getElementById('serviceArea'),
        type: ecHelper.type.map,
    },
    //初始化实例
    init: function () {
        ecHelper.init(this.config.dom, this.config.type, this.option);
    },

    option: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: [
            'rgba(255, 5, 3, 0.8)',
            'rgba(18, 195, 18, 0.8)'
        ],
        legend: {
            orient: 'vertical',
            x: 70,
            y: 330,
            data: ['车贷', '房贷'],
            textStyle: {
                color: '#fff'
            }
        },
        //dataRange: {
        //    min: 0,
        //    max: 100,
        //    x: 'left',
        //    y: 'bottom',
        //    text: ['高', '低'],           // 文本，默认为数值文本
        //    calculable: true
        //},
        series: [
            {
                name: '房贷',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 1.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        },
                        //label: { show: true }
                    }
                },
                data: [],
                markPoint: {
                    symbolSize: 2,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: [],
                }
            },
            {
                name: '车贷',
                type: 'map',
                mapType: 'china',
                data: [],
                markPoint: {
                    symbolSize: 3,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: [],
                }
            },
        ]
    },
    update: function (data) {
        var cars = [];
        var houses = [];
        var hcMaps = data.map(function (model) {
            //转换地区到经纬度
            var markdatas = [];
            model.Items.forEach(function (vo) {
                var geo = chartHelper.Areamap.cityGeoCoord(vo.Name);
                if (!geo) {//缺失，随机补充一个
                    geo = chartHelper.Areamap.randomCityGeoCoord();
                }
                if (vo.Count > 1) {
                    for (var i = 0; i < vo.Count ; i++) {
                        var longitudeOffset = utils.forDight(Math.random(), 3);
                        var latitudeOffset = utils.forDight(Math.random(), 3);
                        //data.push([geo[0] + longitudeOffset, geo[1] + latitudeOffset]);
                        markdatas.push({ value: 15, geoCoord: [geo[0] + longitudeOffset, geo[1] + latitudeOffset] });
                    }
                } else {
                    markdatas.push({ value: 15, geoCoord: geo });
                }
            });
            if (model.Type === '房贷') {
                houses = markdatas;
            } else {
                cars = markdatas;
            }
        });
        this.option.series[0].markPoint.data = houses;
        this.option.series[1].markPoint.data = cars;

        this.init();
    }
};
