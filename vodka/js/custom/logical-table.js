/**
 * Created by lenn on 16/8/31.
 */

var custom_logical_table = {
    /**
     *  'I01', // 固定天窗
     *  'I02', // 电动天窗
     *  'J01', // 人造革车顶(无造型)
     *  ['J02', 'J03', 'J04'], // 暖阳, 印月, 蓝天
     *  ['T01', 'T02'], // 普通翻毛皮内饰, Alcantara面料车顶
     */
    '+I01': {'plus': [], 'minus':['I02']},
    '-I01': {'plus': ['I02', 'J02|J03|J04'], 'minus':['J01']},
    '+I02': {'plus': ['J02|J03|J04'], 'minus': ['I01', 'J01']},
    '-I02': {'plus': ['I01'], 'minus': []},
    '+J01': {'plus': ['I01'], 'minus': ['I02', 'J02|J03|J04', 'T01|T02']},
    // '-J01': {'disabled': true},
    '-J01': {'plus': ['J02|J03|J04'], 'minus': []},
    '+J02': {'plus': [], 'minus': ['J01|J03|J04']},
    // '-J02': {'disabled': true},
    '-J02': [
        {'plus': ['J03|J04'], 'minus': []},
        {'plus': ['J01', 'I01'], 'minus': ['I02', 'T01|T02']},
    ],
    '+J03': {'plus': [], 'minus': ['J01|J02|J04']},
    // '-J03': {'disabled': true},
    '-J03': [
        {'plus': ['J02|J04'], 'minus': []},
        {'plus': ['J01', 'I01'], 'minus': ['I02', 'T01|T02']},
    ],
    '+J04': {'plus': [], 'minus': ['J01|J02|J03']},
    // '-J04': {'disabled': true},
    '-J04': [
        {'plus': ['J02|J03'], 'minus': []},
        {'plus': ['J01', 'I01'], 'minus': ['I02', 'T01|T02']},
    ],
    '+T01': {'plus': ['J02|J03|J04'], 'minus': ['T02', 'J01']},
    // '-T01': {'plus': [], 'minus': []},
    '+T02': {'plus': ['J02|J03|J04'], 'minus': ['T01', 'J01']},
    // '-T02': {'plus': [], 'minus': []},
    /**
     *  'Q01', // 标配窗帘
     *  ['Q02', 'Q03', 'Q04', 'Q05'], // 手动窗帘(上下拉), 手动窗帘(左右拉), 电动窗帘(上下拉), 电动窗帘(左右拉)
     *  'L01', // 标配塑料窗框内饰
     *  'L02', // 窗帘盒造型
     *  'K01', // 标配侧墙板
     *  ['K02', 'K03'], // 菱形格子造型, 竖条纹造型
     *  'H01', // 手动滑移门
     *  'H02', // 电动滑移门
     *  'P08', // 乘客位茶杯架
     *  'P09', // 乘客位带USB接口的充电插座
     */
    '+Q01': {'plus': ['L01', 'K01', 'H01'], 'minus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03', 'H02', 'P08|P09']},
    '-Q01': {'plus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03'], 'minus': ['L01', 'K01']},
    '+Q02': {'plus': ['L02', 'K02|K03'], 'minus': ['Q01|Q03|Q04|Q05', 'L01', 'K01']},
    // '-Q02': {'disabled': true},
    '-Q02': [
        {'plus': ['Q03|Q04|Q05'], 'minus': []},
        {'plus': ['Q01', 'L01', 'K01'], 'minus': ['L02', 'K02|K03', 'H02', 'P08', 'P09']}
    ],
    '+Q03': {'plus': ['L02', 'K02|K03'], 'minus': ['Q01|Q02|Q04|Q05', 'L01', 'K01']},
    // '-Q03': {'disabled': true},
    '-Q03': [
        {'plus': ['Q02|Q04|Q05'], 'minus': []},
        {'plus': ['Q01', 'L01', 'K01'], 'minus': ['L02', 'K02|K03', 'H02', 'P08', 'P09']}
    ],
    '+Q04': {'plus': ['L02', 'K02|K03'], 'minus': ['Q01|Q02|Q03|Q05', 'L01', 'K01']},
    // '-Q04': {'disabled': true},
    '-Q04': [
        {'plus': ['Q02|Q03|Q05'], 'minus': []},
        {'plus': ['Q01', 'L01', 'K01'], 'minus': ['L02', 'K02|K03', 'H02', 'P08', 'P09']}
    ],
    '+Q05': {'plus': ['L02', 'K02|K03'], 'minus': ['Q01|Q02|Q03|Q04', 'L01', 'K01']},
    // '-Q05': {'disabled': true},
    '-Q05': [
        {'plus': ['Q02|Q03|Q04'], 'minus': []},
        {'plus': ['Q01', 'L01', 'K01'], 'minus': ['L02', 'K02|K03', 'H02', 'P08', 'P09']}
    ],
    '+L01': {'plus': ['Q01', 'K01', 'H01'], 'minus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03', 'H02', 'P08|P09']},
    '-L01': {'plus': ['L02', 'Q02|Q03|Q04|Q05', 'K02|K03'], 'minus': ['Q01', 'K01']},
    '+L02': {'plus': ['Q02|Q03|Q04|Q05', 'K02|K03'], 'minus': ['Q01', 'L01', 'K01']},
    '-L02': {'plus': ['Q01', 'L01', 'K01', 'H01'], 'minus': ['Q02|Q03|Q04|Q05', 'K02|K03', 'H02', 'P08|P09']},
    '+K01': {'plus': ['Q01', 'L01', 'H01'], 'minus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03', 'H02', 'P08|P09']},
    '-K01': {'plus': ['L02', 'Q02|Q03|Q04|Q05', 'K02|K03'], 'minus': ['Q01', 'L01']},
    '+K02': {'plus': ['Q02|Q03|Q04|Q05', 'L02'], 'minus': ['K01|K03', 'Q01', 'L01']},
    // '-K02': {'disabled': true},
    '-K02': [
        {'plus': ['K03'], 'minus': []},
        {'plus': ['K01', 'Q01', 'L01'], 'minus': ['Q02|Q03|Q04|Q05', 'L02', 'H02', 'P08', 'P09']}
    ],
    '+K03': {'plus': ['Q02|Q03|Q04|Q05', 'L02'], 'minus': ['K01|K02', 'Q01', 'L01']},
    // '-K03': {'disabled': true},
    '-K03': [
        {'plus': ['K02'], 'minus': []},
        {'plus': ['K01', 'Q01', 'L01'], 'minus': ['Q02|Q03|Q04|Q05', 'L02', 'H02', 'P08', 'P09']}
    ],
    '+H01': {'plus': [], 'minus': ['H02']},
    '-H01': {'plus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03', 'H02'], 'minus': ['Q01', 'L01', 'K01']},
    '+H02': {'plus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03'], 'minus': ['Q01', 'L01', 'K01', 'H01']},
    '-H02': {'plus': ['H01'], 'minus': []},
    '+P08': {'plus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03'], 'minus': ['Q01', 'L01', 'K01']},
    // '-P08': {'plus': [], 'minus': []},
    '+P09': {'plus': ['Q02|Q03|Q04|Q05', 'L02', 'K02|K03'], 'minus': ['Q01', 'L01', 'K01']},
    // '-P09': {'plus': [], 'minus': []},
    /**
     *  'M01', // 人造地板革
     *  ['M02', 'M03', 'M04'], // 单层地毯, 双层进口地毯, 驾驶舱全包围地毯
     *  ['V01', 'V02'] // 复合地板, 游艇级柚木地板
     *  'AF01', // 快捷地毯(可拆洗)
     */
    '+M01': {'plus': [], 'minus': ['M02|M03|M04', 'V01|V02', 'AF01']},
    '-M01': [
        {'plus': ['M02|M03|M04'], 'minus': ['V01|V02']},
        {'plus': ['V01|V02'], 'minus': ['M02|M03|M04', 'AF01']}
    ],
    '+M02': {'plus': [], 'minus': ['M01', 'M03|M04', 'V01|V02']},
    // '-M02': {'disabled': true},
    '-M02': [
        {'plus': ['M03|M04'], 'minus': []},
        {'plus': ['M01'], 'minus': ['AF01']},
        {'plus': ['V01|V02'], 'minus': ['AF01']},
    ],
    '+M03': {'plus': [], 'minus': ['M01', 'M02|M04', 'V01|V02']},
    // '-M03': {'disabled': true},
    '-M03': [
        {'plus': ['M02|M04'], 'minus': []},
        {'plus': ['M01'], 'minus': ['AF01']},
        {'plus': ['V01|V02'], 'minus': ['AF01']},
    ],
    '+M04': {'plus': [], 'minus': ['M01', 'M02|M03', 'V01|V02']},
    // '-M04': {'disabled': true},
    '-M04': [
        {'plus': ['M02|M04'], 'minus': []},
        {'plus': ['M01'], 'minus': ['AF01']},
        {'plus': ['V01|V02'], 'minus': ['AF01']},
    ],
    '+V01': {'plus': [], 'minus': ['M01', 'M02|M03|M04', 'V02', 'AF01']},
    // '-V01': {'disabled': true},
    '-V01': [
        {'plus': ['V02'], 'minus': []},
        {'plus': ['M01'], 'minus': ['AF01']},
        {'plus': ['M02|M03|M04'], 'minus': []},
    ],
    '+V02': {'plus': [], 'minus': ['M01', 'M02|M03|M04', 'V01', 'AF01']},
    // '-V02': {'disabled': true},
    '-V02': [
        {'plus': ['V01'], 'minus': []},
        {'plus': ['M01'], 'minus': ['AF01']},
        {'plus': ['M02|M03|M04'], 'minus': []},
    ],

    '+AF01': {'plus': ['M02|M03|M04'], 'minus': ['M01', 'V01|V02']},
    /**
     *  ['U01', 'U02'], // 人造桃木内饰组件, 胡桃木内饰组件
     *  'P03': 首长办公桌
     *  'P04': 秘书办公桌
     */
    //
    '+U01': {'plus': ['P03|P04'], 'minus': ['U02']},
    '-U01': {'plus': [], 'minus': ['P03', 'P04']},
    '+U02': {'plus': ['P03|P04'], 'minus': ['U01']},
    '-U02': {'plus': [], 'minus': ['P03', 'P04']},
    '-P03': {'plus': [], 'minus': ['U01|U02']},
    '-P04': {'plus': [], 'minus': ['U01|U02']},
    // P03, P04 默认
    /**
     * ['AE01', 'AE02']: 带长江logo雨伞, 客户定制logo雨伞
     * AE03: 雨伞架
     */
    '+AE01': {'plus': ['AE03'], 'minus': ['AE02']},
    // '-AE01': {'plus': [], 'minus': ['']},
    '+AE02': {'plus': ['AE03'], 'minus': ['AE01']},
    // '-AE02': {'plus': [], 'minus': []},
    // '+AE03': {'plus': [], 'minus': []},
    '-AE03': {'plus': [], 'minus': ['AE01|AE02']},

    /**
     * 'B01': 轮毂罩
     * ['B02', 'B03']: 长江logo轮毂标, 定制轮毂中心标
     */
    // '+B01': {'plus': [], 'minus': []},
    '-B01': {'plus': [], 'minus': ['B02|B03']},
    '+B02': {'plus': ['B01'], 'minus': ['B03']},
    //'-B02': {'plus': [], 'minus': []},
    '+B03': {'plus': ['B01'], 'minus': ['B02']},
    //'-B02': {'plus': [], 'minus': []},

    /**
     * 'Y01': 标配音响
     * 'Y02': boss高端环绕声音响系统
     */
    '+Y01': {'plus': [], 'minus': ['Y02']},
    // '-Y01': {'disabled': true},
    '-Y01': {'plus': ['Y02'], 'minus': []},
    '+Y02': {'plus': [], 'minus': ['Y01']},
    '-Y02': {'plus': ['Y01'], 'minus': []},

    /**
     * 'P00': 灭火器2个
     * 'P01': 灭火器4个
     */
    '+P00': {'plus': [], 'minus': ['P01']},
    // '-P00': {disabled: true},
    '-P00': {'plus': ['P01'], 'minus': []},
    '+P01': {'plus': [], 'minus': ['P00']},
    '-P01': {'plus': ['P00'], 'minus': []},

    /**
     * 'W00': 标配电视
     */
    '-W00': {'disabled': true},
};
